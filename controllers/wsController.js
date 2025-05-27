const mongoose = require('mongoose')
const Streamer = mongoose.model('Streamers')
const wandsHandler = require('../handlers/wandHandler')
exports.message = async (data, user, server) => {
    try {
        const json = JSON.parse(data)

        const { modVersion, modFeatures, wands, inventory, items, progress, runInfo, apothInfo, playerInfo } = wandsHandler.validate(json)
        server.clients.forEach((ws) => {
            if (ws.streamer == user.displayName) {
                ws.send(
                    JSON.stringify({
                        type: 'wands',
                        modVersion,
                        modFeatures,
                        wands,
                        inventory: inventory || [],
                        items: items || [],
                        progress,
                        runInfo,
                        apothInfo,
                        playerInfo,
                    }),
                )
            }
        })
        const id = user.id
        await Streamer.findOneAndUpdate(
            { id },
            { modVersion, modFeatures, wands, inventory: inventory || [], items: items || [], progress, runInfo, apothInfo, playerInfo },
            {
                useFindAndModify: false,
                new: true,
                upsert: true,
                setDefaultsOnInsert: true,
            },
        )
    } catch (err) {
        if (data != 'im alive') {
            console.log(err)
            console.log("err:", data.toString())
        }
    }
}
