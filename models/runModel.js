const mongoose = require('mongoose')
const runSchema = new mongoose.Schema({
    mods: [String],
    beta: String,
    ngp: Number,
    seed: Number,
    start: Date,
    streak: Number,
    playtime: Number,
    idletime: Number,
})

module.exports = mongoose.model('Run Info', runSchema)
