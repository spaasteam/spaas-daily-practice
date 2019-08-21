const fs = require("fs");
const { resolve } = require("path");

const githubPath = `https://github.com/spaasteam/spaas-daily-practice/issues`;

const encodeTitle = (number, text) => {
  const title = `第 ${number} 题: ${text}`;
  console.log(`${githubPath}/new?title=${encodeURIComponent(title)}`);

  return {
    quickTitle: `* [\`${title}\`](#${encodeURI(title)})`,
    title: `### ${title}`,
    number
  };
};

const writeSummary = ({ title, quickTitle, number }) => {
  console.log(title);
  console.log(quickTitle);

  const filePath = resolve(__dirname, "./summary.md");

  const content = fs.readFileSync(filePath).toString("utf8");

  const insertIndex = content.indexOf("---") - 2;

  let str =
    content.slice(0, insertIndex) +
    `${quickTitle}\n`;

  str += content.slice(insertIndex);

  str += `${title}\n\n`;

  str += `[做题连接](${githubPath}/${number}) \n\n`;

  fs.writeFileSync(filePath, str, "utf8");

  console.log("done !!!!");
};

const data = encodeTitle(39, "实现 sum 函数");

writeSummary(data);
