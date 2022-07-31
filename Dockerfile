FROM node:16

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

EXPOSE 5050
CMD ["node", "index.js"]

