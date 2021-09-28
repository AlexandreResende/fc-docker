FROM node:16-alpine3.11

WORKDIR /app

COPY package.json .

COPY environment.js .

RUN npm install

COPY app.js .
COPY .sequelizerc .
COPY config.json .
COPY src ./src

ENTRYPOINT [ "npm", "start" ]