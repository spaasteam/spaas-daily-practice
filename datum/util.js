const encodeTitle = (number, text) => {
  const title = `第 ${number} 题: ${text}`;
  console.log(
    `https://github.com/spaasteam/spaas-daily-practice/issues/new?title=${encodeURIComponent(
      title
    )}`
  );
  console.log(`### ${title}`);
  return `* [\`${title}\`](#${encodeURI(title)})`;
};

<<<<<<< HEAD
console.log(encodeTitle(33, "对象运算"));
=======
console.log(encodeTitle(33, "实现 Array.prototype.filter 函数"));
>>>>>>> d9a27c92299fb1073332a6dd0a98066e1614976a
