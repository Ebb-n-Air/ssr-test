FROM node:14.19.1

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run buildssr
