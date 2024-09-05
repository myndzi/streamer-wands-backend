const WandContainer = Vue.component('wand-comp', {
    props: ['stats', 'ac', 'deck'],
    template: /*html*/`
    <div class="wand">
        <wand-stats :stats="stats" :deck="deck"></wand-stats>
        <template v-if="ac.length > 0">
            <wand-ac :spells="ac"></wand-ac>
        </template>
        <wand-deck :spells="deck" :capacity="stats.deck_capacity"></wand-deck>
    </div>`,
})

const WandStats = Vue.component('wand-stats', {
    data() {
        return {
            spriteKey: this.stats.sprite,
            propOrder: [
                {
                    classes: 'crisp shuffle-deck',
                    label: 'Shuffle',
                    key: 'shuffle_deck_when_empty',
                    newSim: 'x'
                },
                {
                    classes: 'crisp spells-cast',
                    label: 'Spells/Cast',
                    key: 'actions_per_round',
                    newSim: 'a',
                },
                {
                    classes: 'crisp cast-delay',
                    label: 'Cast Delay',
                    key: 'fire_rate_wait',
                    simName: 'cast_delay',
                    newSim: 'd',
                },
                {
                    classes: 'crisp recharge-time',
                    label: 'Recharge Time',
                    key: 'reload_time',
                    newSim: 'r',
                },
                {
                    classes: 'crisp mana-max',
                    label: 'Mana Max',
                    key: 'mana_max',
                    newSim: 'm',
                },
                {
                    classes: 'crisp mana-charge',
                    label: 'Mana chg spd',
                    key: 'mana_charge_speed',
                    newSim: 'c',
                },
                {
                    classes: 'crisp deck-capacity',
                    label: 'Capacity',
                    key: 'deck_capacity',
                    newSim: 'l',
                },
                {
                    classes: 'crisp wand-spread',
                    label: 'Spread',
                    key: 'spread_degrees',
                    simName: 'spread',
                    newSim: 'q',
                },
                {
                    classes: 'crisp speed-mult',
                    label: 'Speed',
                    key: 'speed_multiplier',
                    newSim: 'v',
                },
            ],
        }
    },
    props: ['stats', 'deck'],
    computed: {
        sprite() {
            return wandSprites[this.spriteKey] || wandSprites['bomb_wand']
        },
        // item_chainsaw is a spritesheet so we need to detect that and give the div a class
        isAnimated() {
            return this.spriteKey == 'chainsaw'
        },
        uiStats() {
            const stats = Object.assign({}, this.stats)
            for (const key in stats) {
                if (key == 'shuffle_deck_when_empty') {
                    stats[key] = stats[key] ? 'Yes' : 'No'
                } else if (['fire_rate_wait', 'reload_time'].indexOf(key) > -1) {
                    stats[key] = (stats[key] / 60).toFixed(2)
                } else if (key == 'spread_degrees') {
                    stats[key] = `${stats[key].toFixed(1)} DEG`
                } else if (key == 'deck_capacity') {
                    const ac = this.$parent.ac.length
                    stats[key] = ac ? stats[key] - ac : stats[key]
                } else if (key == 'speed_multiplier') {
                    stats[key] = `x ${stats[key].toFixed(2)}`
                } else {
                    stats[key] = stats[key].toFixed && stats[key].toFixed(0)
                }
            }
            return stats
        },
        // old wand sim site, URL breaks if spell not present on page
        // wandSim() {
        //     let link = 'https://noita-wand-simulator.salinecitrine.com/?'
        //     let statsLink = this.propOrder.map((prop) => {
        //         let name = prop.simName || prop.key
        //         let value = +this.stats[prop.key]
        //         return `${name}=${value}`
        //     }).join('&')
        //     let deckLink = this.deck.map((spell) => spell.split("_#")[0]).join('%2C')
        //     return link + statsLink + '&spells=' + deckLink
        // },
        // new wand sim site, URL does not break if spell not on page
        wandSim() {
            let link = 'https://tinker-with-wands-online.vercel.app/?'
            let statsLink = this.propOrder.map(
                (prop) => `${prop.newSim}=${+this.stats[prop.key]}`).join('&')
            let deckLink = this.deck.map((spell) => spell.split("_#")[0]).join('%2C')
            return link + statsLink + '&spells=' + deckLink
        },
    },
    template: /*html*/`
    <div class="stats-wrapper">
        <div class="stats-header">
            <p class="stats-title">{{ stats.ui_name }}</p>
            <a :href="wandSim" tabindex="-1" target="_blank" rel="noopener noreferrer">
                <p>Tinker</p>
            </a>
        </div>
        <div class="stats">
            <div class="stats-props">
                <p v-for="prop in propOrder" :class="prop.classes" :key="prop.label">{{prop.label}}</p>
            </div>
            <div class="stats-props">
                <p v-for="prop in propOrder" :key="prop.key">{{uiStats[prop.key]}}</p>
            </div>
            <div :class="isAnimated ? 'anim-wand-slot' : 'wand-slot'">
                <img :src="'data:image/png;base64,' + sprite"/>
            </div>
        </div>
    </div>`,
})

const WandAc = Vue.component('wand-ac', {
    props: ['spells'],
    template: /*html*/`
    <div class="mt-20">
        <p>Always Cast:</p>
        <div class="spells">
            <spell-slot v-for="(spell,index) in spells" :spell="spell" :key="index"></spell-slot>
        </div>
    </div>`,
})

const WandDeck = Vue.component('wand-deck', {
    props: ['spells', 'capacity'],
    computed: {
        real_cap() {
            const ac = this.$parent.ac.length
            if (ac) {
                return this.capacity - ac
            } else {
                return this.capacity
            }
        },
        deck() {
            const d = new Array(this.real_cap)
            d.fill(1)
            return d
        },
    },
    template: /*html*/`
    <div class="mt-20">
        <p>Spells:</p>
        <div class="spells">
            <spell-slot v-for="(v, index) in deck" :spell="spells[index]" :key="index"></spell-slot>
        </div>
    </div>`,
})

const SpellSlot = Vue.component('spell-slot', {
    data() {
        return {
            tooltip: null,
            // override general class/element styling for uses remaining and spell background border
            pStyle: {
                fontSize: '18px',
                position: 'relative',
                left: '1px',
                top: '-2px',
                textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
            },
            bgStyle: {
                width: '35px',
                height: '35px',
                top: '0px',
                left: '0px',
            },
        }
    },
    mounted() {
        if (this.$refs.tooltip) {
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip.$el, {
                placement: 'bottom',
                modifiers: [{ name: 'offset', options: { offset: [0, 35] } }],
            })
        }
    },
    updated() {
        if (this.$refs.tooltip) {
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip.$el, {
                placement: 'bottom',
                modifiers: [{ name: 'offset', options: { offset: [0, 35] } }],
            })
        }
    },
    beforeDestroy() {
        if (this.tooltip) {
            this.tooltip.destroy()
            this.tooltip = null
        }
    },
    computed: {
        info() {
            return {
                // spell string contains both the ID and uses remaining
                id: this.spell && this.spell.split('_#')[0],
                uses: this.spell && +this.spell.split('_#')[1],
                // hide uses remaining overlay if in always cast slot
                ac: this.$parent.$options.name == 'wand-ac',
            }
        },
        // use icons objects to retrieve spell border images
        spells() {
            let data = spellDataMain
            let img = icons.spells.filter((x) => spellDataMain.hasOwnProperty(x.id))
            if (this.switches.betaContent.state) {
                data = spellData
                img = icons.spells
            }
            if (this.switches.apothContent.state) {
                data = spellDataApoth
                img = apothIcons.spells
            }
            return {
                data: data,
                img: img.reduce((obj, item) => Object.assign(obj, { [item.id]: item }), {}),
            }
        },
    },
    props: ['spell'],
    inject: ['switches'],
    template: /*html*/`
    <div class="spell-slot">
        <template v-if="this.spells.data[info.id]">
            <img v-if="this.spells.img[info.id].bgImage" :style="bgStyle" :src="'data:image/png;base64,' + this.spells.img[info.id].bgImage"/>
            <img ref="slot" class="spellZoom" :src="'data:image/png;base64,' + this.spells.data[info.id].sprite"/>
            <p v-if="(info.uses > -1) && !info.ac" :style="pStyle">
                {{ info.uses }}
            </p>
            <spell-tooltip ref="tooltip" :spell="info.id"></spell-tooltip>
        </template>
    </div>`,
})

