<h1 align="center">
  Shortify
</h1>

> A Simple url shortener App and services built upon **MEVN/VENoM** stack. It will convert your boring long url into nice and simple 8 character *shorties* (That is what i call short urls 😁). Not to mention they are unique for every new url. It also keeps the history of your recent conversions. One click to copy and off you go.

## 🚀 Quick start

### Run in Docker

`docker-compose up` in your terminal and access the UI in the browser @ `localhost:8080`

### Run locally
Go to the root directory and follow below steps -

For Client - 

```
$ cd client
$ npm run serve
```

For Server - 

```
$ cd server
$ npm run dev
```


### API Services

Want to use only APIs. you can use @ `localhost:8081`. Endpoints are mentioned below -

`GET: /api` - To retrieve all the converted shorties

`POST: /api/create` - To create new shorty.

> request: `curl -H "Content-Type: application/json" -X POST -d '{"inputUrl":"http://suprdev.netlify.app/"}' http://localhost:8081/api/create`

> response: `{"_id":"5f15b209bcf04f001271c657","inputUrl":"http://suprdev.netlify.app/","shortUrl":"https://sup.dev/iviar0qg","createdAt":"2020-07-20T15:02:33.604Z","updatedAt":"2020-07-20T15:02:33.604Z","__v":0}`


## 💻 Technology Stack

- Vue.js
- TypeScript
- Express.js
- MongoDB
- Docker

## 🤝 Want to Contribute? Follow these steps:
1. Fork this repo. - Click the fork symbol on rightmost top corner of your window.

2. Clone the forked repo. - Click the green button saying "Code" with a download button.

3. Visit https://github.com/sprakash57/shortify/issues and comment on the issue you want to worn on.

4. It will be assigned on FCFS basis. Solve and Test your application. Put proper and meaningfull commit messages.

5. Create a Pull Request. - Follow this guide https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github to raise a PR.

## Note: If you need detailed info on Pull request
https://www.atlassian.com/git/tutorials/making-a-pull-request.

## A to Z for Open Source Contribution
The Definitive Guide to Contributing to Open Source by @DoomHammerNG
An Intro to Open Source - Tutorials by DigitalOcean to guide you on your way to contribution success here on GitHub.
Open Source Guides - Collection of resources for individuals, communities, and companies who want to learn how to run and contribute to an Open Source project.