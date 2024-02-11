const WandContainer = Vue.component('wand-comp', {
    props: ['stats', 'ac', 'deck'],
    template: `<div class="wand">
        <wand-stats :stats="stats"></wand-stats>
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
                },
                {
                    classes: 'crisp spells-cast',
                    label: 'Spells/Cast',
                    key: 'actions_per_round',
                },
                {
                    classes: 'crisp cast-delay',
                    label: 'Cast Delay',
                    key: 'fire_rate_wait',
                },
                {
                    classes: 'crisp recharge-time',
                    label: 'Recharge Time',
                    key: 'reload_time',
                },
                {
                    classes: 'crisp mana-max',
                    label: 'Mana Max',
                    key: 'mana_max',
                },
                {
                    classes: 'crisp mana-charge',
                    label: 'Mana chg spd',
                    key: 'mana_charge_speed',
                },
                {
                    classes: 'crisp deck-capacity',
                    label: 'Capacity',
                    key: 'deck_capacity',
                },
                {
                    classes: 'crisp wand-spread',
                    label: 'Spread',
                    key: 'spread_degrees',
                },
            ],
        }
    },
    props: ['stats'],
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
                } else {
                    stats[key] = stats[key].toFixed && stats[key].toFixed(0)
                }
            }
            return stats
        },
    },
    template: `<div class="stats-wrapper">
        <p class="stats-title">{{ stats.ui_name }}</p>
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
    template: `<div class="mt-20">
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
    template: `<div class="mt-20">
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
            // spell string contains both the ID and uses remaining
            id: this.spell && this.spell.split('_#')[0],
            uses: this.spell && +this.spell.split('_#')[1],
            // hide uses remaining overlay if in always cast slot
            ac: this.$parent.$options.name == 'wand-ac',
        }
    },
    mounted() {
        if (this.$refs.tooltip)
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip.$el, {
                placement: 'bottom',
                modifiers: [{ name: 'offset', options: { offset: [0, 35] } }],
            })
    },
    updated() {
        if (this.$refs.tooltip)
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip.$el, {
                placement: 'bottom',
                modifiers: [{ name: 'offset', options: { offset: [0, 35] } }],
            })
    },
    beforeDestroy() {
        if (this.tooltip) {
            this.tooltip.destroy()
            this.tooltip = null
        }
    },
    computed: {
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
    template: `<div class="spell-slot">
        <template v-if="this.spells.data[id]">
            <img v-if="this.spells.img[id].bgImage" :style="bgStyle" :src="'data:image/png;base64,' + this.spells.img[id].bgImage"/>
            <img ref="slot" class="spellZoom" :src="'data:image/png;base64,' + this.spells.data[id].sprite"/>
            <p v-if="(uses > -1) && ac" :style="pStyle">
                {{ uses }}
            </p>
            <spell-tooltip ref="tooltip" :spell="id"></spell-tooltip>
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
        if (this.$refs.tooltip)
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip.$el, {
                placement: 'bottom',
                modifiers: [{ name: 'offset', options: { offset: [0, 35] } }],
            })
    },
    updated() {
        if (this.$refs.tooltip)
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip.$el, {
                placement: 'bottom',
                modifiers: [{ name: 'offset', options: { offset: [0, 35] } }],
            })
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
    template: `<div class="item-slot">
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
                    .reduce((n, { name }) => `${n}+${name.split(' ')[0]}`, '')
                    .substring(1)
                total = `(${Math.floor(this.item.mats.reduce((n, { amt }) => n + amt, 0))}% full)`
            }
            return {
                name: `${names} ${this.item.name} ${total ? total : ''}`,
            }
        },
    },
    props: ['item', 'img'],
    template: `<div class="tooltip" :class="{ book: item.book }">
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

const containerComp = Vue.component('wands-container', {
    data() {
        return {
            ws: null,
            fKeys: [],
            retryTimeout: null,
            retries: 0,
            wands: streamerWands,
            inventory: streamerInventory,
            items: streamerItems,
            switches: {
                progressTable: { state: false, label: 'Show Progress Table' },
                showAll: { state: false, label: 'Show All Progress' },
                flipHidden: { state: false, label: 'Toggle Hidden Behavior' },
                betaContent: {
                    state: streamerVersion.indexOf('beta') > -1,
                    label: 'Show Beta Content',
                },
                apothContent: {
                    state: streamerVersion.indexOf('Apotheosis') > -1,
                    label: 'Show Apotheosis Content',
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
        }
    },
    computed: {
        dataVersion() {
            let enemies = icons.enemies.filter((x) => !x.beta)
            let out = {
                icons: {
                    perks: icons.perks,
                    spells: icons.spells.filter((x) => spellDataMain.hasOwnProperty(x.id)),
                    enemies: enemies,
                },
                prog: {
                    perks: streamerProgress[0].perks,
                    spells: streamerProgress[0].spells.filter((x) =>
                        spellDataMain.hasOwnProperty(x),
                    ),
                    enemies: streamerProgress[0].enemies.filter((x) =>
                        enemies.map((y) => y.id).includes(x),
                    ),
                },
            }
            if (this.switches.betaContent.state) {
                out = {
                    icons: icons,
                    // prog: streamerProgress[0],
                    prog: {
                        perks: streamerProgress[0].perks.filter((x) =>
                            icons.perks.map((y) => y.id).includes(x),
                        ),
                        spells: streamerProgress[0].spells.filter((x) =>
                            spellData.hasOwnProperty(x),
                        ),
                        enemies: streamerProgress[0].enemies.filter((x) =>
                            icons.enemies.map((y) => y.id).includes(x),
                        ),
                    },
                }
            }
            if (this.switches.apothContent.state) {
                out = {
                    icons: apothIcons,
                    prog: {
                        perks: streamerProgress[0].perks.filter((x) =>
                            apothIcons.perks.map((y) => y.id).includes(x),
                        ),
                        spells: streamerProgress[0].spells.filter((x) =>
                            spellDataApoth.hasOwnProperty(x),
                        ),
                        enemies: streamerProgress[0].enemies.filter((x) =>
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
    methods: {
        genKeys() {
            this.fKeys = this.wands.map((v) => 1000 + Math.random() * 9999)
        },
        connect() {
            const scheme = window.location.protocol === 'https:' ? 'wss' : 'ws'
            this.ws = new WebSocket(`${scheme}://${window.location.host}/client=${streamerName}`)
            this.ws.onopen = () => {}
            this.ws.onmessage = (msg) => {
                try {
                    const data = JSON.parse(msg.data)
                    if (data.type == 'wands') {
                        this.wands = data.wands
                        this.inventory = data.inventory
                        this.progress = data.progress
                        this.genKeys()
                    }
                } catch (err) {}
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
    template: `<div class="content">
        <div class="inventory-wrapper" v-if="inventory.length > 0">
            <spell-inv :spells="inventory" :items="items"></spell-inv>
        </div>
        <div class="outdated" v-else>
            <p>Streamer is running an outdated version of the mod.</p>
        </div>
        <div class="wands-wrapper">
            <wand-comp v-for="(wand, i) in wands" :key="fKeys[i]" :stats="wand.stats" 
            :ac="wand.always_cast" :deck="wand.deck"></wand-comp>
        </div>
        <div class="disclaimer">
            <p>Disclaimer: Spell tooltips are <span class="strike">not</span> <i>mostly</i> accurate at the moment.</p>
        </div>
        <div class="switches">
            <v-switch v-for="(sw, i) in switches" :key="i"
            v-model="sw.state" :title="sw.label"></v-switch>
        </div>
        <div v-if="switches.progressTable.state" class="prog-wrapper">
            <div class="top-border"></div>
            <prog-comp v-for="(table, i) in this.tables" 
            :key="i" :tName="table.name" :col="table.col" 
            :tableIcons="table.data" :tableProg="dataVersion.prog[table.name.toLowerCase()]" 
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
        if (this.$refs.tooltip)
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip.$el, {
                placement: 'top',
                modifiers: [{ name: 'offset', options: { offset: [0, 25] } }],
            })
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
    template: `<div class="prog" :style="{width : 1.85 * col + 'rem'}">
        <div class="header">
            <span>{{ tName }} - {{ perc }}%</span>
            <span>{{ tableProg.length }}/{{ tableIcons.length }}</span>
            <span v-if="selected != -1">({{ selected }} found)</span>
            <input class="search" type="text" v-model="search" :placeholder="'Search ' + tName" @keyup="filterIcons"/>
            <div class="tip">
                <img ref="slot" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAg0lEQVR4nGP8//8/AymABZnDyMjIkJ2YcRxZbOr8GZbIhqJoyE7MOP7y+UsGdDEGBgZLGJ8JWRKmeM2O9ZZrdqy3RBbDagNMET7AhEsC5hcMQ/7//w/HyIpDPAKPY1OD1QZ0dyMDRmSTGRkZsSpCVoPVhuzEjOPo8QEDLNgEiXYSMQAA+jlJnW6J0BUAAAAASUVORK5CYII="/>
                <search-tip ref="tooltip" :tip="tip[tName]"></search-tip>
            </div>
        </div>
        <div class="spells">
            <icon-comp v-for="icon in tableIcons" :key="icon.id" :icon="icon" :tName="tName" :ref="icon.id"
            :boolProg="(tableProg.includes(icon.id) || switches.showAll.state) ^ switches.flipHidden.state"
            ></icon-comp>
        </div>
    </div>`,
})

const searchTip = Vue.component('search-tip', {
    props: ['tip'],
    template: `<div class="tooltip" ref="tooltip">
        <p>{{ tip }}</p>
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
        if (this.$refs.tooltip)
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip.$el, {
                placement: 'bottom',
                modifiers: [{ name: 'offset', options: { offset: [0, 35] } }],
            })
    },
    beforeDestroy() {
        if (this.tooltip) {
            this.tooltip.destroy()
            this.tooltip = null
        }
    },
    props: ['icon', 'tName', 'boolProg'],
    template: `<div class="icon-slot" :class="[{ bgHide : !boolProg }, {spellTip : tName=='Spells'}]">
        <div class="zoom">
            <img v-if="icon.bgImage" :style="bgStyle" :src="'data:image/png;base64,' + icon.bgImage"/>
            <a v-if="icon.wiki_url" :href="icon.wiki_url" target="_blank" rel="noopener noreferrer">
                <img ref="slot" :src="'data:image/png;base64,' + icon.image"/>
            </a>
            <img v-else ref="slot" :src="'data:image/png;base64,' + icon.image"/>
        </div>
        <spell-tooltip v-if="tName=='Spells'" ref="tooltip" :spell="icon.id"></spell-tooltip>
        <icon-tooltip v-else ref="tooltip" :icon="icon" :iName="this.names[tName]"></icon-tooltip>
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
    props: ['icon', 'iName'],
    template: `<div class="tooltip">
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
    template: `<div>
        <label class="switch">
            <input :disabled="disabled" type="checkbox" ref="input"
                @input="handleInput" :checked="value" />
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
        // last minute add current seed with correct seedtool open in new tab link
        seedInfo() {
            let seedIndex = streamerVersion.findIndex((x) => x.indexOf('seed=') > -1)
            if (seedIndex == -1) return false
            let seed = streamerVersion[seedIndex]
            let url = `https://noitool.com/info?${seed}`
            if (this.switches.betaContent.state) {
                url = `https://dev.noitool.com/info?${seed}`
            }
            if (this.switches.apothContent.state) {
                url = false
            }
            return { seed: seed, url: url }
        },
    },
    props: ['spells', 'items'],
    inject: ['switches'],
    template: `<div class="inventory">
        <item-slot v-for="(v, i) in itemSlots" :item="itemSlots[i]" :key="i+20"></item-slot>
        <spell-slot v-for="(v, index) in slots" :spell="slots[index]" :key="index"></spell-slot>
        <p v-if="!seedInfo">No current run</p>
        <a v-else-if="seedInfo.url" :href="seedInfo.url" target="_blank" rel="noopener noreferrer">
            <p>{{ seedInfo.seed }}</p>
        </a>
        <p v-else>{{ seedInfo.seed }} No seed-tool for apotheosis</p>
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
    template: `<div class="tooltip">
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
            get streamerVersion() {
                return streamerVersion
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
