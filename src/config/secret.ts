import { inspect } from 'node:util';
import { Static, Type as T, TSchema } from '@sinclair/typebox';

const secretStore = new WeakMap();
export class Secret<T> {
  constructor(
    readonly name: string,
    value: T
  ) {
    secretStore.set(this, value);
  }

  unwrap(): T {
    return secretStore.get(this);
  }

  update(value: T): Secret<T> {
    secretStore.set(this, value);
    return this;
  }

  toString() {
    return `Secret(${inspect(this.name, { colors: true })})`;
  }

  [inspect.custom]() {
    return this.toString();
  }

  toJSON() {
    return this.toString();
  }
}

export const TSecret = <T extends TSchema>(key: string, type: T) =>
  T.Transform(type)
    .Decode((value): Secret<Static<T>> => new Secret(key, value))
    .Encode(secret => secret.unwrap());
