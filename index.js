const toc = require('markdown-toc')
const fs = require('fs')
const { resolve } = require('path')


const filePath = resolve(__dirname, './datum/summary.md')
const outputPath = resolve(__dirname, './datum/test.md')

const content = fs.readFileSync(filePath)

fs.writeFileSync(outputPath, toc(content.toString()).content)


