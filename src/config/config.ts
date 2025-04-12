import { readFileSync } from 'node:fs';

import { StaticDecode, StaticEncode, Type as T } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

import { TSecret } from './secret';

export enum Env {
  Production = 'production',
  Development = 'development',
  Local = 'local',
}

export const Config = T.Object({
  modVersion: T.String(),
  env: T.Enum(Env),
  dbConnectString: TSecret('dbConnectString', T.String()),
  port: T.Integer({ minimum: 1, maximum: 65535 }),
  clientId: T.String(),
  clientSecret: TSecret('clientSecret', T.String()),
  callbackUrl: T.String(),
  sessionSecret: TSecret('sessionSecret', T.String()),
  jwtSecret: TSecret('jwtSecret', T.String()),
  jwtRefreshSecret: TSecret('jwtRefreshSecret', T.String()),
  backend: T.String(),
  behindNginx: T.Boolean(),
  domain: T.String(),
});
export type Config = StaticDecode<typeof Config>;

const mapEnv = <T = string>(key: string, fn?: (v: string) => T): T | undefined =>
  !Object.prototype.hasOwnProperty.call(process.env, key)
    ? undefined
    : !fn
    ? (process.env[key]! as T)
    : fn(process.env[key]!);

export function loadConfig(modVersion: string, configFile?: string): Config {
  const dflt: Partial<StaticEncode<typeof Config>> = {
    env: Env.Development,
    port: 1234,
  };
  const fromFile = configFile ? JSON.parse(readFileSync(configFile, 'utf-8')) : {};
  const fromEnv = Object.fromEntries(
    Object.entries({
      env: mapEnv('NODE_ENV'),
      dbConnectString: mapEnv('DATABASE'),
      port: mapEnv('PORT', Number),
      clientId: mapEnv('CLIENT_ID'),
      clientSecret: mapEnv('CLIENT_SECRET'),
      callbackUrl: mapEnv('CALLBACK_URL'),
      sessionSecret: mapEnv('SESSION_SECRET'),
      jwtSecret: mapEnv('JWT_SECRET'),
      jwtRefreshSecret: mapEnv('JWT_REFRESH_SECRET'),
      backend: mapEnv('BACKEND'),
      behindNginx: mapEnv('NO_NGINX', v => v !== 'true'),
      domain: mapEnv('DOMAIN'),
    }).filter(([k, v]) => v !== undefined)
  );

  const config: unknown = { modVersion, ...dflt, ...fromFile, ...fromEnv };

  if (!Value.Check(Config, config)) {
    console.error('Invalid config');
    for (const err of Value.Errors(Config, config)) {
      console.error(`${err.path}: ${err.message}`);
    }
    process.exit(1);
  }

  return Value.Decode(Config, config);
}
