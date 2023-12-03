FROM node:20-alpine as base

FROM base as deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM base as development
WORKDIR /app
ENV STAGE=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
CMD [ "yarn", "dev" ]


FROM base as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build


FROM base as production
WORKDIR /app
ENV STAGE=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN mkdir .next
RUN chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
ENV HOSTNAME "0.0.0.0"
CMD ["node", "server.js"]