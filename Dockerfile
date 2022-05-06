FROM node:14.19.1

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run buildssr

ENV HOST 0.0.0.0
ENV PORT 4000

EXPOSE 4000

# ENTRYPOINT ["npm", "run", "servessr"]
