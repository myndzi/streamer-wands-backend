function strFilter(spell) {
    return typeof spell == 'string'
}

function statsValidation(stats) {
    for (const key in stats) {
        if (key == 'sprite') {
            if (typeof stats[key] != 'string') {
                stats[key] = '999'
            } else {
                let match = stats[key].match(/([^\/]+)\./)[1]
                if (match) stats[key] = match
            }
        } else if (key == 'ui_name') {
            if (typeof stats[key] != 'string') stats[key] = '999'
        } else if (key == 'shuffle_deck_when_empty') {
            if (typeof stats[key] != 'boolean') stats[key] = false
        } else {
            if (typeof stats[key] != 'number') stats[key] = 0
        }
    }
    return stats
}

exports.validate = (data) => {
    const legacy = Array.isArray(data)
    let wands = []
    let inventory = Array(16).fill('0')
    let items = Array(4).fill('0')
    let progress = []
    if (legacy) {
        wands = data
    } else {
        wands = data.wands
        if (data.inventory) {
            inventory = data.inventory
        }
        if (data.items) {
            items = data.items
        }
        if (data.progress) {
            progress = data.progress
        }
        if (data.version) {
            version = data.version
        }
    }
    const validatedWands = []

    for (const wand of wands) {
        valid = {}
        valid.stats = statsValidation(wand[0])
        valid.always_cast = wand[1].filter(strFilter)
        valid.deck = wand[2].filter(strFilter)
        validatedWands.push(valid)
    }
    let validatedSpells = inventory.filter(strFilter)
    let validatedItems = items.filter(strFilter)

    const validatedProgress = []

    for (const table of progress) {
        valid = {}
        valid.perks = table[0].filter(strFilter)
        valid.spells = table[1].filter(strFilter)
        valid.enemies = table[2].filter(strFilter)
        validatedProgress.push(valid)
    }
    let validatedVersion = version.filter(strFilter)

    return {
        wands: validatedWands,
        inventory: validatedSpells,
        items: validatedItems,
        progress: validatedProgress,
        version: validatedVersion
    }
}
