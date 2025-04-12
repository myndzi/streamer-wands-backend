import express, { Router } from 'express';
import { DB } from '../db/db';
import { Config } from '../config/config';

export const initStreamerRoutes = ({ config, db }: { config: Config; db: DB }): Router => {
  const currentModVersion = config.modVersion;
  const router = express.Router();

  router.get('/:name', async (req, res, next) => {
    const { name } = req.params;
    const streamer = await db.Streamers.find({ name });

    if (streamer) {
      res.render('wands', {
        menu: false,
        title: `${streamer.name} wands`,
        streamer: streamer.name,
        currentVersion: currentModVersion,
        modVersion: streamer.modVersion || 'no version found',
        modFeatures: streamer.modFeatures || {},
        wands: streamer.wands || [],
        inventory: streamer.inventory || [],
        items: streamer.items || [],
        progress: streamer.progress || {},
        runInfo: streamer.runInfo || {},
        apothInfo: streamer.apothInfo || {},
        playerInfo: streamer.playerInfo || {},
      });
    } else {
      res.render('nostreamer', {
        name: req.params.name,
      });
    }
  });

  return router;
};
