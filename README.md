<h1 align="center">
  Shortify
</h1>

> A Simple url shortener App and services. It will convert your boring long url into nice and simple 8 character *shorties* (That is what i call short urls 😁). Not to mention they are unique for every new url. It also keeps the history of your recent conversions. One click to copy and off you go.

## 🚀 Quick start

### Run in Docker

`docker-compose up` in your terminal and access the UI in the browser @ `localhost:8080`

### API Services

Want to use only APIs. you can use @ `localhost:8081`. Endpoints are mentioned below -

`GET: /api` - To retrieve all the converted shorties

`POST: /api/create` - To create new shorty.

> request: `curl -H "Content-Type: application/json" -X POST -d '{"inputUrl":"http://suprdev.netlify.app/"}' http://localhost:8081/api/create`

> response: `{"_id":"5f15b209bcf04f001271c657","inputUrl":"http://suprdev.netlify.app/","shortUrl":"https://pbid.io/iviar0qg","createdAt":"2020-07-20T15:02:33.604Z","updatedAt":"2020-07-20T15:02:33.604Z","__v":0}`


## 💻 Technology Stack

- Vue.js
- TypeScript
- Express.js
- MongoDB
- Docker