// inventory items need a new component, basically a spell slot
const ItemSlot = Vue.component('item-slot', {
    data() {
        return {
            tooltip: null,
            url: null,
        }
    },
    mounted() {
        if (this.$refs.tooltip) {
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip.$el, {
                placement: 'bottom',
                modifiers: [{ name: 'offset', options: { offset: [0, 35] } }],
            })
        }
    },
    updated() {
        if (this.$refs.tooltip) {
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip.$el, {
                placement: 'bottom',
                modifiers: [{ name: 'offset', options: { offset: [0, 35] } }],
            })
        }
    },
    beforeDestroy() {
        if (this.tooltip) {
            this.tooltip.destroy()
            this.tooltip = null
        }
    },
    computed: {
        spellVersion() {
            let out = spellDataMain
            if (this.switches.betaContent.state) {
                out = spellData
            }
            if (this.switches.apothContent.state) {
                out = spellDataApoth
            }
            return out
        },
        itemInfo() {
            // streamer-wands noita mod transfers item data via a concatenated string
            let [path, id, desc, mats] = this.item.split('$')
            if (!itemData.hasOwnProperty(id)) return false
            if (!this.switches.apothContent.state && this.item.indexOf('potheosis') > -1)
                return false
            path = path.replace(new RegExp('mods/apotheosis/files', 'ig'), 'data')
            let materials = {}
            let m = []
            let color = ''
            if (mats.indexOf('@') > -1) {
                let both = mats.split('@')
                let c = +both[0]
                // streamer-wands noita mod outputs as an ABGR 8 byte number
                // so & with relavent FF byte and shift the bits
                color = {
                    r: c & 0x000000ff,
                    g: (c & 0x0000ff00) >> 8,
                    b: (c & 0x00ff0000) >> 16,
                    // a: 0xFF + ((c & 0xFF000000) >> 24),
                }
                let table = both.splice(1)
                table.forEach((x) => {
                    let [mat, amt] = x.split('#')
                    // streamer-wands noita mod only outputs amount of each material as a
                    // raw pixel amount, not a percent full so convert per container type
                    if (id == 'item_powder_stash_3') {
                        materials[mat] = +amt / 15
                    } else if (path == 'data/ui_gfx/items/potion_alchemist.png') {
                        materials[mat] = +amt / 5
                    } else if (path == 'data/ui_gfx/items/potion_reinforced.png') {
                        materials[mat] = +amt / 20
                    } else {
                        materials[mat] = +amt / 10
                    }
                })
                // sort by largest first
                m = Object.entries(materials)
                    .sort(([, a], [, b]) => b - a)
                    .map((x) => ({ name: x[0], amt: x[1] }))
            }

            return {
                id: id,
                name: itemData[id].name,
                // split the description lines
                desc: itemData[id].description[desc].replace(/\\n/g, '<br>'),
                sprite: itemData[id].sprite[path],
                mats: m,
                color: color,
                path: path,
                // set text to green if item is a tablet/book/etc that the game makes green
                book: id.indexOf('book') > -1,
            }
        },

        imgFilter() {
            b64 = 'data:image/png;base64,' + this.itemInfo.sprite
            // img.onload changes "this" scope so we need to be able to get to "this" via vm
            let vm = this
            let img = document.createElement('img')
            let canvas = document.createElement('canvas')
            // material flasks are always 16x16
            canvas.width = 16
            canvas.height = 16
            let ctx = canvas.getContext('2d')

            img.src = b64
            img.onload = function () {
                ctx.drawImage(img, 0, 0)

                let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
                let data = imageData.data

                const mat = vm.itemInfo.color
                // get fullness of material container as a decimal from 0-1
                const perc = 1 - vm.itemInfo.mats.reduce((n, { amt }) => n + amt, 0) / 100
                // all noita materials never fill the top 3 pixels so define an offset
                const top = 4 * 16 * 3
                // data is an array of RGBA elements that starts at x=0,y=0
                for (let x = 0; x < data.length; x += 4) {
                    let r = data[x]
                    let g = data[x + 1]
                    let b = data[x + 2]
                    // let a = data[x + 3]
                    let elevenTall = [
                        'data/ui_gfx/items/material_pouch.png',
                        'data/ui_gfx/items/potion_alchemist.png',
                        'data/ui_gfx/items/potion_reinforced.png',
                    ]
                    // do not recolor pixels if we are either at top of material container
                    // or the material container isn't full enough for coloration at this x/y
                    if (
                        elevenTall.some((x) => x == vm.itemInfo.path) &&
                        (x < top || x < 4 * 16 * 11 * perc + top)
                    ) {
                        continue
                    } else if (
                        vm.itemInfo.path == 'data/ui_gfx/items/potion.png' &&
                        (x < top || x < 4 * 16 * 12 * perc + top)
                    ) {
                        continue
                    } else {
                        // colorize material container by multiplying RGB values and dividing by 256
                        // in order to normalize value between 0 and 256
                        data[x] = (mat.r * r) >> 8
                        data[x + 1] = (mat.g * g) >> 8
                        data[x + 2] = (mat.b * b) >> 8
                    }
                }
                ctx.putImageData(imageData, 0, 0)
                vm.url = canvas.toDataURL()
            }
            return this.url
        },
    },
    props: ['item'],
    inject: ['switches'],
    template: /*html*/`
    <div class="item-slot">
        <template v-if="this.itemInfo">
            <img v-if="this.itemInfo.color" ref="slot" :src="imgFilter"/>
            <img v-else ref="slot" :src="'data:image/png;base64,' + this.itemInfo.sprite"/>
            <item-tooltip ref="tooltip" :item="itemInfo" :img="imgFilter"></item-tooltip>
        </template>
    </div>`,
})

// spell-tooltip but for items
const ItemTooltip = Vue.component('item-tooltip', {
    computed: {
        // add materials in descending order to material container names
        // also add the fullness percentage
        info() {
            let names = ''
            let total = ''
            if (this.item.mats.length > 0) {
                names = this.item.mats
                    .reduce((n, { name }) => `${n}+${name.split(" (")[0]}`, '')
                    .substring(1)
                total = `(${Math.floor(this.item.mats.reduce((n, { amt }) => n + amt, 0))}% full)`
            }
            return {
                name: `${names} ${this.item.name} ${total ? total : ''}`,
            }
        },
    },
    props: ['item', 'img'],
    template: /*html*/`
    <div class="tooltip" :class="{ book: item.book }">
        <p class="tooltip-title">{{ info.name }}</p>
        <p class="tooltip-wiki">({{ item.id }})</p>
        <template v-if="item.mats"
            <p v-for="(mat,i) in item.mats" :key="i" class="tooltip-description">{{ Math.ceil(mat.amt) }}% {{ mat.name }}</p>
        </template>
        <div class="desc-container">
            <p class="tooltip-description" v-html="item.desc"></p>
            <img v-if="this.item.color" ref="slot" :src="img"/>
            <img v-else ref="slot" :src="'data:image/png;base64,' + this.item.sprite"/>
        </div>
    </div>`,
})

