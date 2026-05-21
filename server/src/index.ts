import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';
import { MatchManager } from './MatchManager.js';
import { RoomManager } from './RoomManager.js';

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

// Serve the 3D game client build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));
  // SPA fallback - serve index.html for all non-API routes
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
  });
} else {
  // Serve the 2D game static files from the project root (dev only)
  app.use(express.static(path.join(__dirname, '..', '..')));
}

const matchManager = new MatchManager(io);
const roomManager = new RoomManager(io);

io.on('connection', (socket) => {
  console.log(`[Server] Player connected: ${socket.id}`);

  let playerName = `Player_${socket.id.slice(0, 4)}`;

  // ─── 3D Game Matchmaking ───
  socket.on('join_queue', (data?: { name?: string }) => {
    if (data?.name) playerName = data.name;
    matchManager.addToQueue(socket, playerName);
  });

  socket.on('leave_queue', () => {
    matchManager.removeFromQueue(socket);
  });

  socket.on('player_input', (input) => {
    matchManager.handleInput(socket.id, input);
  });

  socket.on('ready', () => {
    matchManager.handleReady(socket.id);
  });

  socket.on('request_match_info', () => {
    matchManager.sendMatchInfo(socket);
  });

  socket.on('chat_message', (msg: string) => {
    matchManager.handleChat(socket.id, msg);
  });

  // ─── 2D Game Room System ───
  socket.on('room_create', (data: { name: string }) => {
    const code = roomManager.createRoom(socket, data.name || playerName);
    socket.emit('room_created', { code });
  });

  socket.on('room_join', (data: { code: string; name: string }) => {
    const result = roomManager.joinRoom(socket, data.code, data.name || playerName);
    if (result.success) {
      socket.emit('room_joined', result.room);
    } else {
      socket.emit('room_error', { message: result.error });
    }
  });

  socket.on('room_leave', () => {
    roomManager.leaveRoom(socket);
  });

  socket.on('room_start_game', () => {
    roomManager.handleStartGame(socket);
  });

  socket.on('room_input', (data) => {
    roomManager.relayInput(socket, data);
  });

  socket.on('room_game_state', (data) => {
    roomManager.relayGameState(socket, data);
  });

  socket.on('disconnect', () => {
    console.log(`[Server] Player disconnected: ${socket.id}`);
    matchManager.removePlayer(socket.id);
    roomManager.removePlayer(socket.id);
  });
});

// Health endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', players: io.engine.clientsCount });
});

server.listen(PORT, () => {
  console.log(`[Server] 6x6 3D Football Game server running on port ${PORT}`);
  console.log(`[Server] Waiting for players...`);
});
