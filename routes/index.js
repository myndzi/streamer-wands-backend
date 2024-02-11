const express = require('express')
const router = express.Router()
const passport = require('passport')

const authController = require('../controllers/authController')

const fs = require('node:fs/promises')
const PATH = require('node:path')

const JSZip = require('jszip')
const JWT = require('jsonwebtoken')

let lastUpdated = null
let releaseList = []
const releaseDir = PATH.resolve(__dirname, '..', 'releases')

const updateFrequency = 10 * 60 * 1000 // 10 minutes

const getZipStream = async (relPath, jwt) => {
    const path = PATH.resolve(releaseDir, relPath)

    if (!path.startsWith(`${releaseDir}/`)) {
        console.log('insecure path', releaseDir, path)
        throw new Error('insecure path')
    }

    const data = await fs.readFile(path)
    const zip = await JSZip.loadAsync(data)

    zip.file('streamer_wands/token.lua', Buffer.from(`return "${jwt}"`))

    return zip.generateNodeStream()
}

const getReleases = () => {
    const now = Date.now()
    const timeToNext = lastUpdated + updateFrequency - now
    if (lastUpdated === null || timeToNext < 0) {
        console.log(`updating release list: (last updated ${-timeToNext} seconds ago)`)
        lastUpdated = now
        releaseList = new Promise(async (resolve) => {
            const paths = await fs.readdir(releaseDir, { withFileTypes: true })
            const stats = paths
                .filter((file) => file.isFile() && /\.zip$/.test(file.name))
                .map(async (file) => {
                    const path = PATH.resolve(releaseDir, file.name)
                    const stat = await fs.stat(path)
                    const relPath = PATH.relative(releaseDir, path)
                    return { mtime: stat.mtime, name: file.name, path: relPath }
                })

            const withTimes = await Promise.all(stats)
            withTimes.sort((a, b) => b.mtime - a.mtime)
            resolve(withTimes)
        })
    } // test

    return releaseList
}

const getJWT = (user) => {
    if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET not set')
    return JWT.sign(user, process.env.JWT_SECRET)
}

router.get('/release/:relpath', authController.isLoggedIn, async (req, res, next) => {
    try {
        const relpath = req.params.relpath
        const jwt = getJWT(req.user)

        const filename = PATH.basename(relpath)
        const stream = await getZipStream(relpath, jwt)

        res.writeHead(200, {
            'Content-Type': 'application/zip',
            'Content-Disposition': `attachment; filename=${filename}`,
        })
        stream.pipe(res)
    } catch (err) {
        next(err)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const releases = await getReleases()
        res.render('index', {
            title: 'Streamer wands',
            user: req.user,
            releases,
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router
