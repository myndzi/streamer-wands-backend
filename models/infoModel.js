const mongoose = require('mongoose')
const infoSchema = new mongoose.Schema({
    names: [String],
    amounts: [Number],
    shifts: [String],
    shiftInfo: [Number],
    health: [Number],
    gold: Number,
    x: Number,
    y: Number,
})

module.exports = mongoose.model('Info', infoSchema)
