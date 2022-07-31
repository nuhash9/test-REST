FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm install


EXPOSE 5050
CMD ["node", "index.js"]

