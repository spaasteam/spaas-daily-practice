# spaas-daily-practice
spaas团队的每日一练，欢迎小伙伴们提交踊跃答案!



### 今日题目 字符串模式匹配

要求实现一个工具函数，根据传入的字符串模式，(模式只用x表达，比如说xxx-xxx-xx)，
返回一个判断字符串模式的函数

```javascript
function generate(pattern){
  return function(){}
}

// test
// 下面的x表示数字
let pattern1 = generate('xxx-xxxx-xxxx')
console.log(pattern1('136-1234-1234')) // true
console.log(pattern1('136-123-1234')) // false

let pattern2 = generate('x-xx-xxx')
console.log(pattern2('1-12-123')) // true
console.log(pattern2('2-13-234')) // true
console.log(pattern2('2-13222-234')) // false

let pattern3 = generate('xxx:xx:xx')
console.log(pattern3('136:123:12')) // true
console.log(pattern3('1234:12')) // false
```

[做题连接](https://github.com/spaasteam/spaas-daily-practice/issues/64)

<!-- end -->


### 历史题目请查看 [datum/summary.md](./datum/summary.md) 查看


### 对 markdown 语法不太熟悉的小伙伴可以查看教程 [*传送门*](https://github.com/younghz/Markdown)

### 题目出自哪里

工作日的每天，都会更新一道题目，题目类型不限于算法，数据结构等。

出题的人可以从以下的链接中找出一道你觉得合适的题目上传到仓库让团队与团队其他小伙伴进行互动解答。

觉得每天一道题不够做也可以从下面的仓库链接多做多练习。

本仓库题目也是出自于这些仓库与连接直中。

- https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md
- https://github.com/haizlin/fe-interview
- https://www.codewars.com
- https://leetcode.com/
