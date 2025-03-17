const mongoose = require('mongoose')
const wandSchema = require('./wandModel').schema
const progSchema = require('./progModel').schema
const playerSchema = require('./playerModel').schema
const runSchema = require('./runModel').schema
const featureSchema = require('./featureModel').schema
const streamerSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: String,
    modVersion: String,
    modFeatures: featureSchema,
    wands: [wandSchema],
    inventory: [String],
    items: [String],
    progress: progSchema,
    runInfo: runSchema,
    playerInfo: playerSchema,
})

module.exports = mongoose.model('Streamers', streamerSchema)
