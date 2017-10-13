---
title: "掌握JavaScript面试：什么是函数组合？"
date: "2017-10-05T16:01:03.113Z"
layout: post
path: "/掌握JavaScript面试：什么是功能组合？/"
categories:
  - JavaScript
description: "这篇是“Master the JavaScript Interview: What is Function Composition”的译文。第一次翻译外文，十有八九会出错，但是总要试试。<!--more-->"
---
> 原文链接: [Master the JavaScript Interview: What is Function Composition?
](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0)

Function composition 是组合两个或多个函数以产生新功能的过程。

组合在一起的函数就像一系列结合起来的管道。我们的数据在这些管道中流通。

换种说法，Function composition 就是数学中的复合函数。函数'f(x)'和函数'g(x)'的组合可以被定义成'f(g(x))'.它的调用顺序由内而外，依次是 x, g, f。

换到编程的场景下，你可以把每个函数都当作一个动作。比如你要将用户的全名转换为 URL 段，为每个用户提供个人资料页面。为了做到这一点，你要经历一系列的步骤：

1. 根据空格，把名字字符串转换成数组
2. 遍历数组，将名称都转换成小写，并返回新数组。
3. 加入破折号
4. 对 URI 组件进行编码

这是一个简单的实现：

```Javascrpit
const toSlug = input => encodeURIComponent(
  input.split(' ')
    .map(str => str.toLowerCase())
    .join('-')
);
```

不错，但是如果我告诉你，它可以更加可读呢？

想象一下，每个操作都有一个对应的可组合的函数，就可以这样写：

```Javascrpit
const toSlug = input => encodeURIComponent(
  join('-')(
    map(toLowerCase)(
      split(' ')(
        input
      )
    )
  )
);

console.log(toSlug('JS Cheerleader')); // 'js-cheerleader'
```

这看上去是不是很像‘f(g(x))’。不过，这种写法比上一种更加难读。

为了实现函数间的组合，我们需要使用可复用的公共程序，如'split()', 'join()'和 'map()'。这是它们的实现：

```JavaScript
const curry = fn => (...args) => fn.bind(null, ...args);

const map = curry((fn, arr) => arr.map(fn));

const join = curry((str, arr) => arr.join(str));

const toLowerCase = str => str.toLowerCase();

const split = curry((splitOn, str) => str.split(splitOn));
```

除了'toLowerCase'之外，其他函数都可以从 Lodash/fb 中获得：
```JavaScript
import { curry, map, join, split } from 'lodash/fp';
```

也可以像这样导入：
```JavaScript
const curry = require('lodash/fp/curry');

const map = require('lodash/fp/map');
```


