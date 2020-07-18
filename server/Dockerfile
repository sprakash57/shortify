FROM node:12.18.2

RUN mkdir -p /usr/app/server
WORKDIR /usr/app/server

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8081

CMD [ "npm", "run", "dev" ]