import { Tickets } from '../app/ticket';
import { Config } from '../config/config';
import { DB } from '../db/db';
import { initAuthRoutes } from './auth';
import { initMainRoutes } from './main';
import { initStreamerRoutes } from './streamer';

export const initRouters = ({
  config,
  db,
  tickets,
}: {
  config: Config;
  db: DB;
  tickets: Tickets;
}) => ({
  auth: initAuthRoutes({ db }),
  main: initMainRoutes({ config, tickets }),
  streamer: initStreamerRoutes({ config, db }),
});
