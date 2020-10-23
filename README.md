<h1 align="center" style="color:tomato">Shortify</h1>

> A Simple url shortener App and services built upon **MEVN/VENoM** stack. It will convert your boring long url into nice and simple 8 character *shorties* (That i like to call those short generated urls 😁). Not to mention they are unique for every new url. It also keeps the history of your recent conversions. One click to copy and off you go.

## 🚀 Quick start with Dokcer

`docker-compose up` in your terminal and access the UI in the browser @ `localhost:8080`

## For Developers

Go to the root directory and follow below steps -

For Client - 

```
$ cd client
$ npm run serve
```
> Access the UI in the browser @ `localhost:8080`

For Server - 

```
$ cd server
$ npm run dev
```
> access the services  @ `localhost:8081`

### API Services

|      | Endpoint    | Service               |
|------|-------------|-----------------------|
| GET  | /api        | Retrieve all shorties |
| POST | /api/create | Create a shorty       |

### User curl

> request: `curl -H "Content-Type: application/json" -X POST -d '{"inputUrl":"http://suprdev.netlify.app/"}' http://localhost:8081/api/create`

> response: `{"_id":"5f15b209bcf04f001271c657","inputUrl":"http://suprdev.netlify.app/","shortUrl":"https://sup.dev/iviar0qg","createdAt":"2020-07-20T15:02:33.604Z","updatedAt":"2020-07-20T15:02:33.604Z","__v":0}`

## 💻 Technology Stack

- Vue.js
- TypeScript
- Express.js
- Mongoose
- MongoDB
- Docker
- Jest

## 🤝 Want to Contribute? Follow these steps:
1. Fork this repo. - Click the fork symbol on rightmost top corner of your window.

2. Visit https://github.com/sprakash57/shortify/issues and comment on the issue you want to work on.

3. Clone the forked repo. - Click the green button saying "Code" with a download button.

4. Test your changes thorughly. Put proper and meaningfull commit messages. Inline comments for complex logic, JSDoc and explanation for any external library is highly appreciated.

5. Create a Pull Request. Follow this guide https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github to know more.

6. Star ⭐ to the repo would be much appreciated.

## Note: If you need detailed info on Pull request
https://www.atlassian.com/git/tutorials/making-a-pull-request.
