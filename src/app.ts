import { statSync } from 'node:fs';
import path, { resolve } from 'node:path';

import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';

import { Config, Env } from './config/config';

import type { Express } from 'express';
import { notFound, productionErrorHandler, stackTraceErrorHandler } from './app/error_handlers';
import { DB } from './db/db';
import { Tickets } from './app/ticket';
import { initRouters } from './routes/routers';
import { initPassport } from './app/passport';

const cacheBustFiles = [
  ['styleCss', 'style.css'],
  ['spellData', 'spellData.js'],
  ['spellDataMain', 'spellDataMain.js'],
  ['spellDataApoth', 'spellDataApoth.js'],
  ['wandSprites', 'wandSprites.js'],
  ['icons', 'icons.js'],
  ['itemData', 'itemData.js'],
  ['apothIcons', 'apothIcons.js'],
  ['main', 'main.js'],
];
const mtime = Object.fromEntries(
  cacheBustFiles.map(([key, filename]) => [
    key,
    statSync(resolve(__dirname, '..', 'public', filename)).mtime.getTime(),
  ])
);

export const initApp = ({
  config,
  db,
  tickets,
}: {
  config: Config;
  db: DB;
  tickets: Tickets;
}): Express => {
  const app = express();

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');

  if (config.behindNginx !== true) {
    app.use(express.static('public'));
  }

  app.use(
    session({
      secret: config.sessionSecret.unwrap(),
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        client: mongoose.connection.getClient(),
      }),
      cookie: {
        httpOnly: true,
        secure: config.behindNginx === true,
      },
    })
  );

  const passport = initPassport({ config, tickets, db });
  app.use(passport.initialize());
  app.use(passport.session());

  app.locals = {
    domain: config.domain,
    title: 'Streamer Wands',
    mtime,
  };

  // Main Routes
  const routers = initRouters({ config, db, tickets });
  app.use('/streamer', routers.streamer);
  app.use('/auth', routers.auth);
  app.use('/', routers.main);

  if (config.env === Env.Local) {
    app.use(stackTraceErrorHandler);
  } else {
    app.use(productionErrorHandler);
  }

  // Error Handling
  app.use(notFound); // 404

  return app;
};
