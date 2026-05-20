#!/bin/bash
MODE="${1:-dev}"

if [ "$MODE" = "prod" ]; then
  echo "Starting 6x6 3D Football Game (PRODUCTION)..."
  echo "  URL: http://localhost:3001"
  echo ""
  echo "  For a custom domain, use a reverse proxy (Caddy, nginx)"
  echo "  pointing to localhost:3001, or set PORT=80"
  echo ""
  PORT="${PORT:-3001}" npx tsx server/src/index.ts &
  SERVER_PID=$!
  trap "kill $SERVER_PID 2>/dev/null; exit" INT TERM
  echo "Press Ctrl+C to stop"
  wait
else
  echo "Starting 6x6 3D Football Game (DEV)..."
  echo "  Server: http://localhost:3001"
  echo "  Client: http://localhost:5173"
  echo ""
  npx tsx server/src/index.ts &
  SERVER_PID=$!
  npx vite --host &
  CLIENT_PID=$!
  trap "kill $SERVER_PID $CLIENT_PID 2>/dev/null; exit" INT TERM
  echo "Press Ctrl+C to stop both servers"
  wait
fi
