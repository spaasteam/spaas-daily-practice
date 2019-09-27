# spaas-daily-practice
spaas团队的每日一练，欢迎小伙伴们提交踊跃答案!



### 今日题目 实现JSON.stringify 和 JSON.parse，要求能够适用于有循环引用的对象

原生的JSON.stringify对于存在循环引用的对象会抛出错误

```javascript
let obj = { a: 'name' }
obj.b = obj
JSON.stringify(obj)
// 此时会抛出系统错误
// **Uncaught TypeError: Converting circular structure to JSON**
```

要求实现stringify 和 parse,能处理上述循环引用的情况
stringify不能抛出错误

```javascript
let obj = { a: 'name' }
obj.b = obj

let json = stringify(obj)
let pObj = parse(json)
// pObj.a === 'name'
// pObj.b === pObj
```

[做题连接](https://github.com/spaasteam/spaas-daily-practice/issues/80)

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
