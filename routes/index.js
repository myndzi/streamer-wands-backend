const express = require('express')
const router = express.Router()
const multer = require('multer')
const { convertNoitaStats } = require('../lib/noitastats')

const storage = multer.memoryStorage({
    limits: {
        parts: 5,
        fieldSize: 128 * 1024,
    },
})
const upload = multer({ storage })

const authController = require('../controllers/authController')

const fs = require('node:fs/promises')
const PATH = require('node:path')

const JSZip = require('jszip')
const JWT = require('jsonwebtoken')

let lastUpdated = null
let releaseList = []
const releaseDir = PATH.resolve(__dirname, '..', 'releases')

const updateFrequency = 10 * 60 * 1000 // 10 minutes

const getZipStream = async (relPath, extrafiles = []) => {
    const path = PATH.resolve(releaseDir, relPath)

    if (!path.startsWith(`${releaseDir}/`)) {
        console.log('insecure path', releaseDir, path)
        throw new Error('insecure path')
    }

    const data = await fs.readFile(path)
    const zip = await JSZip.loadAsync(data)

    for (const [filename, buf] of extrafiles) {
        zip.file(`streamer_wands/${filename}`, buf)
    }

    return zip.generateNodeStream()
}

const getHostFile = () => {
    const backendBaseUrl = process.env.BACKEND ?? 'wss://onlywands.com/'
    if (!backendBaseUrl.endsWith('/')) backendBaseUrl += '/'
    return Buffer.from(
        [
            `local token = dofile("mods/streamer_wands/token.lua")`,
            `HOST_URL = "${backendBaseUrl}" .. token`,
            ``,
        ].join('\n'),
    )
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
                .filter((file) => file.isFile() && /^streamer_wands--.*\.zip$/.test(file.name))
                .map(async (file) => {
                    const path = PATH.resolve(releaseDir, file.name)
                    const stat = await fs.stat(path)
                    const relPath = PATH.relative(releaseDir, path)
                    const version = file.name.match(/--(.*)\.zip$/)[1]
                    return { mtime: stat.mtime, name: file.name, path: relPath, version }
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

const emptyStats = 'stats = {}'

router.post(
    '/release',
    authController.isLoggedIn,
    upload.single('statsfile'),
    async (req, res, next) => {
        try {
            const relpath = req.body.versionfile

            const jwt = getJWT(req.user)
            const extrafiles = [
                ['token.lua', Buffer.from(`return "${jwt}"`)],
                ['stats.lua', req.file ? await convertNoitaStats(req.file.buffer) : emptyStats],
                ['files/ws/host.lua', getHostFile()],
            ]

            const filename = PATH.basename(relpath)
            const stream = await getZipStream(relpath, extrafiles)

            res.writeHead(200, {
                'Content-Type': 'application/zip',
                'Content-Disposition': `attachment; filename=${filename}`,
            })
            stream.pipe(res)
        } catch (err) {
            next(err)
        }
    },
)

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
