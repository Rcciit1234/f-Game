# F Game

**1v1 Big-Head Football** — A head-to-head football game where oversized characters battle it out on a 2D pitch. Play against AI or challenge friends online!

## Features

- **1v1 Big-Head Football** — Unique big-head characters with custom colors and expressions
- **Smart AI** — Opponent that chases the ball, defends its goal, and attacks intelligently
- **Online Multiplayer** — Create a room, share the 4-letter code, and play with friends
- **Physics-driven** — Realistic ball physics with gravity, bounce, spin, and lob kicks
- **Touch + Keyboard** — Works on desktop and mobile
- **90-second matches** — Quick, intense games. First to 10 goals or highest score wins

## Controls

| Action | Keyboard | Mobile |
|---|---|---|
| Move | A/D or Arrow Keys | ◀ ▶ buttons |
| Jump | W or Arrow Up | ↑ Jump button |
| Kick (low) | Tap Space | Tap ⚽ button |
| Kick (high lob) | Hold Space or S | Hold ⚽ button |
| Exit match | Escape | — |

## Play Online with Friends

1. **Host** clicks **Create Room** → shares the 4-letter code
2. **Friend** clicks **Join Room** → types the code
3. Both click **Ready** → 3-2-1 countdown → match starts!

## Run Locally

```bash
# Clone the repo
git clone https://github.com/Rcciit1234/f-Game.git
cd f-Game

# Install dependencies
npm install
cd client && npm install && cd ..

# Start both server + client for development
npm run dev
```

Open http://localhost:5173 in your browser.

The server runs on port 3001 by default.

## Deploy to Production

```bash
# Build the client
npm run build

# Start the production server
NODE_ENV=production npm start
```

The server serves the built client files and handles WebSocket connections on the same port.

## Tech Stack

- **Canvas 2D** — Game rendering (no WebGL needed)
- **Socket.IO** — Real-time multiplayer
- **Express** — Web server
- **TypeScript** — Full-stack typing
- **Vite** — Client build tool

## APK Build (Android)

```bash
npm run cap:build:android
```

APK output: `android/app/build/outputs/apk/debug/app-debug.apk`
