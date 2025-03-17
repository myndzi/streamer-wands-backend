const mongoose = require('mongoose')
const Streamers = mongoose.model('Streamers')

exports.getWands = async (req, res, next) => {
    const { name } = req.params
    const streamer = await Streamers.findOne({ name }).collation({
        locale: 'en_US',
        strength: 1,
    })
    if (streamer) {
        res.render('wands', {
            menu: false,
            title: `${streamer.name} wands`,
            streamer: streamer.name,
            modVersion: streamer.modVersion,
            modFeatures: streamer.modFeatures,
            wands: streamer.wands,
            inventory: streamer.inventory || [],
            items: streamer.items || [],
            progress: streamer.progress,
            runInfo: streamer.runInfo,
            playerInfo: streamer.playerInfo,
        })
    } else {
        next()
    }
}
