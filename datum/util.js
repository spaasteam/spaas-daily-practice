const encodeTitle = (number, text) => {
  const title = `第 ${number} 题: ${text}`;
  console.log(`https://github.com/spaasteam/spaas-daily-practice/issues/new?title=${encodeURIComponent(title)}`)
  console.log(`### ${title}`)
  return `* [\`${title}\`](#${encodeURI(title)})`
}

console.log(encodeTitle(31, "单词搜索"));
