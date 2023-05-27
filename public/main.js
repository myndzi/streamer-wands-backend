const WandContainer = Vue.component("wand-comp", {//
    props: ["stats", "ac", "deck"],
    template: `<div class="wand">
        <wand-stats :stats="stats"></wand-stats>
        <template v-if="ac.length > 0">
            <wand-ac :spells="ac"></wand-ac>
        </template>
        <wand-deck :spells="deck" :capacity="stats.deck_capacity"></wand-deck>
    </div>`
})

const WandStats = Vue.component("wand-stats", {
    data() {
        return {
            spriteKey: this.stats.sprite,
            propOrder: [
                { classes: "crisp shuffle-deck", label: "Shuffle", key: "shuffle_deck_when_empty" },
                { classes: "crisp spells-cast", label: "Spells/Cast", key: "actions_per_round" },
                { classes: "crisp cast-delay", label: "Cast Delay", key: "fire_rate_wait" },
                { classes: "crisp recharge-time", label: "Recharge Time", key: "reload_time" },
                { classes: "crisp mana-max", label: "Mana Max", key: "mana_max" },
                { classes: "crisp mana-charge", label: "Mana chg spd", key: "mana_charge_speed" },
                { classes: "crisp deck-capacity", label: "Capacity", key: "deck_capacity" },
                { classes: "crisp wand-spread", label: "Spread", key: "spread_degrees" }]
        }
    },
    props: ["stats"],
    computed: {
        sprite() {
            return wandSprites[this.spriteKey] || wandSprites["bomb_wand"]
        },
        uiStats() {
            const stats = Object.assign({}, this.stats)
            for (const key in stats) {
                if (key == "shuffle_deck_when_empty") {
                    stats[key] = stats[key] ? "Yes" : "No"
                }
                else if (["fire_rate_wait", "reload_time"].indexOf(key) > -1) {
                    stats[key] = (stats[key] / 60).toFixed(2)
                }
                else if (key == "spread_degrees") {
                    stats[key] = `${stats[key].toFixed(1)} DEG`
                }
                else if (key == "deck_capacity") {
                    const ac = this.$parent.ac.length
                    stats[key] = ac ? stats[key] - ac : stats[key]
                }
                else {
                    stats[key] = stats[key].toFixed && stats[key].toFixed(0)
                }
            }
            return stats
        }
    },
    template: `<div class="stats">
        <div class="stats-props">
            <p v-for="prop in propOrder" :class="prop.classes" :key="prop.label">{{prop.label}}</p>
        </div>
        <div class="stats-props">
            <p v-for="prop in propOrder" :key="prop.key">{{uiStats[prop.key]}}</p>
        </div>
        <div class="wand-slot">
            <img :src="'data:image/jpg;base64,' + sprite"/>
        </div>
    </div>`
})

const WandAc = Vue.component("wand-ac", {
    props: ["spells"],
    template: `<div class="mt-20">
        <p>Always Cast:</p>
        <div class="spells">
            <spell-slot v-for="spell in spells" :spell="spell"></spell-slot>
        </div>
    </div>`
})

const WandDeck = Vue.component("wand-deck", {
    props: ["spells", "capacity"],
    computed: {
        real_cap() {
            const ac = this.$parent.ac.length
            if (ac) {
                return this.capacity - ac
            }
            else {
                return this.capacity
            }
        },
        deck() {
            const d = new Array(this.real_cap)
            d.fill(1)
            return d
        }
    },
    template: `<div class="mt-20">
        <p>Spells:</p>
        <div class="spells">
            <spell-slot v-for="(v, index) in deck" :spell="spells[index]" :key="index"></spell-slot>
        </div>
    </div>`
})

const SpellSlot = Vue.component("spell-slot", {
    data() {
        return {
            trigger: `spell_${1000 + (Math.random * 9999999)}`,
            tooltip: null
        }
    },
    mounted() {
        if (this.$refs.tooltip)
            this.tooltip = Popper.createPopper(this.$refs.slot, this.$refs.tooltip.$el)
    },
    beforeDestroy() {
        if (this.tooltip) {
            this.tooltip.destroy()
            this.tooltip = null
        }
    },
    props: ["spell"],
    template: `<div class="spell-slot">
        <template v-if="spellData[spell]">
            <img ref="slot" :src="'data:image/jpg;base64,' + spellData[spell].sprite"/>
            <spell-tooltip ref="tooltip" :spell="spell"></spell-tooltip>
        </template>
    </div>`
})

