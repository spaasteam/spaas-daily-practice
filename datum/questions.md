## 题目以及答案汇总

### 第一题: 实现 (5).add(3).minus(2) 功能

解析: [第 1 题](https://github.com/spaasteam/spaas-daily-practice/issues/1)

### 第二题: 算法手写题

> 已知如下数组：
>
> var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
>
> 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

解析: [第 2 题](https://github.com/spaasteam/spaas-daily-practice/issues/4)


### 第三题: 算法手写题

> 这是一个大题目，分为4个考点，需要候选人用递归算法实现，限制15行代码内实现。
  - 创建一个长度为 5 的空数组 arr
  - 生成一个 (2 ~ 32) 之间的随机整数 rand
  - 把随机数 rand 插入数组 arr 内，如果数组 arr 内已存在与 rand 相同数字，则重新生成随机数并插入到 arr 内（需要用递归实现，不能使用 for/while 等循环）
  - 最终输出一个长度为5，且内容不重复的数组 arr

做题链接: [第 3 题](https://github.com/spaasteam/spaas-daily-practice/issues/5)




### 第四题: 实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度

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

### 第五题 要求设计 LazyMan 类，实现以下功能

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

做题链接: [第 5 题](https://github.com/spaasteam/spaas-daily-practice/issues/7)




### 第六题 走迷宫

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


###  第七题 旋转数组算法题

```js
// 编写一个函数 rotate 达到旋转数组的效果

function rotate(A) {}

const arr = [1, 2, 3, 4, 5]

rotate(arr)  // [5, 4, 3, 2, 1]
```

做题连接: [第 7 题](https://github.com/spaasteam/spaas-daily-practice/issues/9)


### 第八题 算法题之「移动零」

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


### 第九题 算法题之翻转数字

>用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。要求必须使用>递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。

做题链接: [第 9 题](https://github.com/spaasteam/spaas-daily-practice/issues/11)


### 第十题 下面代码中 a 在什么情况下会打印 1 ?

```js
var a = ?;
if(a == 1 && a == 2 && a == 3){
 	console.log(1);
}

```

做题链接: [第 10 题](https://github.com/spaasteam/spaas-daily-practice/issues/12)


### 第 11 题两个数组合并成一个数组

请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。

做题链接: [第 11 题](https://github.com/spaasteam/spaas-daily-practice/issues/13)


### 第 12 题 查找一个数

> 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1 [来源：力扣（LeetCode）]

提示
- 你可以假设 nums 中的所有元素是不重复的。
- n 将在 [1, 10000]之间。
- nums 的每个元素都将在 [-9999, 9999]之间。
- 可尝试二分查找

做题链接: [第 12 题](https://github.com/spaasteam/spaas-daily-practice/issues/14)


### 第 13 题 学习数据结构-栈，写一个函数match(str)，判断一个字符串中的小括号是否匹配。

```js
match('abc()def') // true
match('(1+2()') // false
match('(1+2+3+5*2*(3+7))') // true
```

做题链接: [第 13 题](https://github.com/spaasteam/spaas-daily-practice/issues/15)


### 第 14 题 [css] 圣杯布局和双飞翼布局的理解和区别，并用代码实现

做题连接: [第 14 题](https://github.com/spaasteam/spaas-daily-practice/issues/16)



### 第 15 题 请实现一个数组乱序方法

做题链接: [第 15 题](https://github.com/spaasteam/spaas-daily-practice/issues/17)



### 第 16 题 设计链表

做题链接: [第 16 题](https://github.com/spaasteam/spaas-daily-practice/issues/18)


### 第 17 题 编程题

```js
// input 
// '1, 2, 3, 5, 7, 8, 10'

// output
// '1~3, 5, 7~8, 10'
```

做题连接: [第 17 题](https://github.com/spaasteam/spaas-daily-practice/issues/19)



### 第 18 题 编程题 转换 entry

```js
var entry = {
  a: {
    b: {
      c: {
        d: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }
}


// 要求转换如下对象
var output = {
  'a.b.c.dd': 'abcdd',
  'a.b.xx': 'adxx',
  'a.e': 'ae',
}
```

做题连接: [第 18 题](https://github.com/spaasteam/spaas-daily-practice/issues/20)


### 第 19 题: 编程题 转换对象

```js
var entry = {
  'a.b.c.dd': 'abcdd',
  'a.b.xx': 'adxx',
  'a.e': 'ae',
}

// 要求转换如下对象
var output = {
  a: {
    b: {
      c: {
        d: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }
}
```

做题连接: [第 19 题](https://github.com/spaasteam/spaas-daily-practice/issues/21)

### 第 20 题 简单的字符串扩展

> 接收一个字符串，如果字符串中有数字，则重复数字后面的字符 n 次（截至到遇到下个字符之前的部分）。

```js

stringExpansion('3D2a5d2f') === 'DDDaadddddff'

stringExpansion('3abc') === 'aaabbbccc'      // correct
stringExpansion('3abc') !== 'aaabc'          // wrong
stringExpansion('3abc') !== 'abcabcabc'      // wrong

// 如果有两个连续的数字字符，则忽略第一个。
stringExpansion('3d332f2a') === 'dddffaa'


// 空格和无数字则直接返回即可

```


做题连接: [第 20 题](https://github.com/spaasteam/spaas-daily-practice/issues/22)


### 第 21 题 按位排序

```js
例如给定数组 [7, 6, 15, 8]，编写一个 sortBybit() 将数组进行排序（注：请在原来数组上操作，不要创建新的数组）

- 7 有3位 (000...0111)
- 6 有2位 (000...0011)
- 15有4位 (000...1111)
- 8 有1位 (000...1000)

因此排序的顺序将是 [8, 6, 7, 15]

如果2个数字有相同的位数，请比较它们的实际值！
```


做题连接: [第 21 题](https://github.com/spaasteam/spaas-daily-practice/issues/23)


### 第 22 题 创建一个 customConcat() 函数，与 `Array.prototype.concat()` 功能一样

```js
// 语法
var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])


Array.prototype.customConcat = function(){

  return this;
}
```

做题连接: [第 22 题](https://github.com/spaasteam/spaas-daily-practice/issues/24)

### 第 23 题: 电话号码格式化

```js
tips: 接收到的数组是将永远是一个十位数的数组

```js
// example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
```

做题连接: [第 23 题](https://github.com/spaasteam/spaas-daily-practice/issues/25)


### 第 24 题: 如果元素出现次数超过 n 次，则删除该元素

```js
// example
deleteNth([1, 1, 1, 1], 2); // return [1,1]

deleteNth([20, 37, 20, 21], 1); // return [20,37,21]
```

做题连接: [第 24 题](https://github.com/spaasteam/spaas-daily-practice/issues/26)



### 第 25 题: 编写一个验证密码函数

规则如下
1. 最少6位，最大20位。
2. 只接受数字和字母。
3. 必须包含有数字和字母。

```js
/**
 * return Boolean
 */
function validPass(password) {
  return Boolean
}
```

做题连接: [第 25 题](https://github.com/spaasteam/spaas-daily-practice/issues/27)

### 第 26 题: 深度计数

你的任务是创建一个 `deepeCount` 函数，去计算一个深度数组中一共有多小个元素，包括所有的内嵌数组~~

ps: 额外要求通过深度优先，广度优先两种方式去实现此方法

```js
example
deepCount([1, 2, 3]);  
//>>>>> 3
deepCount(["x", "y", ["z"]]);  
//>>>>> 4
deepCount([1, 2, [3, 4, [5]]]);  
//>>>>> 7

deepCount([[[[[[[[[]]]]]]]]])
//>>>>> 8
```

做题连接: [第 26 题](https://github.com/spaasteam/spaas-daily-practice/issues/28)

### 第 27 题: 实现一个 once 包装函数

实现一个让指定函数只能被执行一次的包装函数

```js
const logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect
```

```js
function once(fn) {
  let called = false;

  return function() {
    if (called) return;

    called = true;
    return fn.apply(this, arguments);
  };
}
```

做题连接: [第 27 题](https://github.com/spaasteam/spaas-daily-practice/issues/29)

### 第 28 题: 匹配URL中的域名

编写一个函数，计算从字符串中移除了多小个连续重复的字符。

```js
function countRepeats(str) {
}

// example
// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1
// 'AABCCDA' => 'ABCDA'  #  answer: 2
```

做题连接: [第 28 题](https://github.com/spaasteam/spaas-daily-practice/issues/30)


### 第 29 题: 计算重复次数

编写一个函数，计算从字符串中移除了多小个连续重复的字符。

```js
function countRepeats(str) {
}

// example
// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1
// 'AABCCDA' => 'ABCDA'  #  answer: 2
```

做题连接: [第 29 题](https://github.com/spaasteam/spaas-daily-practice/issues/31)



### 第 30 题: pipe

想必大家都使用过 `Vue.js` 中的 `filters` 功能 我们在模板中可以这样使用 `date | dateFormat`, 值就会被 `dateFormat` 所处理, 实现 Function.prototype.pip 函数，使得下面例子可以正常运行， 注: pipe 是可以管理任意数量函数的。

```js
var addOne = function(e) {
    return e + 1;
};

var square = function(e) {
    return e * e;
};

var result = [1,2,3,4,5].map(addOne.pipe(square)) //-> [4,9,16,25,36]
```

做题连接: [第 30 题](https://github.com/spaasteam/spaas-daily-practice/issues/32)


### 第 31 题: 单词搜索

给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

```js
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true.
给定 word = "SEE", 返回 true.
给定 word = "ABCB", 返回 false.
```

做题连接: [第 31 题](https://github.com/spaasteam/spaas-daily-practice/issues/33)


### 第 32 题: 格式化 money


接受的数字范围: 0 <= n < 2147483647

```js
const formatMoney = n => {

}

example

       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"
```


做题连接: [第 32 题](https://github.com/spaasteam/spaas-daily-practice/issues/34)


### 第 33 题: 实现 Array.prototype.filter 函数

实现一个 myFilter 与 `Array.prototype.fitler` 功能一样

回调函数中的三个参数
1. el
2. 下标 index 
3. 数组

[具体介绍](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
```js
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.myFilter(word => word.length > 6);

console.log(result); // ["exuberant", "destruction", "present"]
```


做题连接: [第 33 题](https://github.com/spaasteam/spaas-daily-practice/issues/35)



### 第 34 题: 对象运算


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




做题连接: [第 34 题](https://github.com/spaasteam/spaas-daily-practice/issues/36)



### 第 35 题: 标签生成器


1. 它必须以hashtag（#）开头。
2. 所有单词必须首字母大写。
3. 如果最终结果超过140个字符，则必须返回false。
4. 如果输入或结果是空字符串，则必须返回false。

example

```js
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
```


做题连接: [第 35 题](https://github.com/spaasteam/spaas-daily-practice/issues/37)


### 第 36 题: 重写 Array.prototype.splice

该方法应该有2个或更多参数：

1. from 参数提供一个范围在 0 或更大的整数，用作开始更改数组的第一个索引。
2. count 参数提供一个范围在0或更大的整数，用于计算应从 from 索引中删除的项目数。
3. 传入的任何其他参数将是从 from 索引开始插入数组的新项。这些额外的参数是可选的。

该方法应该返回一个数组，其中包含由 splice 删除的所有项，如果没有项被删除则返回一个空数组。应该就地对阵列进行更改
example

[详细定义以及用法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

```js
var months = ['Jan', 'March', 'April', 'June'];
months.mySplice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.mySplice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
```

[做题连接](https://github.com/spaasteam/spaas-daily-practice/issues/38)


### 第 37 题: v-for v-if 为什么不推荐同时使用？

```js
请用自己的理解说出（不理解的请先查阅资料）
```

[做题连接](https://github.com/spaasteam/spaas-daily-practice/issues/39) 

### 第 38 题: vue为什么要求组件模板只能有一个根元素？

```js
请用自己的理解说出（可先查阅资料）
```

[做题连接](https://github.com/spaasteam/spaas-daily-practice/issues/40) 

### 第 39 题: 实现 sum 函数


实现一个 `sum` 函数接受整个数组和一个可选项的 `callback` 函数，并在每个列数组上返回函数的总和，如果 `callback` 不传，默认是计算总和。

example
```js

sum([1, 2, 3]) => 6
1 + 2 +3

sum([1, 2, 3], [4, 5, 6]) => 21

1   2   3
+   +   +
4   5   6
↓   ↓   ↓
5 + 7 + 9 = 21


sum([1,2,3], [4,5,6], (a, b) => a * b)) => 32

1    2    3
*    *    *
4    5    6
↓    ↓    ↓
4 + 10 + 18 = 32

```

[做题连接](https://github.com/spaasteam/spaas-daily-practice/issues/41) 

### 第 40 题: Array.diff

实现一个 属于数组的 `diff` 函数。

该方法接收 `2` 个数组，对比得出它们之间的差异，最后返回在 `A` 数组，或 `B` 数组中只出现过一次的数字的组合

```js
function array_diff(A1, B) {

}

// example

array_diff([1, 2, 3], [2, 4, 6]) // [1, 3, 4, 6]
```

[做题连接](https://github.com/spaasteam/spaas-daily-practice/issues/42) 

### 第 41 题: 对字符串排序
字符串中的每个单词都会有一个数字，但是数字的位置不定

数字的范围是 `1~9`

如果输入为空，则返回空


```js
function soryStrByNumber(str){}

soryStrByNumber('is2 Thi1s T4est 3a') // "Thi1s is2 3a T4est"
soryStrByNumber('4of Fo1r pe6ople g3ood th5e the2') // "Fo1r the2 g3ood 4of th5e pe6ople"
soryStrByNumber('') // ''
```

[做题连接](https://github.com/spaasteam/spaas-daily-practice/issues/43) 
