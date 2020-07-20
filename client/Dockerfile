FROM node:12.18.2

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package*.json ./
RUN npm install -g @vue/cli
RUN npm install

COPY . ./
RUN ls

EXPOSE 80

CMD [ "npm", "run", "serve" ]