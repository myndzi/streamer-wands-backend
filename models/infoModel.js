const mongoose = require('mongoose')
const infoSchema = new mongoose.Schema({
    names: [String],
    amounts: [Number],
    shifts: [String],
    health: [Number],
    gold: Number,
})

module.exports = mongoose.model('Info', infoSchema)
