const { resolve } = require('path')
const fs = require('fs')
const toc = require('markdown-toc')

const TITLE = '# 每日一练题目快速导航' // 头部

const endToken = '<!-- write token plase keep it -->'

const filePath = resolve(__dirname, './datum/summary.md') // 题目汇总
// const outputPath = resolve(__dirname, './datum/summary.md')

const content = fs.readFileSync(filePath).toString('utf8'); // 读取文件内容

const questionContent = content.slice(content.indexOf(endToken))

const tocData = toc(content.toString()).content // 生成 toc 快速导航

const writeContent = [TITLE, tocData, questionContent].join('\n\n')

console.log(writeContent);

// fs.writeFileSync(outputPath, writeContent)