const worldComp = Vue.component('world-comp', {
    data() {
        return {
            state: {
                shifts: false,
                mods: false,
                map: false,
            },
            // debugMods: "",
            // debugNG: "0",
            // debug: "",
            // debug: "hide-input",
        }
    },
    computed: {
        updateWorld() {
            let update = this.info[0]
            let shiftInfo = update.shiftInfo
            return {
                shifts: update.shifts,
                count: shiftInfo[0],
                timer: shiftInfo[1],
            }
        },
        mods() {
            // [0,n-2] = mods
            // n - 1 = NG+
            // n = seed
            // beta is conditionally entered by utils.lua
            let filtered = this.version.filter((x) => x != "beta").slice(0, -1)
            let ngp = Number(filtered[filtered.length - 1].slice(3))
            // debug new game plus number
            // let ngp = Number(this.debugNG)
            return {
                list: filtered.slice(0, -1),
                // debug mods list
                // list: filtered.slice(0, -1).concat(this.debugMods.split(",")),
                ngp: (ngp > 0) ? `+${ngp}` : ""
            }
        },
    },
    props: ['info', 'version'],
    inject: ['switches'],
    template: /*html*/`
    <div class="world-info">
        <div class="world-header">
            <v-switch v-model="state.shifts" :title="'Show Shifts [' + updateWorld.count + ']'"></v-switch>
            <v-switch v-model="state.mods" :title="'Show Mods [' + mods.list.length + ']'"></v-switch>
            <v-switch v-model="state.map" title="Show Map and Game info (spoilers!!!)"></v-switch>
        </div>
        <div class="world-body">
            <fungal-comp v-if="state.shifts" :shifts="updateWorld.shifts" :timer="updateWorld.timer" :number="updateWorld.count"></fungal-comp>
            <div v-if="state.mods" class="mods">
                <!--<input v-model="debugMods" :class="debug"/>-->
                <p><u>Mods:</u></p>
                <!--<input v-model="debugNG" :class="debug"/>-->
                <p v-for="mod in mods.list" :key="mod">{{ mod.length < 20 ? mod : mod.slice(0,20) }}</p>
            </div>
            <map-comp v-if="state.map" :info="info" :version="version" :mods="mods"></map-comp>
        </div>
    </div>`
})

const mapComp = Vue.component('map-comp', {
    data() {
        return {
            tooltip: null,
            mapData: {},
            loaded: false,
            // input: "0,0",
        }
    },
    mounted() {
        fetch("https://map.runfast.stream/js/tilesources.json")
            .then(res => (res.ok ? res.json() : Promise.reject(`HTTP ${res.status}: ${res.statusText}`)))
            .then(data => {
                this.mapData = data
                this.loaded = true
            })
            .catch(err => console.log(`map data fetch failed with error: ${err}`))
    },
    computed: {
        seedInfo() {
            let seedIndex = this.version.findIndex((x) => x.indexOf('seed=') > -1)
            if (seedIndex == -1) return false
            let seedNumber = Number(this.version[seedIndex].split("=")[1]) + this.mods.ngp
            let url = `https://noitool.com/info?seed=${seedNumber}`
            // uncomment when noita starts receiving beta pushes again
            // if (this.switches.betaContent.state) {
            //     url = `https://dev.noitool.com/info?${seed}`
            // }
            if (this.switches.apothContent.state) {
                url = false
            }
            return { seed: `Seed: ${seedNumber}`, url: url }
        },
        osd() {
            // map image zoom size
            const zoom = 8
            // chunk coordinate offsets/distances
            const yHell = 34
            const yHeaven = -14
            const yLoop = 48
            const widthPW = 70

            // from game coord input
            const x = this.info[0].x || 0
            const y = this.info[0].y || 0
            // debug coord input
            // const [x, y] = this.input.split(",").map((x) => +x) || [0, 0]

            const mapLabels = {
                "regular-main-branch": "Regular",
                "new-game-plus-main-branch": "NG+",
                "nightmare-main-branch": "Nightmare",
                "regular-beta": "Regular",
                "purgatory": "Purgatory",
                "apotheosis": "Apotheosis",
                "apotheosis-new-game-plus": "Apotheosis NG+",
                "apotheosis-tuonela": "Apotheosis Tuonela",
                "noitavania": "Noitavania",
                "noitavania-new-game-plus": "Noitavania NG+",
                "alternate-biomes": "Alternate Biomes"
            }

            // determine gamemode/map type
            let mapName = Number(this.mods.ngp) > 0 ? "new-game-plus-regular-main-branch" : "regular-main-branch"
            if (this.mods.list.includes("nightmare")) {
                mapName = "nightmare-main-branch"
            } else if (this.mods.list.includes("apotheosis")) {
                mapName = Number(this.mods.ngp) > 0 ? "apotheosis-new-game-plus" : "apotheosis"
                widthPW = 100
            } else if (this.mods.list.includes("purgatory")) {
                mapName = "purgatory"
            } else if (this.mods.list.includes("biome-plus")) {
                mapName = "alternate-biomes"
            } else if (this.mods.list.includes("noitavania")) {
                mapName = Number(this.mods.ngp) > 0 ? "noitavania-new-game-plus" : "noitavania"
            }

            // get map URL and topleft offsets in chunk coordinates
            const mapValues = this.mapData[mapName]
            const map = {
                urls: mapValues.map((x) => x.url.replace(/\.dzi/, '_files/')),
            }
            const mapDZI = JSON.parse(mapValues[0].dziContent)
            map.x0 = Math.abs(mapDZI.Image.TopLeft.X) / 512
            map.y0 = Math.abs(mapDZI.Image.TopLeft.Y) / 512

            // Parallel world x-only calculation
            const PW = Math.sign(x) * Math.floor((Math.abs(x / 512) + widthPW / 2) / widthPW)
            const xMap = Math.floor(((x / 512) + map.x0 - widthPW * PW) / zoom)
            const xStar = -7 + ((x + (map.x0 - widthPW * PW) * 512) - (xMap * 4096)) * 192 / 4096

            let src = map.urls[0]
            let pwName = "Main"
            if (PW >= 1) {
                src = map.urls[2] ?? map.urls[0]
                pwName = "East"
            } else if (PW <= -1) {
                src = map.urls[1] ?? map.urls[0]
                pwName = "West"
            }
            // Heaven/hell y-only calculation
            let HH = 0
            let hhName = ""
            // threshold for hell loops
            if (y > (yHell * 512)) {
                HH = Math.floor((y / 512 - yHell) / yLoop)
                hhName = ` Hell ${HH + 1}`
                // theshold for heaven loops
            } else if (y < (yHeaven * 512)) {
                HH = Math.ceil((y / 512 - yHeaven) / yLoop)
                hhName = ` Heaven ${Math.abs(HH) + 1}`
            }
            const yMap = Math.floor(((y / 512) + map.y0 - HH * yLoop) / zoom)
            const yStar = -6 + ((y + (map.y0 - yLoop * HH) * 512) - (yMap * 4096)) * 192 / 4096

            return {
                img: `${src}14/${xMap}_${yMap}.webp?v=1712752623`,
                name: mapLabels[mapName],
                url: `https://map.runfast.stream/?map=${mapName}&x=${x}&y=${y}&zoom=1200`,
                x: x.toLocaleString('en-US', { maximumFractionDigits: 2 }),
                y: y.toLocaleString('en-US', { maximumFractionDigits: 2 }),
                pw: (PW != 0) ? `${pwName} ${Math.abs(PW)}` : pwName,
                hh: hhName,
                xStar: xStar + 'px',
                yStar: yStar + 'px',
            }
        },
    },
    props: ['info', 'version', 'mods'],
    inject: ['switches'],
    template: /* html */`
    <div class="preview" v-if="loaded">
        <div class="preview-icon-wrapper">
            <p class="preview-icon" :style="{ left: osd.xStar, top: osd.yStar }"><b>&#9733;</b></p>
        </div>
        <a :href="osd.url" tabindex="-1" target="_blank" rel="noopener noreferrer">
            <img :src="osd.img"/>
            <p class="preview-link">Click for Fullscreen Map</p>
        </a>
        <div class="preview-info">
            <!--<input v-model="input"/>-->
            <p v-if="!seedInfo">No current run</p>
            <a v-else-if="seedInfo.url" :href="seedInfo.url" tabindex="1" target="_blank" rel="noopener noreferrer">
                <map-tooltip :seed="seedInfo.seed" :mods="mods"></map-tooltip>
            </a>
            <p v-else>Map {{ seedInfo.seed }}</p>
            <p>x: {{ osd.x }}</p>
            <p>y: {{ osd.y }}</p>
            <p>In {{ osd.pw }}{{ osd.hh }} NG{{ mods.ngp }}</p>
            <p>World Type: {{ osd.name }}</p>
        </div>
    </div>`
})

