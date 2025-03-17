const mongoose = require('mongoose')
const playerSchema = new mongoose.Schema({
    names: [String],
    amounts: [Number],
    shifts: [[String]],
    shiftsTotal: Number,
    shiftsTimer: Number,
    health: [Number],
    gold: Number,
    x: Number,
    y: Number,
})

module.exports = mongoose.model('Player Info', playerSchema)
