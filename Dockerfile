# Stage 1: Base
FROM node:lts-alpine AS base

# Stage 2: Install dependencies
FROM base AS deps

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

# Stage 3: Build the app
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

# Stage 4: Run the app
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --chown=node:node --from=builder /app/next.config.mjs ./next.config.mjs
COPY --chown=node:node --from=builder /app/public ./public
COPY --chown=node:node --from=builder /app/.next ./.next
COPY --chown=node:node --from=builder /app/node_modules ./node_modules

USER node

EXPOSE 3000
ENV PATH /app/node_modules/.bin:$PATH

CMD ["next", "start"]