const containerComp = Vue.component("wands-container", {
    data() {
        return {
            ws: null,
            fKeys: [],
            retryTimeout: null,
            retries: 0,
            wands: streamerWands,
            inventory: streamerInventory
        }
    },
    created() {
        this.genKeys()
        if (!this.ws) {
            this.connect()
        }
    },
    methods: {
        genKeys() {
            this.fKeys = this.wands.map(v => (1000 + (Math.random() * 9999)))
        },
        connect() {
            this.ws = new WebSocket(`wss://${window.location.host}/client=${streamerName}`)
            this.ws.onopen = () => { }
            this.ws.onmessage = (msg) => {
                try {
                    const data = JSON.parse(msg.data)
                    if (data.type == "wands") {
                        this.wands = data.wands
                        this.inventory = data.inventory
                        this.genKeys()
                    }
                } catch (err) {

                }
            }
            this.ws.onclose = () => {
                if (this.retries >= 10) { return }
                clearTimeout(this.retryTimeout)
                this.retryTimeout = setTimeout(() => {
                    this.connect()
                    this.retries++
                }, 3500)
            }
        }
    },
    template: `<div class="content">
        <div class="inventory-wrapper" v-if="inventory.length > 0">
            <spell-inv :spells="inventory"></spell-inv>
        </div>
        <div class="outdated" v-else>
            <p>Streamer is running an outdated version of the mod.</p>
        </div>
        <wand-comp v-for="(wand, i) in wands" :key="fKeys[i]" :stats="wand.stats" :ac="wand.always_cast" :deck="wand.deck"></wand-comp>
    </div>`
})

const SpellInventory = Vue.component("spell-inv", {
    computed: {
        slots() {
            let s = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
            for (const [i, spell] of this.spells.entries()) {
                s[i] = spell
            }
            return s
        }
    },
    props: ["spells"],
    template: `<div class="inventory">
        <spell-slot v-for="(v, index) in slots" :spell="slots[index]" :key="index"></spell-slot>
    </div>`
})

const SpellTooltip = Vue.component("spell-tooltip", {
    data() {
        return {
            sprite: spellData[this.spell].sprite,
            description: spellData[this.spell].description,
            types: [
                "Projectile",
                "Projectile",
                "Proj. modifier",
                "Multicast",
                "Material",
                "Other",
                "Utility",
                "Passive"
            ],
            stats: [
                { label: "Type", classes: "crisp action-type", key: "action_type" },
                { label: "Uses remaining", classes: "crisp max-uses", key: "action_max_uses" },
                { label: "Mana drain", classes: "crisp mana-drain", key: "action_mana_drain" },
                { label: "Proj. Speed", classes: "crisp speed-mult", key: "speed_multiplier" },
                { label: "Damage", classes: "crisp dmg-projectile", key: "damage_projectile_add" },
                { label: "Dmg. Expl", classes: "crisp dmg-explosion", key: "damage_explosion" },
                { label: "Expl. Radius", classes: "crisp explosion-radius", key: "explosion_radius" },
                { label: "Dmg. Fire", classes: "crisp dmg-fire", key: "damage_fire" },

                { label: "Cast delay", classes: "crisp cast-delay", key: "fire_rate_wait" },
                { label: "Recharge time", classes: "crisp recharge-time", key: "reload_time" },

                { label: "Spread", classes: "crisp wand-spread", key: "spread_degrees" }
            ]
        }
    },
    props: ["spell"],
    computed: {
        name() {
            let name = spellData[this.spell].name
            return name ? name.toUpperCase() : "UNKNOWN"
        },
        meta() {
            const m = {}
            const data = spellData[this.spell] && spellData[this.spell].meta
            const keys = ["action_type", "action_max_uses", "bounces", "damage_critical_chance", "damage_electricity", "damage_explosion", "damage_fire", "damage_melee",
                "damage_projectile_add", "explosion_radius", "fire_rate_wait", "reload_time", "speed_multiplier", "spread_degrees", "action_mana_drain"]

            if (!data) { return m }
            for (const key of keys) {
                const prop = data[key]
                if (typeof prop == "undefined") { continue }

                switch (key) {
                    case "action_type":
                        m[key] = this.types[prop]
                        break

                    case "damage_projectile_add":
                        m[key] = Math.ceil(prop * 25)
                        break

                    case "speed_multiplier":
                        m[key] = prop > 1 || prop < 1 ? `x ${prop.toFixed(2)}` : undefined
                        break
                    case "fire_rate_wait":
                    case "reload_time":
                        m[key] = `${prop > 0 ? "+" : ""}${(prop / 60).toFixed(2)} s`
                        break
                    case "spread_degrees":
                        m[key] = `${prop > 0 ? "+" : ""}${prop.toFixed(0)} DEG`
                        break
                    default:
                        m[key] = prop
                        break
                }
            }
            return m
        }
    },
    template: `<div class="tooltip">
        <p class="tooltip-title">{{name}}</p>
        <p class="tooltip-description">{{description}}</p>
        <template v-for="stat in stats">
            <p v-if="typeof meta[stat.key] != 'undefined'" :key="stat.key" :class="stat.classes">{{stat.label}} <span>{{meta[stat.key]}} </span> </p>
        </template>
        <img :src="'data:image/jpg;base64,' + sprite"/>
    </div>`
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
            }
        }
    }
})

Vue.component(WandContainer)
Vue.component(WandStats)
Vue.component(WandAc)
Vue.component(WandDeck)
Vue.component(SpellSlot)
const app = new Vue({
    render: function (h) {
        return h(containerComp)
    }
}).$mount('#app')