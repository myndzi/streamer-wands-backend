import { Type as T, type Static } from '@sinclair/typebox';
import mongoose from 'mongoose';

export const TFeature = T.Object({
  seed: T.Boolean(),
  pos: T.Boolean(),
  ngp: T.Boolean(),
  shifts: T.Boolean(),
  timer: T.Boolean(),
  apothCreatureShifts: T.Boolean(),
  apothCreatureTimer: T.Boolean(),
});
export type TFeature = Static<typeof TFeature>;

export const MFeature = new mongoose.Schema({
  seed: { type: Boolean, required: true },
  pos: { type: Boolean, required: true },
  ngp: { type: Boolean, required: true },
  shifts: { type: Boolean, required: true },
  timer: { type: Boolean, required: true },
  apothCreatureShifts: { type: Boolean, required: true },
  apothCreatureTimer: { type: Boolean, required: true },
});

export const featureDefaults = (data: Partial<TFeature> = {}): TFeature => ({
  seed: false,
  pos: false,
  ngp: false,
  shifts: false,
  timer: false,
  apothCreatureTimer: false,
  apothCreatureShifts: false,
  ...data,
});
