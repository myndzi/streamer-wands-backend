import { createServer } from 'node:http';
import { loadConfig } from './config/config';

import { initApp } from './app';
import { initWss } from './wss';
import { initDb } from './db/db';
import { initTickets } from './app/ticket';
import { resolve } from 'node:path';

import { modVersion } from '../package.json';

async function init() {
  const config = loadConfig(modVersion, resolve(__dirname, '..', 'config.json'));
  console.log('Streamer Wands config:', config);

  const db = await initDb(config);
  const tickets = initTickets({ config });
  const app = initApp({ config, db, tickets });

  const server = createServer();
  const wss = initWss({ db, tickets });
  wss.bind(server);

  server.on('request', app);
  server.listen(config.port, () => {
    console.log('[APP] Running port', config.port);
  });
}

init();