const mapTooltip = Vue.component('map-tooltip', {
    data() {
        return {
            tooltip: null,
        }
    },
    mounted() {
        if (this.$refs.tooltip) {
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip, {
                placement: 'right',
                modifiers: [{ name: 'offset', options: { offset: [0, 5] } }],
            })
        }
    },
    beforeDestroy() {
        if (this.tooltip) {
            this.tooltip.destroy()
            this.tooltip = null
        }
    },
    methods: {
        updateTip() {
            if (this.tooltip) {
                this.tooltip.update()
            }
        },
    },
    props: ["seed", "mods"],
    template: /* html */`
    <div ref="slot" class="shifts-tip" @mouseenter="updateTip">
        <p>Map {{ seed }}</p>
        <div ref="tooltip" class="tooltip fit">
            <p>Seed was incremented by {{ this.mods.ngp ? this.mods.ngp : 0 }}.</p>
            <p>(to display correct NG+ noitool shifts)</p>
        </div>
    </div>`
})

const fungalComp = Vue.component('fungal-comp', {
    data() {
        return {
            tooltip: null,
            state: {
                originalShift: false,
                hoverInfo: true,
                number: null,
            },
            rowToggles: [],
        }
    },
    mounted() {
        this.rowToggles = Array(this.shiftInfo.length).fill(false)
        if (this.$refs.tooltip) {
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip, {
                placement: 'top',
                modifiers: [{ name: 'offset', options: { offset: [0, 5] } }],
            })
        }
    },
    beforeDestroy() {
        if (this.tooltip) {
            this.tooltip.destroy()
            this.tooltip = null
        }
    },
    computed: {
        shiftInfo() {
            const transformed = {}
            const lastShift = {}
            const sequence = []

            let shiftsAll = []
            const nShifts = Math.min(Math.max(this.state.number ?? this.shifts.length, 1), this.number)
            for (let i = 0; i < nShifts; i++) {
                const shift = this.shifts[i]
                shiftsAll.push(shift.map((material, ioNumber) => {
                    if (ioNumber % 2) {
                        return material
                    }
                    const letter = (shift.length > 2) ? String.fromCharCode(97 + ioNumber / 2) : ""
                    return [(i + 1) + letter, material]
                }))
            }
            shiftsAll = shiftsAll.flat(Infinity)

            const HOP = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);

            let j = 0
            for (let i = 0; i < shiftsAll.length - 1; i += 3) {
                const shiftNumber = shiftsAll[i]
                const input = shiftsAll[i + 1]
                const original = shiftsAll[i + 2]
                const final = transformed[original] ?? { mat: original }
                transformed[input] = {
                    mat: final.mat,
                    j,
                }

                const shift = {
                    shiftNumber,
                    input,
                    output: {
                        original,
                        final: final.mat,
                    },
                    extra: { atShift: null, now: null },
                    cause: { output: null, extra: null },
                    isOverwritten: false,
                    j,
                };
                if (HOP(transformed, original)) {
                    shift.cause.output = transformed[original].j
                }

                if (HOP(transformed, final) && transformed[final] !== final) {
                    shift.extra.atShift = transformed[final].mat;
                }

                if (HOP(lastShift, input)) {
                    lastShift[input].isOverwritten = true
                }
                lastShift[input] = shift

                sequence.push(shift)
                j += 2
            }

            for (let i = 0; i < sequence.length; i++) {
                const shift = sequence[i]
                const final = shift.output.final
                if (HOP(transformed, final) && transformed[final].mat !== final) {
                    shift.extra.now = transformed[final].mat
                    shift.cause.extra = transformed[final].j
                }
            }

            return sequence
        }
    },
    methods: {
        highlight(cause, i) {
            if (cause.output != null) {
                [cause.output, cause.output + 1].forEach((cellIndex) => this.$refs.cells[cellIndex].classList.add('highlight'));
                [cause.output >> 1, i].forEach((cellIndex) => this.rowToggles.splice(cellIndex, 1, true));
            }
            if (cause.extra != null) {
                this.$refs.cells[cause.extra].classList.add('highlight');
                [cause.extra >> 1, i].forEach((cellIndex) => this.rowToggles.splice(cellIndex, 1, true));
            }
        },
        clear(causes, i) {
            Object.values(causes).forEach((cause) => {
                if (cause != null) {
                    [cause, cause + 1].forEach((cellIndex) => this.$refs.cells[cellIndex].classList.remove('highlight'));
                    [cause >> 1, i].forEach((cellIndex) => this.rowToggles.splice(cellIndex, 1, false));
                }
            });
        },
        updateTip() {
            if (this.tooltip) {
                this.tooltip.update()
            }
        },
    },
    props: ['shifts', 'timer', 'number'],
    template: /*html*/`
    <div class="shifts">
        <div class="shifts-header">
            <p><b>Shift Timer:</b> {{ timer > 0 ? Math.floor(300 - timer) + ' seconds remaining' : 'Ready to Shift' }}</p>
            <v-switch v-model="state.originalShift" title="Show Original Shift in First Column"></v-switch>
            <div class=shifts-input>    
                <span>Calculate up to Shift N =</span><input v-model="state.number" type="number" inputmode="numeric" min="1" :max="number" :placeholder="number"/>
                <span>/ {{ number }} Total</span>
            </div>
            <div class="shifts-table-row header">
                <div><b>N</b></div>
                <div><b>Input{{state.originalShift ? " &#8594; Raw Output" : "" }}</b></div>
                <div ref="slot" class="shifts-tip" @mouseenter="updateTip">
                    <b>Final Result</b>
                    <div ref="tooltip" class="tooltip fit">
                        <p>When Final Result lists two materials:</p>
                        <ul>
                            <li>Material 1 determines the visuals and material damage</li>
                            <li>Material 2 determines the stain and ingestion effects</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="shifts-table">
            <div class="shifts-table-row" v-for="(shift,i) in shiftInfo">
                <div>{{ shift.shiftNumber }}</div>
                <div ref="cells" :class="{ strike: shift.isOverwritten }">
                    <mat-comp :material="shift.input" side="left"></mat-comp>
                    <template v-if="state.originalShift || rowToggles[i]">
                        &#8594; <mat-comp  :material="shift.output.original" :side="shift.output.original != shift.output.final ? 'top' : 'right'"></mat-comp>
                    </template>
                </div>
                <div ref="cells" v-if="shift.extra.now" :class="{ strike: shift.isOverwritten }" @mouseenter="highlight(shift.cause, i)" @mouseleave="clear(shift.cause, i)">
                    <mat-comp :material="shift.output.final" :side="shift.cause.output ? 'bottom' : 'top'" :i="i" :info="shiftInfo"></mat-comp> +
                    <mat-comp  :material="shift.extra.now" side="right" :i="i" :info="shiftInfo"></mat-comp>
                </div>
                <div ref="cells" v-else-if="shift.output.original != shift.output.final" :class="{ strike: shift.isOverwritten }" @mouseenter="highlight(shift.cause, i)" @mouseleave="clear(shift.cause, i)">
                    <mat-comp :material="shift.output.final" side="right" :i="i" :info="shiftInfo"></mat-comp>
                </div>
                <div ref="cells" v-else :class="{ strike: shift.isOverwritten }" @mouseenter="highlight(shift.cause, i)" @mouseleave="clear(shift.cause, i)">
                    <mat-comp :material="shift.output.original" :side="shift.output.original != shift.output.final ? 'top' : 'right'" :i="i" :info="shiftInfo"></mat-comp>
                </div>
            </div>
        </div>
    </div>`
})

