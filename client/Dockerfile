FROM node:14-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package*.json ./
RUN npm install -g @vue/cli
RUN npm install

COPY . ./

CMD [ "npm", "run", "serve" ]