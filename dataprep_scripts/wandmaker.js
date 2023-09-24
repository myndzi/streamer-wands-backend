// Windows prep instructions:
// 1. Launch a command prompt (cmd.exe)
// 2. cd "C:\Program Files (x86)\Steam\steamapps\common\Noita"
// 3. noita.exe -wizard_unpak
// 4. run this script: node wandmaker.js

const fs = require('node:fs')
const path = require('node:path')

// Paste file contents inside brackets into the wandSprites.js file
const outputFile = path.join(__dirname, '..', 'public', 'wandSprites.js')

const wandSpriteData = {}

// Set two starter wands' path, and common wands path
const wandsBasePath = path.join(
    process.env.USERPROFILE,
    'AppData',
    'LocalLow',
    'Nolla_Games_Noita',
    'data',
    'items_gfx',
)

// function to encode file data to base64 encoded string
const base64image = (file, subdir = '') => {
    const abspath = path.join(wandsBasePath, subdir, file + '.png')
    return fs.readFileSync(abspath).toString('base64')
}

// Process starter wands to the file
wandSpriteData['bomb_wand'] = base64image('bomb_wand')
wandSpriteData['handgun'] = base64image('handgun')

console.log('Starter wands added')

for (i = 0; i <= 1000; i++) {
    const wandName = 'wand_' + i.toString().padStart(4, '0')
    wandSpriteData[wandName] = base64image(wandName, 'wands')
    console.log('Added', wandName)
}

const code = `var wandSprites = ${JSON.stringify(wandSpriteData, null, 2)}`
fs.writeFileSync(outputFile, code)
