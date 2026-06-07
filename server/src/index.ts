import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';
import { HBHeadBallMatchManager } from './headball/MatchManager.js';
import { HBHeadBallRoomManager } from './headball/RoomManager.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST'],
  },
  pingInterval: 1000,
  pingTimeout: 2000,
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', players: io.engine.clientsCount });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));
}

const hbMatchManager = new HBHeadBallMatchManager(io);
const hbRoomManager = new HBHeadBallRoomManager(io, hbMatchManager);

io.on('connection', (socket) => {
  console.log(`[Server] Player connected: ${socket.id}`);

  let playerName = `Player_${socket.id.slice(0, 4)}`;

  socket.on('hb_create_room', (data: { name?: string }) => {
    hbRoomManager.createRoom(socket, data?.name || playerName);
  });

  socket.on('hb_join_room', (data: { code: string; name?: string }) => {
    hbRoomManager.joinRoom(socket, data.code, data?.name || playerName);
  });

  socket.on('hb_leave_room', () => {
    hbRoomManager.leaveRoom(socket);
  });

  socket.on('hb_ready', () => {
    hbRoomManager.handleReady(socket);
  });

  socket.on('hb_input', (input: any) => {
    hbMatchManager.handleInput(socket.id, input);
  });

  socket.on('disconnect', () => {
    console.log(`[Server] Player disconnected: ${socket.id}`);
    hbRoomManager.removePlayer(socket.id);
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use((_req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
  });
}

server.listen(PORT, () => {
  console.log(`[Server] F Game server running on port ${PORT}`);
});
