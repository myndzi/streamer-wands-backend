import { Type as T, type Static } from '@sinclair/typebox';
import mongoose from 'mongoose';

export const TApothInfo = T.Object({
  shifts: T.Array(T.Array(T.String())),
  shiftsTotal: T.Number(),
  shiftsTimer: T.Number(),
});
export type TApothInfo = Static<typeof TApothInfo>;

export const MApothInfo = new mongoose.Schema({
  shifts: [[String]],
  shiftsTotal: Number,
  shiftsTimer: Number,
});

export const apothInfoDefaults = (data: Partial<TApothInfo> = {}): TApothInfo => ({
  shifts: [],
  shiftsTotal: 0,
  shiftsTimer: 0,
  ...data,
});
