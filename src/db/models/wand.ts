import { Type as T, type Static } from '@sinclair/typebox';
import mongoose from 'mongoose';

export const TWandStats = T.Object({
  sprite: T.String(),
  ui_name: T.String(),
  mana: T.Number(),
  mana_max: T.Number(),
  mana_charge_speed: T.Number(),
  reload_time: T.Number(),
  actions_per_round: T.Number(),
  deck_capacity: T.Number(),
  shuffle_deck_when_empty: T.Boolean(),
  spread_degrees: T.Number(),
  speed_multiplier: T.Number(),
  fire_rate_wait: T.Number(),
});
export type TWandStats = Static<typeof TWandStats>;

export const TWand = T.Object({
  stats: TWandStats,
  always_cast: T.Array(T.String()),
  deck: T.Array(T.String()),
});
export type TWand = Static<typeof TWand>;

export const MWand = new mongoose.Schema({
  stats: {
    sprite: String,
    ui_name: String,
    mana: Number,
    mana_max: Number,
    mana_charge_speed: Number,
    reload_time: Number,
    actions_per_round: Number,
    deck_capacity: Number,
    shuffle_deck_when_empty: Boolean,
    spread_degrees: Number,
    speed_multiplier: Number,
    fire_rate_wait: Number,
  },
  always_cast: [String],
  deck: [String],
});
