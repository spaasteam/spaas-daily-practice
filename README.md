# spaas-daily-practice
spaas团队的每日一练，欢迎小伙伴们提交踊跃答案!


### 今日题目 对象运算


小明写了一个 class Numb

```js
class Num {
  constructor(num){
    this.num=num;
  }
  toString() {
    return "The number is " + this.num;
  }
  valueOf() {
    return {num: this.num};
  }
}
```

他尝试使用它去进行一些计算

```js
  x = new Num(100);
  y = new Num(5);
  x + y == 105;
  x*y == 500;
  x-y == 95
  x/y == 20
  Math.floor(new Num(100.5)) == 100
```

但这运行起来似乎有点问题..... 结果为 `'[object Object][object Object]'`

小明仍然想要保留 `toString()` 和 `valueOf()` 方法, 但想要我们帮助它解决问题！

```js
x = new Num(100);
x.toString() == "The number is " + num
x.valueOf() == {num: this.num}
```




做题连接: [第 34 题](https://github.com/spaasteam/spaas-daily-practice/issues/34)



## 历史题目

### 实现 (5).add(3).minus(2) 功能

做题链接: [第 1 题](https://github.com/spaasteam/spaas-daily-practice/issues/1)


### 算法手写题

> 已知如下数组：
>
> var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
>
> 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

做题链接: [第 2 题](https://github.com/spaasteam/spaas-daily-practice/issues/4)

```js
// 原始 list 如下
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
const result = convert(list, ...);

// 转换后的结果如下
let result = [
    {
      id: 1,
      name: '部门A',
      parentId: 0,
      children: [
        {
          id: 3,
          name: '部门C',
          parentId: 1,
          children: [
            {
              id: 6,
              name: '部门F',
              parentId: 3
            }, {
              id: 16,
              name: '部门L',
              parentId: 3
            }
          ]
        },
        {
          id: 4,
          name: '部门D',
          parentId: 1,
          children: [
            {
              id: 8,
              name: '部门H',
              parentId: 4
            }
          ]
        }
      ]
    },
  ···
];
```

</details>

### 这是一个大题目，分为4个考点，需要候选人用递归算法实现，限制15行代码内实现。
  - 创建一个长度为 5 的空数组 arr
  - 生成一个 (2 ~ 32) 之间的随机整数 rand
  - 把随机数 rand 插入数组 arr 内，如果数组 arr 内已存在与 rand 相同数字，则重新生成随机数并插入到 arr 内（需要用递归实现，不能使用 for/while 等循环）
  - 最终输出一个长度为5，且内容不重复的数组 arr

做题链接: [第 3 题](https://github.com/spaasteam/spaas-daily-practice/issues/4)

### 实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度

以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：


<details>
<summary>详情</summary>

```js
// 原始 list 如下
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
const result = convert(list, ...);

// 转换后的结果如下
let result = [
    {
      id: 1,
      name: '部门A',
      parentId: 0,
      children: [
        {
          id: 3,
          name: '部门C',
          parentId: 1,
          children: [
            {
              id: 6,
              name: '部门F',
              parentId: 3
            }, {
              id: 16,
              name: '部门L',
              parentId: 3
            }
          ]
        },
        {
          id: 4,
          name: '部门D',
          parentId: 1,
          children: [
            {
              id: 8,
              name: '部门H',
              parentId: 4
            }
          ]
        }
      ]
    },
  ···
];
```

</details>

做题链接: [第 4 题](https://github.com/spaasteam/spaas-daily-practice/issues/6)


### 更多历史题目请查看 datum/summary.md 查看


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