const materialComp = Vue.component('mat-comp', {
    data() {
        return {
            tooltip: null,
        }
    },
    mounted() {
        if (this.$refs.tooltip) {
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip, {
                placement: this.side,
                modifiers: [{
                    name: 'offset', options: {
                        offset: [
                            this.reasons.length > 0 ? 27 : 0,
                            this.side == 'left' ? 44.5 : 10
                        ]
                    }
                }],
            })
        }
    },
    beforeDestroy() {
        if (this.tooltip) {
            this.tooltip.destroy()
            this.tooltip = null
        }
    },
    computed: {
        mat() {
            let both = this.material.split("@")
            return {
                raw: both[0],
                ui: both[1],
            }
        },
        reasons() {
            if (!this.i) {
                return false
            }
            const shift = this.info[this.i]
            const reasons = []
            let reasonShift = {}
            if (shift.cause.output != null) {
                let cause = shift.cause.output >> 1
                reasonShift = this.info[cause]
                reasons.push({
                    shiftNumber: reasonShift.shiftNumber,
                    reason: `${reasonShift.input.split("@")[0]} → ${reasonShift.output.original.split("@")[0]}`,
                })
            }
            if (shift.cause.extra != null) {
                let cause = shift.cause.extra >> 1
                reasonShift = this.info[cause]
                reasons.push({
                    shiftNumber: reasonShift.shiftNumber,
                    reason: `${reasonShift.input.split("@")[0]} → ${reasonShift.output.original.split("@")[0]}`,
                })
            }
            return reasons
        },
    },
    methods: {
        updateTip() {
            if (this.tooltip) {
                this.tooltip.update()
            }
        },
    },
    props: {
        material: String,
        side: String,
        i: { type: Number, required: false },
        info: { type: Array, required: false },
    },
    template: /*html*/`
    <div class="material tip" ref="slot" @mouseover="updateTip">
        <span>{{ mat.ui }}</span>
        <div class="tooltip fit" ref="tooltip">
            <p v-if="reasons.length > 0">Material ID: {{ mat.raw }}</p>
            <p v-else>{{ mat.raw }}</p>
            <p v-if="reasons.length > 0">Reasons: </p>
            <p v-for="reason in reasons">    {{ reason.shiftNumber }}: {{ reason.reason }}</p>
        </div>
    </div>`
})

const playerComp = Vue.component('player-comp', {
    data() {
        return {
            tipHP: null,
            tipGold: null,
            state: false,
        }
    },
    mounted() {
        if (this.$refs.tipHP)
            this.tipHP = Popper.createPopper(this.$refs.slotHP, this.$refs.tipHP, {
                placement: 'bottom',
            })
        if (this.$refs.tipGold)
            this.tipGold = Popper.createPopper(this.$refs.slotGold, this.$refs.tipGold, {
                placement: 'bottom',
            })
    },
    beforeDestroy() {
        if (this.tipHP) {
            this.tipHP.destroy()
            this.tipHP = null
        }
        if (this.tipGold) {
            this.tipGold.destroy()
            this.tipGold = null
        }
    },
    computed: {
        updatePlayer() {
            let info = this.info[0]
            // comparing health to 2^63 - 1, use BigInt cuz > 2^53-1
            let bigHealth = BigInt(Math.floor(info.health[1] * 25))
            // 2^63-1
            let maxHealth = 9223372036854775807n
            return {
                hp: (info.health[0] * 25).toLocaleString('en-US'),
                maxHP: (info.health[1] * 25).toLocaleString('en-US'),
                gold: (info.gold).toLocaleString('en-US'),
                finite: {
                    gold: info.gold < (2 ** 31) - 1,
                    hp: bigHealth < maxHealth,
                },
                shortHP: Intl.NumberFormat('en-US', { notation: "compact", maximumSignificantDigits: 4 }).format(info.health[0] * 25),
                shortMaxHP: Intl.NumberFormat('en-US', { notation: "compact", maximumSignificantDigits: 4 }).format(info.health[1] * 25),
                shortGold: Intl.NumberFormat('en-US', { notation: "compact" }).format(info.gold),
                names: info.names,
                amounts: info.amounts,
            }
        }
    },
    props: ['info'],
    template: /*html*/`
    <div class="info-wrapper">
        <div class="player-info">
            <div class="tip">
                <p v-if="updatePlayer.finite.hp" class="health" ref="slotHP">{{ updatePlayer.shortHP }} / {{ updatePlayer.shortMaxHP }}</p>
                <p v-else class="health" ref="slotHP">&#8734; / &#8734;</p>
                <p class="tooltip fit" ref="tipHP">HP: {{ updatePlayer.hp}} / {{ updatePlayer.maxHP }}</p>
            </div>
            <div class="tip">
                <p v-if="updatePlayer.finite.gold" class="money" ref="slotGold">{{ updatePlayer.shortGold }}</p>
                <p v-else class="money" ref="slotGold">&#8734;</p>
                <p class="tooltip fit" ref="tipGold">$: {{ updatePlayer.gold}}</p>
            </div>
            <v-switch v-model="state" title="Show All Perks"></v-switch>
            <perks-comp :names="this.updatePlayer.names" :amounts="this.updatePlayer.amounts" :state="state"></perks-comp>
        </div>
    </div>`
})

const perksComp = Vue.component('perks-comp', {
    computed: {
        playerPerks() {
            let perks = this.names.map((name, ind) => ({
                name: name,
                amount: this.amounts[ind],
            }))
            return {
                first8: perks.slice(0, 8),
                over8: perks.slice(8),
            }
        },
        perks() {
            return this.perkTable.reduce((obj, item) => {
                obj[item.ui_name] = item
                return obj
            }, {})
        },
        pseuds() {
            return this.pseudTable.reduce((obj, item) => {
                obj[item.id] = item
                return obj
            }, {})
        },

    },
    props: ['names', 'amounts', 'state'],
    inject: ['perkTable', 'pseudTable'],
    template: /*html*/`
    <div class="perks">
        <perk-comp v-for="perk in playerPerks.first8" :key="perk.name" 
        :icon="perks[perk.name] ? perks[perk.name] : pseuds[perk.name]" :amount="perk.amount"></perk-comp>
        <perk-comp v-if="state" v-for="perk in playerPerks.over8" :key="perk.name" 
        :icon="perks[perk.name] ? perks[perk.name] : pseuds[perk.name]" :amount="perk.amount"></perk-comp>
    </div>`
})

const perkComp = Vue.component('perk-comp', {
    data() {
        return {
            tooltip: null,
        }
    },
    mounted() {
        if (this.$refs.tooltip) {
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip.$el, {
                placement: 'bottom',
                modifiers: [{ name: 'offset', options: { offset: [0, 10] } }],
            })
        }
    },
    beforeDestroy() {
        if (this.tooltip) {
            this.tooltip.destroy()
            this.tooltip = null
        }
    },
    props: ['icon', 'amount'],
    template: /*html*/`
    <div class="icon-slot no-bg">
        <div class="zoom no-bg">
            <a v-if="icon.wiki_url" :href="icon.wiki_url" tabindex="-1" target="_blank" rel="noopener noreferrer">
                <img ref="slot" :src="'data:image/png;base64,' + (icon.ui_img ? icon.ui_img : icon.image)"/>
            </a>
            <img v-else ref="slot" :src="'data:image/png;base64,' + (icon.ui_img ? icon.ui_img : icon.image)"/>
        </div>
        <perk-tooltip ref="tooltip" :icon="icon" :amount="amount"></perk-tooltip>
    </div>`,
})

const perkTooltip = Vue.component('perk-tooltip', {
    computed: {
        desc() {
            if (this.icon.description) {
                return this.icon.description.replace(/\\n/g, '<br>')
            }
            return null
        },
    },
    props: ['icon', 'amount'],
    template: /*html*/`
    <div class="tooltip">
        <p class="tooltip-title">{{ amount }} x {{ icon.name }}</p>
        <p class="tooltip-wiki">({{ icon.id }})</p>
        <div class="desc-container">
            <p v-if="icon.description" class="tooltip-description" v-html="desc"></p>
            <img :src="'data:image/png;base64,' + (icon.ui_img ? icon.ui_img : icon.image)"/>
        </div>
    </div>`,
})

