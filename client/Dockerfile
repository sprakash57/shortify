FROM node:12.18.2

RUN mkdir -p /usr/app/client
WORKDIR /usr/app/client

COPY package*.json ./
RUN npm install
RUN npm install -g @vue/cli

EXPOSE 8080

CMD [ "npm", "run", "serve" ]