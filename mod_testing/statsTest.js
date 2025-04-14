const fs = require('node:fs')
const path = require('node:path')
const { convertNoitaStats } = require('../lib/noitastats')

const dir = path.join(__dirname, '..', 'mod_testing')

const emptyStats = 'stats = {}'

async function readSalakieli(i) {
    const data = fs.readFileSync(path.join(dir, `_stats${i}.salakieli`))
    const stats = data ? await convertNoitaStats(data) : emptyStats
    const outputFile = path.join(__dirname, '..', 'mod_testing', `stats${i}.lua`)
    fs.writeFileSync(outputFile, stats)
}

for (let i = 0; i < 3; i++) {
    readSalakieli(i)
}