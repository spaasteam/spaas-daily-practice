
require('dotenv').config()
// https://github.com/gdaib/koa-todo

// {
// "title": "Creating issue from API",
//   "body": "Posting a issue from Insomnia"
// }


const axios = require('axios')


const createIssue = () => {
  const params = {
    title: 'Creating issue from API',
    body: "Posting a issue from Insomnia"
  }
  const api = `https://api.github.com/repos/cjfff/node-music/issues`
  axios.post(api, params, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `token ${process.env.token}`,
    }
  }).then((res) => {
    console.log(res);
  })
}

createIssue()