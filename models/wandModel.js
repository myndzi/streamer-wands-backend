const mongoose = require('mongoose')
const wandSchema = new mongoose.Schema({
    stats: {
        sprite: String,
        ui_name: String,
        mana: Number,
        mana_max: Number,
        mana_charge_speed: Number,
        reload_time: Number,
        actions_per_round: Number,
        deck_capacity: Number,
        shuffle_deck_when_empty: Boolean,
        spread_degrees: Number,
        speed_multiplier: Number,
        fire_rate_wait: Number,
    },
    always_cast: [String],
    deck: [String],
})

module.exports = mongoose.model('Wand', wandSchema)
