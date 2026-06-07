FROM node:20-alpine

WORKDIR /app

COPY client/package.json client/package-lock.json ./client/
COPY server/package.json server/package-lock.json ./server/
COPY package.json package-lock.json* ./

RUN npm ci && cd client && npm ci && cd ../server && npm ci

COPY . .

RUN cd client && npx vite build

EXPOSE 3001

ENV NODE_ENV=production

CMD ["node", "--import", "tsx", "server/src/index.ts"]
