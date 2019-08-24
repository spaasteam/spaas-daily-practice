
require('dotenv').config()
const axios = require('axios')

// https://github.com/gdaib/koa-todo

// {
// "title": "Creating issue from API",
//   "body": "Posting a issue from Insomnia"
// }




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

// createIssue()


function postMessage() {
  const dingApi = `https://oapi.dingtalk.com/robot/send?access_token=${process.env.robat_token}`
  axios.post(dingApi, {
    msgtype: 'text',
    text: {
      content: '@所有人 大家好'
    }
  })
}

postMessage()