这里我偷了点懒。注意这个 curry 从技术上来说，并不是一个真正的柯里化函数。真正的柯里化函数总会生成一个一元函数。这里的 curry 只是一个偏函数应用。请参考[“柯里化和偏函数应用之间的区别是什么？”](https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8#.13tj19278)这篇文章。不过，这里只是为了演示用途，我们就把它当作一个真正的柯里化函数好了。

回过头看‘toSlug’的实现，这中写法很不优雅：
```javascript
const toSlug = input => encodeURIComponent(
  join('-')(
    map(toLowerCase)(
      split(' ')(
        input
      )
    )
  )
);

console.log(toSlug('JS Cheerleader')); // 'js-cheerleader
```
对我来说，这里的嵌套太多了，读起来有点让人摸不着头脑。我们可以用一个会自动组合这些函数的函数来扁平化嵌套，就是说，这个函数会从一个函数得到输出，并自动将它传递给下一个函数作为输入，直到得到最终值为止。

细想一下，好像数组中有一个函数可以做差不多的事情。这个函数就是 reduce()，它用一系列值为参数，对每个值应用一个函数，最后累加成一个结果。值本身也可以函数。但是 reduce() 是从左到右递减，为了匹配上面的组合行为，我们需要它从右到左缩减。

好事情是刚好数组也有一个 reduceRight() 方法可以干这事:

```JavaScript
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
```

‘reduce’和'reduceRight'唯一的不同只有遍历的方向。我们可以用它从右到左迭代数组，将函数依次应用到每个数组元素上，最后得到累加值（v）。

用 compose，我们就可以不需要嵌套来重写上面的组合：

```JavaScript
const toSlug = compose(

  encodeURIComponent,

  join('-'),

  map(toLowerCase),

  split(' ')

);



console.log(toSlug('JS Cheerleader')); // 'js-cheerleader'
```
当然，lodash/fp 也提供了 compose()。使用方法和上面一样。

当以数学形式的组合从内到外的角度来思考时，compose 是不错的。它和符合 f(g(x))的形式。不过，如果想以从左到右的顺序的角度来思考，又该怎么办呢？

还有另外一种形式，通常称为 pipe()。Lodash 称之为 flow():

```JavaScript
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const fn1 = s => s.toLowerCase();

const fn2 = s => s.split('').reverse().join('');

const fn3 = s => s + '!'

const newFunc = pipe(fn1, fn2, fn3);

const result = newFunc('Time'); // emit!
```
可以看到，这个实现与 compose() 几乎完全一样。唯一的不同之处是，这里是用 .reduce()，而不是 .reduceRight()，即是从左到右缩减，而不是从右到左。

下面我们来看看用 pipe() 实现的 toSlug() 函数:
```JavaScript
const toSlug = pipe(

  split(' '),

  map(toLowerCase),

  join('-'),

  encodeURIComponent

);

console.log(toSlug('JS Cheerleader')); // 'js-cheerleader'
```

对我来说，对于我来说，这要更容易读懂一些。

骨灰级的函数式程序员用函数组合定义他们的整个应用程序。而我经常用它来消除临时变量。仔细看看 pipe() 版本的 toSlug()，你会发现一些特殊之处。

在命令式编程中，在一些变量上执行转换时，在转换的每个步骤中都会找到对变量的引用。而上面的 pipe() 实现是用不定参数（原文说是 points-free style）写的，就是说完全找不到它要操作的参数。



我经常将管道（pipe）用在像单元测试和 Redux 状态 reducer 这类事情上，用来消除中间变量。中间变量的存在只用来保存一个操作到下一个操作之间的临时值。



这玩意开始听起来会比较古怪，不过随着你用它练习，会发现在函数式编程中，你是在和相当抽象、广义的函数打交道，而在这样的函数中，事物的名称没那么重要。名称只会碍事。你会开始把变量当作是多余的样板。


就是说，我认为 points-free style 可能会被用过头。它可能会变得太密集，较难理解。但是如果你搞糊涂了，这里有一个小窍门…你可以利用 flow 来跟踪是怎么回事：

```JavaScript
const trace = curry((label, x) => {
  console.log(`== ${ label }:  ${ x }`);
  return x;
});
```

下面是具体的使用方法：
```JavaScript
const toSlug = pipe(
  trace('input'),
  split(' '),
  map(toLowerCase),
  trace('after map'),
  join('-'),
  encodeURIComponent
);

console.log(toSlug('JS Cheerleader'));
// '== input:  JS Cheerleader'
// '== after map:  js,cheerleader'
// 'js-cheerleader'
```

其实，trace()是 tap()的特殊形式。它可以让你对流过管道的每个值执行一些行为。明白了么？　管道（Pipe）？　水龙头(Tap)？ 可以像下面这样编写 tap()：

```JavaScript
const tap = curry((fn, x) => {

  fn(x);

  return x;

});
```
现在你可以看到为嘛 trace() 只是一个特殊情况下的 tap() 了：

```JavaScript
const trace = label => {

  return tap(x => console.log(`== ${ label }:  ${ x }`));

};
```

你应该开始对函数式编程是什么样子，以及偏函数应用和柯里化如何与函数组合协作，来帮助你编写可读性更强的程序有点感觉了。

参考链接:
  - [征服 JavaScript 面试：什么是函数组合](http://www.10tiao.com/html/59/201702/2651551705/2.html)
