FROM node:22-alpine AS development
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "run", "dev"]

FROM development AS build
RUN npm run build

FROM build AS production
CMD ["npm", "run", "preview"]
