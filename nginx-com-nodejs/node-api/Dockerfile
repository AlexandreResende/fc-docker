FROM node:16-alpine3.11

WORKDIR /app

COPY package.json .

COPY environment.js .

RUN npm install

COPY app.js .

ENTRYPOINT [ "npm", "start" ]