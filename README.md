**Shortify** is a simple URL shortener app and services built upon **MEVN/VENoM** stack. It will convert your boring long URL into nice and simple eight-character *shorties* (that I like to call those short generated urls 😁). Not to mention they are unique for every new URL. It also keeps the history of your recent conversions. One click to copy and off you go!

## 🚀 Quick start with Docker

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
> Access the services  @ `localhost:8081`

## API Documentation

### Summary

|        | Endpoint       | Service               |
|--------|----------------|-----------------------|
| GET    | /api           | Retrieve all shorties |
| POST   | /api/create    | Create a shorty       |
| DELETE | /api/delete/id | Delete a shorty       |
| DELETE | /api/deleteAll | Delete all shorties   |

### Full API Specification

**[View or download](https://sprakash57.github.io/shortify/server/oas/index.html)** the Shortify Open API Specification document.

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
