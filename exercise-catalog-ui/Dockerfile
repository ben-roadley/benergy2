# Development image: Angular CLI dev server, source is bind-mounted by docker-compose
FROM node:24-alpine

WORKDIR /usr/src/exercise-catalog-ui

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 4200

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "4200", "--poll", "1000"]
