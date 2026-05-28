import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: process.env.CAPACITOR ? '' : process.env.GH_PAGES ? '/Football-Game/' : '/',
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../shared'),
    },
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3001',
        ws: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
