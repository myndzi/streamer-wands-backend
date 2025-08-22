const mongoose = require('mongoose')
const progSchema = new mongoose.Schema({
    perks: [String],
    spells: [String],
    enemies: [String],
    pillars: [String],
})

module.exports = mongoose.model('Progress', progSchema)
