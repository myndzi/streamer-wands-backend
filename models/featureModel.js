const mongoose = require('mongoose')
const featureSchema = new mongoose.Schema({
    seed: Boolean,
    pos: Boolean,
    ngp: Boolean,
    shifts: Boolean,
    timer: Boolean,
    apothCreatureShifts: Boolean,
    apothCreatureTimer: Boolean,
})

module.exports = mongoose.model('Feature Info', featureSchema)
