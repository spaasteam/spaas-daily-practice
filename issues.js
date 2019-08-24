
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

function getFileContent() {
  // const api = `https://api.github.com/repos/spaasteam/spaas-daily-practice/contents/datum/questions.md`
  const api = `https://api.github.com/repos/spaasteam/spaas-daily-practice/contents/README.md`

  axios.get(api).then(({ data }) => {
    console.log(data.content, Buffer.from(data.content, 'base64').toString())
    console.log(data.sha);
  })
  // decodeURIComponent(escape(atob('5oiR5piv5Lit5paH'))) 浏览器解码方案
  // btoa(unescape(encodeURIComponent('我是中文'))); // 编码方案
}

getFileContent()

// console.log(atob);

// createIssue()

function postMessage() {
  const dingApi = `https://oapi.dingtalk.com/robot/send?access_token=${process.env.robat_token}`
  axios.post(dingApi, {
    msgtype: 'text',
    text: {
      content: '大家好'
    },
    at: {
      isAtAll: true
    }
  })
}

// postMessage()


// getFileContent()
