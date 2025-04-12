import { Static, Type as T } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';

import mongoose from 'mongoose';

const TToken = T.Object({
  id: T.BigInt(),
  token: T.String(),
});
export type TToken = Static<typeof TToken>;

export const MToken = mongoose.model(
  'Tokens',
  new mongoose.Schema({
    id: { type: String, unique: true },
    token: String,
  })
);

const CToken = TypeCompiler.Compile(TToken);

export const isToken = (obj: unknown): obj is TToken => CToken.Check(obj);

export const assertToken = (data: unknown): TToken => {
  if (CToken.Check(data)) {
    return data;
  }

  console.error('Schema mismatch', data);
  for (const err of CToken.Errors(data)) {
    console.error(`  ${err.path}: ${err.message}`);
  }
  throw new Error('Schema mismatch');
};

export const deleteToken = async (id: TToken['id']): Promise<void> => {
  await MToken.findOneAndDelete({ id: String(id) });
};

export const findToken = async (id: TToken['id']): Promise<TToken | null> => {
  const data = (await MToken.findOne({ id: String(id) }))?.toObject();
  return data == null
    ? null
    : assertToken({
        ...data,
        id: data.id ? BigInt(data.id) : data.id,
      });
};

export const upsertToken = async (token: TToken): Promise<TToken> => {
  const picked = { ...token, id: String(token.id) };
  await MToken.findOneAndUpdate({ id: picked.id }, picked, {
    new: true,
    upsert: true,
    setDefaultsOnInsert: true,
  });
  return token;
};
