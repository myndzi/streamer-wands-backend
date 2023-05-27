const mongoose = require('mongoose')
const wandSchema = require('./wandModel').schema
const streamerSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: String,
    wands: [wandSchema],
    inventory: [String],
})

module.exports = mongoose.model('Streamers', streamerSchema)
