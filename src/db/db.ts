import { Config } from '../config/config';
import { isToken, assertToken, deleteToken, findToken, upsertToken } from './models/token';
import { isStreamer, assertStreamer, upsertStreamer, findStreamer } from './models/streamer';
import mongoose from 'mongoose';

export interface DB {
  Tokens: {
    is: typeof isToken;
    assert: typeof assertToken;
    delete: typeof deleteToken;
    find: typeof findToken;
    upsert: typeof upsertToken;
  };
  Streamers: {
    is: typeof isStreamer;
    assert: typeof assertStreamer;
    upsert: typeof upsertStreamer;
    find: typeof findStreamer;
  };
}

export const initDb = async (config: Config): Promise<DB> => {
  await mongoose.connect(config.dbConnectString.unwrap());

  return {
    Tokens: {
      is: isToken,
      assert: assertToken,
      delete: deleteToken,
      find: findToken,
      upsert: upsertToken,
    },
    Streamers: {
      is: isStreamer,
      assert: assertStreamer,
      upsert: upsertStreamer,
      find: findStreamer,
    },
  };
};
