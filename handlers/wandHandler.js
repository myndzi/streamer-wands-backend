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

function typeValidation(varType, value) {
    if (typeof value != varType) value = null
    return value
}

exports.validate = (data) => {
    const legacy = Array.isArray(data)
    let modVersion = "pre-versioning"
    let modFeatures = {
        seed: false,
        pos: false,
        ngp: false,
        shifts: false,
        timer: false,
    }
    let wands = []
    let inventory = Array(16).fill('0')
    let items = Array(4).fill('0')
    let progress = []
    let runInfo = {
        mods: [],
        beta: "",
        ngp: "",
        seed: "",
    }
    let playerInfo = {
        perks: [[], []],
        shifts: [],
        shiftsTotal: 0,
        shiftsTimer: 0,
        health: [],
        gold: 0,
        x: 0,
        y: 0,
    }
    if (data.modVersion) {
        modVersion = data.modVersion
    }
    if (data.modFeatures) {
        modFeatures = data.modFeatures
    }
    if (data.wands) {
        wands = data.wands
    }
    if (data.inventory) {
        inventory = data.inventory
    }
    if (data.items) {
        items = data.items
    }
    if (data.progress) {
        progress = data.progress
    }
    if (data.runInfo) {
        runInfo = data.runInfo
    }
    if (data.playerInfo) {
        playerInfo = data.playerInfo
    }

    let validatedModVersion = modVersion

    let validatedModFeatures = {}
    for (const [feature, value] of Object.entries(modFeatures)) {
        validatedModFeatures[feature] = typeValidation("boolean", value)
    }

    const validatedWands = []

    for (const wand of wands) {
        let valid = {}
        valid.stats = statsValidation(wand[0])
        valid.always_cast = wand[1].filter(strFilter)
        valid.deck = wand[2].filter(strFilter)
        validatedWands.push(valid)
    }
    let validatedSpells = inventory.filter(strFilter)
    let validatedItems = items.filter(strFilter)

    const progressKeys = ["perks", "spells", "enemies"]
    let validatedProgress = {}
    progress.forEach((table, i) => {
        validatedProgress[progressKeys[i]] = table.filter(strFilter)
    })

    let validatedRunInfo = {}
    validatedRunInfo.mods = runInfo.mods.filter(strFilter)
    validatedRunInfo.beta = typeValidation("boolean", runInfo.beta)
    // const ngp = runInfo.ngp ?? null
    // validatedRunInfo.ngp = typeValidation("string", ngp)
    // const seed = runInfo.seed ?? null
    // validatedRunInfo.seed = typeValidation("string", seed)
    validatedRunInfo.ngp = typeValidation("string", runInfo.ngp)
    validatedRunInfo.seed = typeValidation("string", runInfo.seed)

    const validatedPlayerInfo = {}
    validatedPlayerInfo.names = playerInfo.perks[0].filter(strFilter)
    validatedPlayerInfo.amounts = numbersValidation(playerInfo.perks[1])
    validatedPlayerInfo.shifts = []
    if (playerInfo.shiftsList) {
        for (const shiftRaw of playerInfo.shiftsList) {
            if (shiftRaw != null && shiftRaw != "empty") {
                const shiftMaterials = shiftRaw.split(",").slice(1)
                validatedPlayerInfo.shifts.push(shiftMaterials.filter(strFilter))
            }
        }
    }
    validatedPlayerInfo.shiftsTotal = numberValidation(playerInfo.shiftsTotal)
    const shiftsTimer = playerInfo.shiftsTimer ?? null
    validatedPlayerInfo.shiftsTimer = numberValidation(shiftsTimer)
    const pos = playerInfo.pos ?? null
    validatedPlayerInfo.health = numbersValidation(playerInfo.health)
    validatedPlayerInfo.gold = numberValidation(playerInfo.money)
    validatedPlayerInfo.x = pos ? numberValidation(pos[0]) : null
    validatedPlayerInfo.y = pos ? numberValidation(pos[1]) : null

    return {
        modVersion: validatedModVersion,
        modFeatures: validatedModFeatures,
        wands: validatedWands,
        inventory: validatedSpells,
        items: validatedItems,
        progress: validatedProgress,
        runInfo: validatedRunInfo,
        playerInfo: validatedPlayerInfo
    }
}
