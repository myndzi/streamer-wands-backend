import { Type as T, type Static } from '@sinclair/typebox';
import jwt from 'jsonwebtoken';

import { Config } from '../config/config';
import { Secret } from '../config/secret';

export type Ticket = string;
export const JWTData = T.Object({
  id: T.String(),
  displayName: T.String(),
});
export type JWTData = Static<typeof JWTData>;

export interface Tickets {
  isValid: (ticket: Ticket) => boolean;
  verify: (ticket: Ticket) => JWTData | false;
  generate: (user: JWTData) => Ticket | false;
}

export const initTickets = ({ config }: { config: Config }): Tickets => {
  const createVerifier =
    (secret: Secret<string>) =>
    (ticket: Ticket): JWTData | false => {
      try {
        return jwt.verify(ticket, secret.unwrap()) as JWTData;
      } catch (e) {
        return false;
      }
    };

  const createSigner =
    (secret: Secret<string>) =>
    ({ id, displayName }: JWTData): Ticket =>
      jwt.sign({ id: String(id), displayName }, secret.unwrap());

  const verify = createVerifier(config.jwtSecret);
  const generate = createSigner(config.jwtSecret);

  return {
    isValid: (ticket: Ticket) => verify(ticket) !== false,
    verify,
    generate,
  };
};
