# spaas-daily-practice
spaas团队的每日一练，欢迎小伙伴们提交踊跃答案!


### 今日题目 下面代码中 a 在什么情况下会打印 1？

```js
var a = ?;
if(a == 1 && a == 2 && a == 3){
 	console.log(1);
}

```

做题链接: [第 10 题](https://github.com/spaasteam/spaas-daily-practice/issues/12)

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


### 要求设计 LazyMan 类，实现以下功能

<details>
<summary>详情</summary>

```js
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
```

</details>


做题链接: [第 5 题](https://github.com/spaasteam/spaas-daily-practice/issues/7)


### 走迷宫

```js
/**
 * @title 迷宫
 * @description
 * 1. 实现一个函数 getMazePath(迷宫矩阵，开始位置, 结束位置)，
 *     获得从迷宫（二维数组）开始位置到结束位置的所有坐标，按先后顺序排序
 * 2. 1为不可走，0为可走
 * 3. 广度优先算法
 */

// 迷宫
const maze = [
  [1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0],
  [1, 0, 0, 1, 1],
  [0, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
]
const mazePaths = getMazePath(maze, [3, 0], [1, 4])
console.log(mazePaths)
// output: [ [3,0], [3,1], [2,1], [2,2], [1,2], [1,3], [1,4]]
```

做题链接: [第 6 题](https://github.com/spaasteam/spaas-daily-practice/issues/8)

---

### 旋转数组算法题

```js
// 编写一个函数 rotate 达到旋转数组的效果

function rotate(A) {}

const arr = [1, 2, 3, 4, 5]

rotate(arr)  // [5, 4, 3, 2, 1]
```

做题连接: [第 8 题](https://github.com/spaasteam/spaas-daily-practice/issues/9)


### 算法题之「移动零」

>给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
>
>示例:
>
>输入: [0,1,0,3,12]
>输出: [1,3,12,0,0]
>说明:
>
>必须在原数组上操作，不能拷贝额外的数组。
>
>尽量减少操作次数

做题链接: [第八题](https://github.com/spaasteam/spaas-daily-practice/issues/10)


### 算法题之翻转数字

>用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。要求必须使用>递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。

做题链接: [第 9 题](https://github.com/spaasteam/spaas-daily-practice/issues/11)

---


### 更多历史题目请查看 datum/summary.md 查看


### 对 markdown 语法不太熟悉的小伙伴可以查看教程 [*传送门*](https://github.com/younghz/Markdown)
