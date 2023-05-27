function spellFilter(spell) {
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
    let inventory = [
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
    ]
    if (legacy) {
        wands = data
    } else {
        wands = data.wands
        if (data.inventory) {
            inventory = data.inventory
        }
    }
    const validatedWands = []

    for (const wand of wands) {
        valid = {}
        valid.stats = statsValidation(wand[0])
        valid.always_cast = wand[1].filter(spellFilter)
        valid.deck = wand[2].filter(spellFilter)
        validatedWands.push(valid)
    }
    let validatedSpells = inventory.filter(spellFilter)

    return { wands: validatedWands, inventory: validatedSpells }
}
