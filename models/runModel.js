const mongoose = require('mongoose')
const runSchema = new mongoose.Schema({
    mods: [String],
    beta: String,
    ngp: String,
    seed: String,
})

module.exports = mongoose.model('Run Info', runSchema)
