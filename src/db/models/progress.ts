import { Type as T, type Static } from '@sinclair/typebox';
import mongoose from 'mongoose';

export const TProgress = T.Object({
  perks: T.Array(T.String()),
  spells: T.Array(T.String()),
  enemies: T.Array(T.String()),
});
export type TProgress = Static<typeof TProgress>;

export const MProgress = new mongoose.Schema({
  perks: [String],
  spells: [String],
  enemies: [String],
});

export const progressDefaults = (data: Partial<TProgress> = {}): TProgress => ({
  perks: [],
  spells: [],
  enemies: [],
  ...data,
});
