import passport, { PassportStatic } from 'passport';
import { Strategy as TwitchStrategy } from 'passport-twitch-strategy';

import { Config } from '../config/config';
import { DB } from '../db/db';
import { Tickets } from './ticket';

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface AuthInfo {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User {
      id: bigint;
      displayName: string;
    }
  }
}

type TwitchProfile = {
  id: string;
  displayName: string;
};

export const initPassport = ({
  config,
  tickets,
  db,
}: {
  config: Config;
  tickets: Tickets;
  db: DB;
}): PassportStatic => {
  passport.use(
    new TwitchStrategy(
      {
        clientID: config.clientId,
        clientSecret: config.clientSecret.unwrap(),
        callbackURL: config.callbackUrl,
        scope: 'user_read',
      },
      async function (accessToken, refreshToken, profile: TwitchProfile, done) {
        const twitchUser: TwitchProfile = {
          id: profile.id,
          displayName: profile.displayName,
        };

        try {
          console.log(`User logged in with Twitch: ${twitchUser.id} ${twitchUser.displayName}`);
          const dbUser = await db.Streamers.upsert({
            id: BigInt(twitchUser.id),
            name: twitchUser.displayName,
          });
          const token = tickets.generate(twitchUser);

          if (token === false) {
            done(new Error('Failed to mint token'));
            return;
          }

          await db.Tokens.upsert({ id: dbUser.id, token });

          done(null, twitchUser);
        } catch (err) {
          console.error(`Something went very wrong. ${err}`);
          done(err);
        }
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(async function (user: TwitchProfile, done) {
    try {
      const dbUser = await db.Streamers.find({ id: BigInt(user.id) });

      if (!dbUser) throw new Error('Streamers.find failed');
      done(null, {
        id: dbUser.id,
        displayName: dbUser.name,
      });
    } catch (err) {
      console.error('passport deserialize failure (caught error)', err);
      done(err);
    }
  });

  return passport;
};