const containerComp = Vue.component('wands-container', {
    data() {
        return {
            ws: null,
            fKeys: [],
            retryTimeout: null,
            retries: 0,
            wands: streamerWands,
            inventory: streamerInventory,
            progress: streamerProgress,
            version: streamerVersion,
            info: streamerInfo,
            items: streamerItems,
            newData: null,
            switches: {
                progressTable: {
                    state: false,
                    label: 'Show Progress Table',
                    className: 'progress-table',
                },
                autoRefresh: {
                    state: true,
                    label: 'Auto Refresh Data',
                    className: 'pause-updates',
                },
                showAll: { state: false, label: 'Show All Progress', className: 'show-all' },
                flipHidden: { state: false, label: 'Invert Highlighted', className: 'flip-hidden' },
                betaContent: {
                    // until nolla starts pushing new betas disable this feature (also hidden in css)
                    // state: streamerVersion.indexOf('beta') > -1,
                    state: true,
                    label: 'Show Beta Content',
                    className: 'beta-content',
                },
                apothContent: {
                    state: streamerVersion.indexOf('Apotheosis') > -1,
                    label: 'Show Apotheosis Content',
                    className: 'apoth-content',
                },
            },
        }
    },
    created() {
        this.genKeys()
        if (!this.ws) {
            this.connect()
        }
    },
    provide() {
        return {
            switches: this.switches,
            perkTable: this.dataVersion.icons.perks,
            pseudTable: this.dataVersion.icons.pseuds,
        }
    },
    computed: {
        dataVersion() {
            const progress = this.progress[0] || {
                perks: [],
                spells: [],
                enemies: [],
            }

            let enemies = icons.enemies.filter((x) => !x.beta)
            let out = {
                icons: {
                    perks: icons.perks,
                    spells: icons.spells.filter((x) => spellDataMain.hasOwnProperty(x.id)),
                    enemies: enemies,
                },
                prog: {
                    perks: progress.perks,
                    spells: progress.spells.filter((x) => spellDataMain.hasOwnProperty(x)),
                    enemies: progress.enemies.filter((x) => enemies.map((y) => y.id).includes(x)),
                },
            }
            if (this.switches.betaContent.state) {
                out = {
                    icons: icons,
                    prog: {
                        perks: progress.perks.filter((x) =>
                            icons.perks.map((y) => y.id).includes(x),
                        ),
                        spells: progress.spells.filter((x) => spellData.hasOwnProperty(x)),
                        enemies: progress.enemies.filter((x) =>
                            icons.enemies.map((y) => y.id).includes(x),
                        ),
                    },
                }
            }
            if (this.switches.apothContent.state) {
                out = {
                    icons: apothIcons,
                    prog: {
                        perks: progress.perks.filter((x) =>
                            apothIcons.perks.map((y) => y.id).includes(x),
                        ),
                        spells: progress.spells.filter((x) => spellDataApoth.hasOwnProperty(x)),
                        enemies: progress.enemies.filter((x) =>
                            apothIcons.enemies.map((y) => y.id).includes(x),
                        ),
                    },
                }
            }
            return out
        },
        tables() {
            return [
                { name: 'Perks', col: 9, data: this.dataVersion.icons.perks },
                { name: 'Spells', col: 12, data: this.dataVersion.icons.spells },
                {
                    name: 'Enemies',
                    col: 9,
                    data: this.dataVersion.icons.enemies.filter((x) => x.id != 'turret_right'),
                },
            ]
        },
    },
    watch: {
        switches: {
            handler: function (newVal, oldVal) {
                if (newVal.autoRefresh.state && this.newData !== null) {
                    this.updateData(this.newData)
                    this.newData = null
                }
            },
            deep: true,
        },
    },
    methods: {
        genKeys() {
            this.fKeys = this.wands.map((v) => 1000 + Math.random() * 9999)
        },
        updateData(data) {
            this.wands = data.wands
            this.inventory = data.inventory
            this.progress = data.progress
            this.items = data.items
            this.version = data.version
            this.info = data.info
            this.genKeys()
        },
        connect() {
            const scheme = window.location.protocol === 'https:' ? 'wss' : 'ws'
            this.ws = new WebSocket(`${scheme}://${window.location.host}/client=${streamerName}`)
            this.ws.onopen = () => { }
            this.ws.onmessage = (msg) => {
                try {
                    const data = JSON.parse(msg.data)
                    // console.log(data)
                    if (data.type == 'wands') {
                        if (this.switches.autoRefresh.state) {
                            this.updateData(data)
                        } else {
                            this.newData = data
                        }
                    }
                } catch (err) { }
            }
            this.ws.onclose = () => {
                if (this.retries >= 10) {
                    return
                }
                clearTimeout(this.retryTimeout)
                this.retryTimeout = setTimeout(() => {
                    this.connect()
                    this.retries++
                }, 3500)
            }
        },
    },
    template: /*html*/`
    <div class="content">
        <div class="top-wrapper">
            <div class="inventory-wrapper" v-if="inventory.length > 0">
                <spell-inv :spells="inventory" :items="items"></spell-inv>
            </div>
            <div class="outdated" v-else>
                <p>Streamer is running an outdated version of the mod.</p>
            </div>
            <player-comp :info="info"></player-comp>
        </div>
        <div class="wands-wrapper">
            <wand-comp v-for="(wand, i) in wands" :key="fKeys[i]" :stats="wand.stats" :ac="wand.always_cast" :deck="wand.deck"></wand-comp>
        </div>
        <div class="disclaimer">
            <world-comp :info="info" :version="version"></world-comp>
        </div>
        <div class="switches">
            <v-switch v-for="(sw, i) in switches" :key="i" v-model="sw.state" :title="sw.label" :class="sw.className"></v-switch>
        </div>
        <div v-if="switches.progressTable.state" class="prog-wrapper">
            <div class="top-border"></div>
            <prog-comp
                v-for="(table, i) in this.tables"
                :key="i"
                :tName="table.name"
                :col="table.col"
                :tableIcons="table.data"
                :tableProg="dataVersion.prog[table.name.toLowerCase()]"
            ></prog-comp>
        </div>
    </div>`,
})

