import express, { Router } from 'express';

import multer from 'multer';
import { convertNoitaStats } from '../lib/noitastats';

import fs from 'node:fs/promises';
import PATH from 'node:path';

import JSZip from 'jszip';
import { Tickets } from '../app/ticket';
import { Config } from '../config/config';

const upload = multer({
  limits: {
    parts: 5,
    fieldSize: 128 * 1024,
  },
  dest: undefined,
});

let lastUpdated: number | null = null;

type Release = {
  mtime: Date;
  name: string;
  path: string;
  version: string;
};
let releaseList: Promise<Release[]> = Promise.resolve([]);

const releaseDir = PATH.resolve(__dirname, '..', '..', 'releases');

const updateFrequency = 10 * 60 * 1000; // 10 minutes

type ExtraFile = [string, Buffer];

const getZipStream = async (relPath, extrafiles: ExtraFile[] = []) => {
  const path = PATH.resolve(releaseDir, relPath);

  if (!path.startsWith(`${releaseDir}/`)) {
    console.log('insecure path', releaseDir, path);
    throw new Error('insecure path');
  }

  const data = await fs.readFile(path);
  const zip = await JSZip.loadAsync(data);

  for (const [filename, buf] of extrafiles) {
    zip.file(`streamer_wands/${filename}`, buf);
  }

  return zip.generateNodeStream();
};

const getHostFile = () => {
  let backendBaseUrl = process.env.BACKEND ?? 'wss://onlywands.com/';
  if (!backendBaseUrl.endsWith('/')) backendBaseUrl += '/';

  return Buffer.from(
    [
      `local token = dofile("mods/streamer_wands/token.lua")`,
      `HOST_URL = "${backendBaseUrl}" .. token`,
      ``,
    ].join('\n')
  );
};

const getReleases = async (): Promise<any> => {
  const now = Date.now();
  const timeToNext = lastUpdated ? lastUpdated + updateFrequency - now : -1;
  if (timeToNext < 0) {
    console.log(`updating release list: (last updated ${-timeToNext} seconds ago)`);

    lastUpdated = now;
    releaseList = new Promise(async resolve => {
      const paths = await fs.readdir(releaseDir, { withFileTypes: true });
      const stats = paths
        .filter(file => file.isFile() && /^streamer_wands--.*\.zip$/.test(file.name))
        .map(async file => {
          const path = PATH.resolve(releaseDir, file.name);
          const stat = await fs.stat(path);
          const relPath = PATH.relative(releaseDir, path);
          const version = file.name!.match(/--(.*)\.zip$/)![1];
          return { mtime: stat.mtime, name: file.name, path: relPath, version };
        });

      const withTimes = await Promise.all(stats);
      withTimes.sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
      resolve(withTimes);
    });
  } // test

  return releaseList;
};

const emptyStats = Buffer.from('stats = {}');

export const initMainRoutes = ({
  config,
  tickets,
}: {
  config: Config;
  tickets: Tickets;
}): Router => {
  const modVersion = config.modVersion;

  const router = express.Router();

  router.post('/release', upload.single('statsfile'), async (req, res, next) => {
    if (!req.user) {
      res.redirect('/');
      return;
    }

    try {
      const relpath = req.body.versionfile;

      const { id, displayName } = req.user;
      const jwt = tickets.generate({ id: String(id), displayName });

      const extrafiles: ExtraFile[] = [
        ['token.lua', Buffer.from(`return "${jwt}"`)],
        ['version.lua', Buffer.from(`return "${modVersion}"`)],
        ['stats.lua', req.file ? await convertNoitaStats(req.file.buffer) : emptyStats],
        ['files/ws/host.lua', getHostFile()],
      ];

      const filename = PATH.basename(relpath);
      const stream = await getZipStream(relpath, extrafiles);

      res.writeHead(200, {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename=${filename}`,
      });
      stream.pipe(res);
    } catch (err) {
      next(err);
    }
  });

  router.get('/', async (req, res, next) => {
    try {
      const releases = await getReleases();
      res.render('index', {
        title: 'Streamer wands',
        user: req.user,
        releases,
      });
    } catch (err) {
      next(err);
    }
  });

  return router;
};
