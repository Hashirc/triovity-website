# ---- Base image -------------------------------------------------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install only package.json first (caches deps)
COPY package*.json ./
RUN npm ci

# Copy source files and build the Vite app
COPY . .
RUN npm run build

# ---- Runtime image -----------------------------------------------
FROM node:20-alpine AS prod

WORKDIR /app

# Copy only the built assets and the server script
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js .
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .

# Install only production deps (express)
RUN npm ci --only=production

EXPOSE 3000
ENV PORT=3000

# Start the Express server
CMD ["node", "server.js"]
