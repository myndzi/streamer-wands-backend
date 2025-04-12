import { Type as T, type Static } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';
import mongoose from 'mongoose';

import { TFeature, MFeature, featureDefaults } from './feature';
import { MWand, TWand } from './wand';
import { MProgress, progressDefaults, TProgress } from './progress';
import { MRunInfo, runInfoDefaults, TRunInfo } from './run_info';
import { apothInfoDefaults, MApothInfo, TApothInfo } from './apoth_info';
import { MPlayerInfo, playerInfoDefaults, TPlayerInfo } from './player_info';

export const TStreamer = T.Object({
  id: T.BigInt(),
  name: T.String(),
  modVersion: T.String(),
  modFeatures: TFeature,
  wands: T.Array(TWand),
  inventory: T.Array(T.String()),
  items: T.Array(T.String()),
  progress: TProgress,
  runInfo: TRunInfo,
  apothInfo: TApothInfo,
  playerInfo: TPlayerInfo,
});
export type TStreamer = Static<typeof TStreamer>;

export type TStreamerUpsertable = Pick<TStreamer, 'id' | 'name'> &
  Partial<Omit<TStreamer, 'id' | 'name'>>;

export const MStreamer = mongoose.model(
  'Streamers',
  new mongoose.Schema({
    id: { type: String, unique: true },
    name: String,
    modVersion: String,
    modFeatures: MFeature,
    wands: [MWand],
    inventory: [String],
    items: [String],
    progress: MProgress,
    runInfo: MRunInfo,
    apothInfo: MApothInfo,
    playerInfo: MPlayerInfo,
  })
);

const CStreamer = TypeCompiler.Compile(TStreamer);

export const isStreamer = (obj: unknown): obj is TStreamer => CStreamer.Check(obj);

export const assertStreamer = (data: any): TStreamer => {
  const _data = { ...data, id: BigInt(data.id) };
  if (CStreamer.Check(_data)) {
    return _data;
  }

  console.error('Schema mismatch', _data);
  for (const err of CStreamer.Errors(_data)) {
    console.error(`  ${err.path}: ${err.message}`);
  }
  throw new Error('Schema mismatch');
};

export const streamerDefaults = (data: TStreamerUpsertable): TStreamer => ({
  modVersion: 'pre-versioning',
  modFeatures: featureDefaults(data.modFeatures),
  wands: [],
  inventory: [],
  items: [],
  progress: progressDefaults(data.progress),
  runInfo: runInfoDefaults(data.runInfo),
  apothInfo: apothInfoDefaults(data.apothInfo),
  playerInfo: playerInfoDefaults(data.playerInfo),
  ...data,
});

export const upsertStreamer = async (data: TStreamerUpsertable): Promise<TStreamer> => {
  const fullData = streamerDefaults(data);
  await MStreamer.findOneAndUpdate({ id: String(data.id) }, fullData, {
    new: true,
    upsert: true,
    setDefaultsOnInsert: true,
  });
  return fullData;
};

export const findStreamer = async (
  by: { id: bigint } | { name: string }
): Promise<TStreamer | null> => {
  const _by = Object.prototype.hasOwnProperty.call(by, 'id') ? { id: String((by as any).id) } : by;

  const found = (
    await MStreamer.findOne(_by).collation({
      locale: 'en_US',
      strength: 1,
    })
  )?.toObject();

  const dflt = streamerDefaults(found as any);
  return found == null ? null : assertStreamer(dflt);
};
