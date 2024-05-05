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

function numbersValidation(arr) {
    for (const key in arr) {
        if (typeof arr[key] != 'number') arr[key] = 0
    }
    return arr
}

function numberValidation(value) {
    if (typeof value != 'number') value = 0
    return value
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
        if (data.info) {
            info = data.info
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

    const validatedInfo = []

    for (const field of info) {
        valid = {}
        valid.names = field[0].filter(strFilter)
        valid.amounts = numbersValidation(field[1])
        valid.shifts = field[2].filter(strFilter)
        valid.shiftInfo = numbersValidation(field[3])
        valid.health = numbersValidation(field[4])
        valid.gold = numberValidation(field[5])
        valid.x = numberValidation(field[6])
        valid.y = numberValidation(field[7])
        validatedInfo.push(valid)
    }

    return {
        wands: validatedWands,
        inventory: validatedSpells,
        items: validatedItems,
        progress: validatedProgress,
        version: validatedVersion,
        info: validatedInfo
    }
}
