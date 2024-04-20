const mongoose = require('mongoose')
const wandSchema = require('./wandModel').schema
const progSchema = require('./progModel').schema
const infoSchema = require('./infoModel').schema
const streamerSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: String,
    wands: [wandSchema],
    inventory: [String],
    items: [String],
    progress: [progSchema],
    version: [String],
    info: [infoSchema],
})

module.exports = mongoose.model('Streamers', streamerSchema)
