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
    "* [`第 36 题: 重写 Array.prototype.splice`](#%E7%AC%AC%2036%20%E9%A2%98:%20%E9%87%8D%E5%86%99%20Array.prototype.splice)\n";

  str += content.slice(insertIndex);

  str += `${title}\n\n`;

  str += `[做题连接](${githubPath}/number) \n\n`;

  fs.writeFileSync(filePath, str, "utf8");

  console.log("done !!!!");
};

const data = encodeTitle(36, "重写 Array.prototype.splice");

writeSummary(data);
