FROM node:16.14-alpine

WORKDIR /talk-manager

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3003

RUN npx tsc

CMD ["npm", "start"]