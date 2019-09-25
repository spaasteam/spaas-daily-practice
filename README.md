# spaas-daily-practice
spaas团队的每日一练，欢迎小伙伴们提交踊跃答案!



### 今日题目 写一个树形结构的过滤函数

过滤掉树中key值在数组中存在的元素(包括子节点),==返回一个新的树,注意不能影响到原树结构.==
```js
const data = [{
            label: '一级 1',
            key: 1,
            children: [{
                label: '二级 1-1',
                key: 11,
                children: [{
                    label: '三级 1-1-1',
                    key: 111
                }]
            }]
        }, {
            label: '一级 2',
            key: 2,
            children: [{
                label: '二级 2-1',
                key: 21,
                children: [{
                    label: '三级 2-1-1',
                    key: 211,
                }]
            }, {
                label: '二级 2-2',
                key: 22,
                children: [{
                    label: '三级 2-2-1',
                    key: 221,
                }]
            }]
        }, {
            label: '一级 3',
            key: 3,
            children: [{
                label: '二级 3-1',
                key: 31,
                children: [{
                    label: '三级 3-1-1',
                    key: 311,
                }]
            }, {
                label: '二级 3-2',
                key: 32,
                children: [{
                    label: '三级 3-2-1',
                    key: 321,
                }]
            }]
        }]
const filterArr = [21,211,311];
function treeFilter(data,filterArr) {
     // wait to to...
     return res;
}

```

希望能写成像es5的filter方法这种形式，
data.treeFilter(fn),fn返回一个Boolean,




[做题连接](https://github.com/spaasteam/spaas-daily-practice/issues/78)

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
