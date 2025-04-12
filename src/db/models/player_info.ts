import { Type as T, type Static } from '@sinclair/typebox';
import mongoose from 'mongoose';

export const TPlayerInfo = T.Object({
  names: T.Array(T.String()),
  amounts: T.Array(T.Number()),
  shifts: T.Array(T.Array(T.String())),
  shiftsTotal: T.Number(),
  shiftsTimer: T.Number(),
  health: T.Array(T.Number()),
  gold: T.Number(),
  x: T.Number(),
  y: T.Number(),
});
export type TPlayerInfo = Static<typeof TPlayerInfo>;

export const MPlayerInfo = new mongoose.Schema({
  names: [String],
  amounts: [Number],
  shifts: [[String]],
  shiftsTotal: Number,
  shiftsTimer: Number,
  health: [Number],
  gold: Number,
  x: Number,
  y: Number,
});

export const playerInfoDefaults = (data: Partial<TPlayerInfo> = {}): TPlayerInfo => ({
  names: [],
  amounts: [],
  shifts: [],
  shiftsTotal: 0,
  shiftsTimer: 0,
  health: [],
  gold: 0,
  x: 0,
  y: 0,
  ...data,
});
