const mongoose = require('mongoose')
const Streamers = mongoose.model('Streamers')

const { statSync } = require('node:fs')
const mtime = {
    spellData: statSync(
        __dirname,
        '..',
        'public',
        'spellData.js',
    ).mtime.getTime(),
    wandSprites: statSync(
        __dirname,
        '..',
        'public',
        'wandSprites.js',
    ).mtime.getTime(),
}

exports.getWands = async (req, res, next) => {
    const { name } = req.params
    const streamer = await Streamers.findOne({ name }).collation({
        locale: 'en_US',
        strength: 1,
    })
    if (streamer) {
        res.render('wands', {
            mtime,
            menu: false,
            title: `${streamer.name} wands`,
            streamer: streamer.name,
            wands: streamer.wands,
            inventory: streamer.inventory || [],
        })
    } else {
        next()
    }
}
