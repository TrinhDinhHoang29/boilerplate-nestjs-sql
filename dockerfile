FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm i

EXPOSE 8080:8080

COPY . .

CMD [ "npm","run","start:dev" ]