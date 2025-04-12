import { Type as T, type Static } from '@sinclair/typebox';
import mongoose from 'mongoose';

export const TRunInfo = T.Object({
  mods: T.Array(T.String()),
  beta: T.String(),
  ngp: T.Number(),
  seed: T.Number(),
});
export type TRunInfo = Static<typeof TRunInfo>;

export const MRunInfo = new mongoose.Schema({
  mods: [String],
  beta: String,
  ngp: Number,
  seed: Number,
});

export const runInfoDefaults = (data: Partial<TRunInfo> = {}): TRunInfo => ({
  mods: [],
  beta: '',
  ngp: 0,
  seed: 0,
  ...data,
});