const Progress = Vue.component('prog-comp', {
    data() {
        return {
            tooltip: null,
            search: '',
            selected: -1,
            tip: {
                Perks: 'Search by perk name or ID',
                Spells: "Search by spell name, ID, or search by @tooltip such as: '@cast<0' or '@type=static'",
                Enemies:
                    'Search by enemy name or ID, all icons try to link to wiki, but not all pages exist (or are name-matched)',
            },
        }
    },
    mounted() {
        if (this.$refs.tooltip) {
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip, {
                placement: 'top',
                modifiers: [{ name: 'offset', options: { offset: [0, 5] } }],
            })
        }
    },
    beforeDestroy() {
        if (this.tooltip) {
            this.tooltip.destroy()
            this.tooltip = null
        }
    },
    computed: {
        spellVersion() {
            let out = spellDataMain
            if (this.switches.betaContent.state) {
                out = spellData
            }
            if (this.switches.apothContent.state) {
                out = spellDataApoth
            }
            return out
        },
        perc() {
            return ((100 * this.tableProg.length) / this.tableIcons.length).toFixed(1)
        },
    },
    methods: {
        filterIcons() {
            let spells = this.spellVersion
            // short hand key/value pairs for searching
            let meta = {
                type: ['action_type'],
                'uses remaining': ['action_max_uses'],
                'mana drain': ['action_mana_drain'],
                damage: ['action_projectile', 'damage_projectile_add'],
                'dmg. ice': ['action_ice', 'damage_ice_add'],
                'dmg. slice': ['action_slice'],
                'dmg. drill': ['action_drill'],
                'dmg. fire': ['action_fire'],
                'dmg. healing': ['action_healing'],
                'dmg. holy': ['action_holy'],
                'dmg. melee': ['action_melee'],
                'dmg. electric': ['action_electricity', 'damage_electricity_add'],
                speed: ['action_speed', 'speed_multiplier'],
                'cast delay': ['fire_rate_wait'],
                'proj. speed': ['speed_multiplier'],
                'recharge time': ['reload_time'],
                'dmg. expl': ['action_explosion', 'damage_explosion_add'],
                'expl. radius': ['explosion_radius'],
                bounces: ['bounces'],
                spread: ['spread_degrees'],
                'crit. chance': ['damage_critical_chance'],
            }
            // more short hand keys, value is index
            let types = [
                'projectile',
                'static projectile',
                'projectile modifier',
                'multicast',
                'material',
                'other',
                'utility',
                'passive',
            ]
            // dmg values need to be multiplied by 25 to match up with UI
            let dmg25 = [
                'action_healing',
                'action_holy',
                'action_melee',
                'action_fire',
                'action_projectile',
                'damage_projectile_add',
                'action_slice',
                'action_drill',
                'action_ice',
                'action_electricity',
                'action_explosion',
                'damage_ice_add',
                'damage_electricity_add',
                'damage_explosion_add',
            ]
            // delay values need to be mutliplied by 60 to match up with UI
            let delay = ['reload_time', 'fire_rate_wait']
            this.selected = 0
            // not gonna lie, this search function is a horror monster and proves
            // i'm bad at coding
            this.tableIcons.forEach((icon) => {
                const id = icon.id.toLowerCase()
                const name = icon.name.toLowerCase()
                const search = this.search.toLowerCase()
                const el = this.$refs[icon.id][0].$el
                if (this.tName == 'Spells') {
                    var spell = spells[icon.id].meta
                }
                el.classList.remove('highlight')

                // check if we are searching name/id or searching by @meta property
                if (search[0] == '@') {
                    const metaSearch = search.substring(1)
                    const metaKeys = Object.keys(meta)
                    const metaInd = metaKeys.findIndex((x) =>
                        x.match(new RegExp(metaSearch.split(/[=><]/)[0])),
                    )

                    if (!meta[metaKeys[metaInd]]) return
                    const keys = meta[metaKeys[metaInd]]
                    const re = new RegExp('[><][d.-]*')
                    if (keys.some((key) => spell.hasOwnProperty(key))) {
                        // check if current spell has the meta property we are searching by
                        if (/type=\w+/.test(metaSearch)) {
                            // check if we are searching by spell type
                            const keyVal = metaSearch.split(/=+/)
                            if (!keyVal[1]) return
                            const valInd = types.findIndex((x) => x.match(new RegExp(keyVal[1])))
                            if (spell.action_type == valInd) {
                                this.selected++
                                el.classList.remove('searchHide')
                                el.classList.add('highlight')
                            } else {
                                el.classList.add('searchHide')
                            }
                        } else if (re.test(metaSearch)) {
                            // otherwise we are searching by a meta property
                            const parts = metaSearch.split(/([><])+/)
                            if (!parts[2]) return
                            const cmpFilter = keys.filter((key) => spell.hasOwnProperty(key))
                            let val = parseFloat(parts[2])
                            if (dmg25.indexOf(keys[0]) > -1) {
                                val *= 25
                            } else if (delay.indexOf(keys[0]) > -1) {
                                val *= 60
                            }
                            // check for > or < after meta property declaration
                            if (
                                cmpFilter &&
                                (parts[1] == '>' ? spell[keys[0]] > val : spell[keys[0]] < val)
                            ) {
                                this.selected++
                                el.classList.remove('searchHide')
                                el.classList.add('highlight')
                            } else {
                                el.classList.add('searchHide')
                            }
                        } else {
                            el.classList.remove('searchHide')
                            this.selected++
                            el.classList.add('highlight')
                        }
                    } else {
                        el.classList.add('searchHide')
                    }
                } else if ([id, name].some((x) => x.indexOf(search) > -1)) {
                    // id or name search
                    this.selected++
                    el.classList.remove('searchHide')
                    if (search.length > 0) {
                        el.classList.add('highlight')
                    }
                } else {
                    el.classList.add('searchHide')
                }
                // reset found counter
                if (!search.length) this.selected = -1
            })
        },
    },
    props: ['tName', 'col', 'tableIcons', 'tableProg'],
    inject: ['switches'],
    template: /*html*/`
    <div class="prog" :style="{width : 1.85 * col + 'rem'}">
        <div ref="slot" class="header">
            <div class="stats-wrap">
                <div class="stats">
                    <span>{{ tName }} - {{ perc }}%</span>
                    <span>{{ tableProg.length }}/{{ tableIcons.length }}</span>
                    <span v-if="selected != -1">({{ selected }} found)</span>
                </div>
                <div class="tip">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAg0lEQVR4nGP8//8/AymABZnDyMjIkJ2YcRxZbOr8GZbIhqJoyE7MOP7y+UsGdDEGBgZLGJ8JWRKmeM2O9ZZrdqy3RBbDagNMET7AhEsC5hcMQ/7//w/HyIpDPAKPY1OD1QZ0dyMDRmSTGRkZsSpCVoPVhuzEjOPo8QEDLNgEiXYSMQAA+jlJnW6J0BUAAAAASUVORK5CYII="/>
                    <div ref="tooltip" class="tooltip">
                        <p>{{ tip[tName] }}</p>
                    </div>
                </div>
            </div>
            <div class="search-wrap">
                <input class="search" type="text" v-model="search" tabindex="1" :placeholder="'Search ' + tName" @keyup="filterIcons"/>
            </div>
        </div>
        <div class="spells">
            <icon-comp
                v-for="icon in tableIcons"
                :key="icon.id"
                :icon="icon"
                :tName="tName"
                :ref="icon.id"
                :boolProg="(tableProg.includes(icon.id) || switches.showAll.state) ^ switches.flipHidden.state"
            ></icon-comp>
        </div>
    </div>`,
})

const IconComp = Vue.component('icon-comp', {
    data() {
        return {
            tooltip: null,
            names: {
                Enemies: 'Enemy',
                Spells: 'Spell',
                Perks: 'Perk',
            },
            bgStyle: {
                width: '38px',
                height: '38px',
                left: '-1px',
                top: '-1px',
                opacity: '0.5',
            },
        }
    },
    mounted() {
        if (this.$refs.tooltip) {
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip.$el, {
                placement: 'bottom',
                modifiers: [{ name: 'offset', options: { offset: [0, 35] } }],
            })
        }
    },
    beforeDestroy() {
        if (this.tooltip) {
            this.tooltip.destroy()
            this.tooltip = null
        }
    },
    props: ['icon', 'tName', 'boolProg'],
    template: /*html*/`
    <div class="icon-slot" :class="[{ bgHide : !boolProg }, {spellTip : tName=='Spells'}]">
        <div class="zoom">
            <img v-if="icon.bgImage" :style="bgStyle" :src="'data:image/png;base64,' + icon.bgImage"/>
            <a v-if="icon.wiki_url" :href="icon.wiki_url" tabindex="-1" target="_blank" rel="noopener noreferrer">
                <img ref="slot" :src="'data:image/png;base64,' + icon.image"/>
            </a>
            <img v-else ref="slot" :src="'data:image/png;base64,' + icon.image"/>
        </div>
        <spell-tooltip v-if="tName=='Spells'" ref="tooltip" :spell="icon.id"></spell-tooltip>
        <icon-tooltip v-else ref="tooltip" :icon="icon"></icon-tooltip>
    </div>`,
})

const IconTooltip = Vue.component('icon-tooltip', {
    computed: {
        desc() {
            if (this.icon.description) {
                return this.icon.description.replace(/\\n/g, '<br>')
            }
            return null
        },
    },
    props: ['icon'],
    template: /*html*/`
    <div class="tooltip">
        <p class="tooltip-title">{{ icon.name }}</p>
        <p class="tooltip-wiki">({{ icon.id }})</p>
        <div class="desc-container">
            <p v-if="icon.description" class="tooltip-description" v-html="desc"></p>
            <img :src="'data:image/png;base64,' + icon.image"/>
        </div>
    </div>`,
})

const vSwitch = Vue.component('v-switch', {
    props: {
        value: { type: Boolean, required: true },
        title: { type: String, required: true },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            content: false,
        }
    },
    methods: {
        handleInput() {
            this.content = this.$refs.input.checked
            this.$emit('input', this.content)
        },
    },
    template: /*html*/`
    <div class="switch-group">
        <label class="switch">
            <input :disabled="disabled" type="checkbox" ref="input" @input="handleInput" :checked="value" tabindex="1"/>
            <span class="slider round"></span>
        </label>
        <slot></slot>
        <span>{{ title }}</span>
    </div>`,
})

