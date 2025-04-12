import { Tickets } from './app/ticket';
import { IncomingMessage, Server } from 'node:http';
import WebSocket, { WebSocketServer } from 'ws';
import { DB } from './db/db';

export interface WSS {
  bind(server: Server): void;
}

type UserState = {
  isAlive: boolean;
  isStreamer: boolean;
  id: bigint;
  name: string;
};

const wsConns = new WeakMap<WebSocket, UserState>();

export const initWss = ({ db, tickets }: { db: DB; tickets: Tickets }): WSS => {
  const wss = new WebSocketServer({
    noServer: true,
  });

  const noop = () => {};

  // progress the open sockets through the keepalive checks
  setInterval(() => {
    wss.clients.forEach(ws => {
      const state = wsConns.get(ws);
      if (!state || !state.isAlive) {
        wsConns.delete(ws);
        console.log('[WSS] disconnecting idle socket');
        ws.terminate();
        return;
      }

      state.isAlive = false;
      ws.ping(noop);
    });
  }, 30000).unref();

  // validate incoming connections and bind handlers
  wss.on('connection', (ws: WebSocket, req: IncomingMessage, state: UserState) => {
    console.log(`[WSS] Connected [${JSON.stringify(state)}]`);

    wsConns.set(ws, state);

    ws.on('pong', () => {
      const state = wsConns.get(ws);
      if (state) state.isAlive = true;
    });

    ws.on('error', err => {
      console.log('[WSS] websocket error', err);
      wsConns.delete(ws);
    });

    ws.on('close', () => {
      if (!state) return;

      wsConns.delete(ws);
    });

    ws.on('message', async (data: string) => {
      if (data === 'im alive') return;

      const state = wsConns.get(ws);
      if (!state) return;

      const streamerId = state.id;

      try {
        if (!state.isStreamer) return;

        const streamerData = db.Streamers.assert({
          ...state,
          ...JSON.parse(data),
        });
        await db.Streamers.upsert(streamerData);

        const json = Buffer.from(JSON.stringify(streamerData));

        for (const client of wss.clients) {
          if (client === ws) continue;
          const subState = wsConns.get(client);
          if (!subState || subState.isStreamer || subState.id !== streamerId) continue;

          client.send(json);
        }
      } catch (e) {
        console.log('[WSS] message error', e);
      }
    });
    ws.send('sup nerd');
  });

  const pathRE = /^\/(?:(?<client>client=)?)(?<arg>.*)/;

  const bind = (server: Server) => {
    server.on('upgrade', async (req, socket, head) => {
      const die = (code: number, msg: string, ...args: any[]) => {
        // args is only logged, not sent in the response; don't leak
        // implementation details
        console.log(`[WSS] ${code} ${msg}`, ...args);

        socket.end(`HTTP/1.1 ${code} ${msg}\r\n\r\n`);
      };

      try {
        if (typeof req.url !== 'string') return die(500, 'server error', 'invalid req.url');

        const url = new URL(req.url);
        const match = url.pathname.match(pathRE);
        if (!match) return die(400, 'invalid url path', url.pathname);

        const arg = match.groups?.['arg'];
        const isSubscribe = match.groups?.['client'] === 'client=';

        if (!arg) return die(400, 'invalid url path', url.pathname);

        let state: UserState | null = null;
        if (isSubscribe) {
          const found = await db.Streamers.find({ name: arg });
          if (!found) return die(404, 'streamer not found', arg);
          state = {
            isAlive: true,
            isStreamer: false,
            id: found.id,
            name: found.name,
          };
        } else {
          const found = tickets.verify(arg);
          if (!found) return die(401, 'unauthorized', arg);
          state = {
            isAlive: true,
            isStreamer: true,
            id: BigInt(found.id),
            name: found.displayName,
          };
        }

        if (!state) {
          return die(500, 'unknown error', 'state is null');
        }

        return wss.handleUpgrade(req, socket, head, ws => {
          wss.emit('connection', ws, req, state);
        });
      } catch (err) {
        die(500, 'unknown error', err);
      }
    });
  };
  return { bind };
};