const SpellInventory = Vue.component('spell-inv', {
    computed: {
        slots() {
            let s = Array(16).fill('0')
            for (const [i, spell] of this.spells.entries()) {
                s[i] = spell
            }
            return s
        },
        itemSlots() {
            let s = Array(4).fill('0')
            for (const [i, spell] of this.items.entries()) {
                s[i] = spell
            }
            return s
        },
    },
    props: ['spells', 'items'],
    inject: ['switches'],
    template: /*html*/`
    <div class="inventory">
        <item-slot v-for="(v, i) in itemSlots" :item="itemSlots[i]" :key="i+20"></item-slot>
        <spell-slot v-for="(v, index) in slots" :spell="slots[index]" :key="index"></spell-slot>
    </div>`,
})

const SpellTooltip = Vue.component('spell-tooltip', {
    data() {
        return {
            types: [
                'Projectile',
                'Static Projectile',
                'Proj. modifier',
                'Multicast',
                'Material',
                'Other',
                'Utility',
                'Passive',
            ],
            stats: [
                {
                    label: 'Type',
                    classes: 'crisp action-type',
                    key: 'action_type',
                },
                {
                    label: 'Uses remaining',
                    classes: 'crisp max-uses',
                    key: 'action_max_uses',
                },
                {
                    label: 'Mana drain',
                    classes: 'crisp mana-drain',
                    key: 'action_mana_drain',
                },
                {
                    label: 'Damage',
                    classes: 'crisp dmg-projectile',
                    key: 'action_projectile',
                },
                {
                    label: 'Dmg. Slice',
                    classes: 'crisp dmg-slice',
                    key: 'action_slice',
                },
                {
                    label: 'Dmg. Drill',
                    classes: 'crisp dmg-drill',
                    key: 'action_drill',
                },
                {
                    label: 'Dmg. Ice',
                    classes: 'crisp dmg-ice',
                    key: 'action_ice',
                },
                {
                    label: 'Dmg. Ice',
                    classes: 'crisp dmg-ice',
                    key: 'damage_ice_add',
                },
                {
                    label: 'Dmg. Fire',
                    classes: 'crisp dmg-fire',
                    key: 'action_fire',
                },
                {
                    label: 'Dmg. Healing',
                    classes: 'crisp dmg-healing',
                    key: 'action_healing',
                },
                {
                    label: 'Dmg. Holy',
                    classes: 'crisp dmg-holy',
                    key: 'action_holy',
                },
                {
                    label: 'Dmg. Melee',
                    classes: 'crisp dmg-melee',
                    key: 'action_melee',
                },
                {
                    label: 'Dmg. Electric',
                    classes: 'crisp dmg-electric',
                    key: 'action_electricity',
                },
                {
                    label: 'Dmg. Electric',
                    classes: 'crisp dmg-electric',
                    key: 'damage_electricity_add',
                },
                {
                    label: 'Speed',
                    classes: 'crisp speed-mult',
                    key: 'action_speed',
                },
                {
                    label: 'Cast delay',
                    classes: 'crisp cast-delay',
                    key: 'fire_rate_wait',
                },
                {
                    label: 'Proj. Speed',
                    classes: 'crisp speed-mult',
                    key: 'speed_multiplier',
                },
                {
                    label: 'Recharge time',
                    classes: 'crisp recharge-time',
                    key: 'reload_time',
                },
                {
                    label: 'Dmg. Expl',
                    classes: 'crisp dmg-explosion',
                    key: 'action_explosion',
                },
                {
                    label: 'Expl. Radius',
                    classes: 'crisp explosion-radius',
                    key: 'explosion_radius',
                },
                {
                    label: 'Dmg. Expl',
                    classes: 'crisp dmg-explosion',
                    key: 'damage_explosion_add',
                },
                {
                    label: 'Bounces',
                    classes: 'crisp bounces',
                    key: 'bounces',
                },
                {
                    label: 'Spread',
                    classes: 'crisp wand-spread',
                    key: 'spread_degrees',
                },
                {
                    label: 'Crit. Chance',
                    classes: 'crisp dmg-crit-chance',
                    key: 'damage_critical_chance',
                },
                {
                    label: 'Damage',
                    classes: 'crisp dmg-projectile',
                    key: 'damage_projectile_add',
                },
            ],
        }
    },
    props: ['spell'],
    inject: ['switches'],
    computed: {
        spellVersion() {
            let out = spellDataMain
            if (this.switches.betaContent.state) {
                out = spellData
            }
            if (this.switches.apothContent.state) {
                out = spellDataApoth
            }
            return out
        },
        name() {
            let name = this.spellVersion[this.spell].name
            return name ? name.toUpperCase() : 'UNKNOWN'
        },
        meta() {
            const m = {}
            let data = this.spellVersion[this.spell] && this.spellVersion[this.spell].meta
            const keys = this.stats.map((x) => x.key)
            if (!data) {
                return m
            }
            for (const key of keys) {
                const prop = data[key]
                if (typeof prop == 'undefined') {
                    continue
                }

                switch (key) {
                    case 'action_type':
                        m[key] = this.types[prop]
                        break
                    case 'action_healing':
                    case 'action_holy':
                    case 'action_melee':
                    case 'action_fire':
                    case 'action_projectile':
                        m[key] = Math.ceil(prop * 25)
                        break
                    case 'damage_projectile_add':
                        m[key] = `${prop > 0 ? '+' : ''}${Math.ceil(prop * 25)}`
                        break
                    case 'action_slice':
                    case 'action_drill':
                    case 'action_ice':
                    case 'action_electricity':
                    case 'action_explosion':
                        m[key] = Math.floor(prop * 25)
                        break
                    case 'damage_ice_add':
                    case 'damage_electricity_add':
                    case 'damage_explosion_add':
                        m[key] = `${prop > 0 ? '+' : ''}${Math.floor(prop * 25)}`
                        break
                    case 'speed_multiplier':
                        m[key] = prop > 1 || prop < 1 ? `x ${prop.toFixed(2)}` : undefined
                        break
                    case 'fire_rate_wait':
                    case 'reload_time':
                        m[key] = `${prop > 0 ? '+' : ''}${(prop / 60)
                            .toFixed(2)
                            .replace('.00', '.0')} s`
                        break
                    case 'spread_degrees':
                        m[key] = `${prop > 0 ? '+' : ''}${prop.toFixed(0)} DEG`
                        break
                    case 'bounces':
                        m[key] = `${prop > 0 ? '+' : ''}${prop}`
                        break
                    case 'damage_critical_chance':
                        m[key] = `${prop > 0 ? '+' : ''}${prop}%`
                        break
                    default:
                        m[key] = prop
                        break
                }
            }
            return m
        },
    },
    template: /*html*/`
    <div class="tooltip">
        <p class="tooltip-title">{{name}}</p>
        <p class="tooltip-description">{{spellVersion[spell].description}}</p>
        <template v-for="(stat, index) in stats">
            <p v-if="typeof meta[stat.key] != 'undefined'" :key="stat.key" :class="stat.classes">
            {{stat.label}} <span>{{meta[stat.key]}} </span> </p>
            <br v-if="(index + 1) % 3 == 0 && typeof meta[stat.key] != 'undefined'">
            </template>
        <img :src="'data:image/png;base64,' + spellVersion[spell].sprite"/>
    </div>`,
})

Vue.mixin({
    data: function () {
        return {
            get Popper() {
                return Popper
            },
            get streamerName() {
                return streamerName
            },
            get wandSprites() {
                return wandSprites
            },
            get spellData() {
                return spellData
            },
            get spellDataMain() {
                return spellDataMain
            },
            get spellDataApoth() {
                return spellDataApoth
            },
            get icons() {
                return icons
            },
            get itemData() {
                return itemData
            },
            get apothIcons() {
                return apothIcons
            },
        }
    },
})

Vue.component(WandContainer)
Vue.component(WandStats)
Vue.component(WandAc)
Vue.component(WandDeck)
Vue.component(SpellSlot)
Vue.component(SpellTooltip)
Vue.component(Progress)
Vue.component(vSwitch)
const app = new Vue({
    render: function (h) {
        return h(containerComp)
    },
}).$mount('#app')
