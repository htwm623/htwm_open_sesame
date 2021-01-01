# freecodecamp advanced algorithm scripting

## 1.  Validate US Telephtone Numbers

```javascript
function telephoneCheck(str) {
  // 祝你好运
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
  return regex.test(str)
}



telephoneCheck("555-555-5555");
```



```
如果传入字符串是一个有效的美国电话号码，则返回 true.

用户可以在表单中填入一个任意有效美国电话号码. 下面是一些有效号码的例子(还有下面测试时用到的一些变体写法):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
在本节中你会看见如 800-692-7753 or 8oo-six427676;laskdjf这样的字符串. 你的任务就是验证前面给出的字符串是否是有效的美国电话号码. 区号是必须有的. 如果字符串中给出了国家代码, 你必须验证其是 1. 如果号码有效就返回 true ; 否则返回 false.

telephoneCheck("555-555-5555") 应该返回一个布尔值.
telephoneCheck("1 555-555-5555") 应该返回 true.
telephoneCheck("1 (555) 555-5555") 应该返回 true.
telephoneCheck("5555555555") 应该返回 true.
telephoneCheck("555-555-5555") 应该返回 true.
telephoneCheck("(555)555-5555") 应该返回 true.
telephoneCheck("1(555)555-5555") 应该返回 true.
telephoneCheck("1 555)555-5555") 应该返回 false.
telephoneCheck("1 555 555 5555") 应该返回 true.
telephoneCheck("1 456 789 4444") 应该返回 true.
telephoneCheck("123**&!!asdf#") 应该返回 false.
telephoneCheck("55555555") 应该返回 false.
telephoneCheck("(6505552368)") 应该返回 false
telephoneCheck("2 (757) 622-7382") 应该返回 false.
telephoneCheck("0 (757) 622-7382") 应该返回 false.
telephoneCheck("-1 (757) 622-7382") 应该返回 false
telephoneCheck("2 757 622-7382") 应该返回 false.
telephoneCheck("10 (757) 622-7382") 应该返回 false.
telephoneCheck("27576227382") 应该返回 false.
telephoneCheck("(275)76227382") 应该返回 false.
telephoneCheck("2(757)6227382") 应该返回 false.
telephoneCheck("2(757)622-7382") 应该返回 false.
telephoneCheck("555)-555-5555") 应该返回 false.
telephoneCheck("(555-555-5555") 应该返回 false.
```





## 2. Symmetruc Dufference

```javascript
function sym(args) {
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);

```

```
创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.

给出两个集合 (如集合 A = {1, 2, 3} 和集合 B = {2, 3, 4}), 而数学术语 "对等差分" 的集合就是指由所有只在两个集合其中之一的元素组成的集合(A △ B = C = {1, 4}). 对于传入的额外集合 (如 D = {2, 3}), 你应该安装前面原则求前两个集合的结果与新集合的对等差分集合 (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

当你遇到困难的时候，记得查看错误提示、阅读文档、搜索、提问。

这是一些对你有帮助的资源:

Array.reduce()
Symmetric Difference

sym([1, 2, 3], [5, 2, 1, 4]) 应该返回 [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4]) 应该只包含三个元素.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) 应该返回 [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) 应该只包含三个元素.
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) 应该返回 [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) 应该只包含三个元素.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) 应该返回 [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) 应该只包含五个元素.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) 应该返回 [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) 应该只包含八个元素.


```





## 3. Exact Cgabge

```javascript
function checkCashRegister(price, cash, cid) {
  var change;
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

```



```
设计一个收银程序 checkCashRegister() ，其把购买价格(price)作为第一个参数 , 付款金额 (cash)作为第二个参数, 和收银机中零钱 (cid) 作为第三个参数.

cid 是一个二维数组，存着当前可用的找零.

当收银机中的钱不够找零时返回字符串 "Insufficient Funds". 如果正好则返回字符串 "Closed".

否则, 返回应找回的零钱列表,且由大到小存在二维数组中.

当你遇到困难的时候，记得查看错误提示、阅读文档、搜索、提问。

这是一些对你有帮助的资源:

Global Object


checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 应该返回一个数组.
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 应该返回一个字符串.
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 应该返回一个字符串.
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 应该返回 [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 应该返回 [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 应该返回 "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 应该返回 "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 应该返回 "Closed".

```





## 4.inventory Update



```javascript
function updateInventory(arr1, arr2) {
    // 请保证你的代码考虑到所有情况
    return arr1;
}

// 仓库库存示例
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
```





```
依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组. 如果货物已存在则更新数量 . 如果没有对应货物则把其加入到数组中，更新最新的数量. 返回当前的库存数组，且按货物名称的字母顺序排列.

当你遇到困难的时候，记得查看错误提示、阅读文档、搜索、提问。

这是一些对你有帮助的资源:

Global Array Object'

updateInventory() 应该返回一个数组.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length 应该返回一个长度为6的数组.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) 应该返回 [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) 应该返回 [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) 应该返回 [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) 应该返回 [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].
```





##  5. No repeats please

```
function permAlone(str) {
  return str;
}

permAlone('aab');

```

```
把一个字符串中的字符重新排列生成新的字符串，返回新生成的字符串里没有连续重复字符的字符串个数.连续重复只以单个字符为准

例如, aab 应该返回 2 因为它总共有6中排列 (aab, aab, aba, aba, baa, baa), 但是只有两个 (aba and aba)没有连续重复的字符 (在本例中是 a).

当你遇到困难的时候，记得查看错误提示、阅读文档、搜索、提问。

这是一些对你有帮助的资源:

Permutations
RegExp
/**
  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console.
  */

permAlone("aab") 应该返回一个数字.
permAlone("aab") 应该返回 2.
permAlone("aaa") 应该返回 0.
permAlone("aabb") 应该返回 8.
permAlone("abcdefa") 应该返回 3600.
permAlone("abfdefa") 应该返回 2640.
permAlone("zzzzzzzz") 应该返回 0.
```





## 6. Friendly Date Ranges

```
function makeFriendlyDates(arr) {
  return arr;
}

makeFriendlyDates(['2017-01-02', '2017-01-05']);
```



```
makeFriendlyDates(["2017-01-02", "2017-01-05"]) 应该返回 ["January 2nd","5th"].
makeFriendlyDates(["2017-02-01", "2017-03-03"]) 应该返回 ["February 1st","March 3rd"].
makeFriendlyDates(["2016-05-11", "2017-04-04"]) 应该返回 ["May 11th, 2016","April 4th"].
makeFriendlyDates(["2017-07-12", "2018-06-13"]) 应该返回 ["July 12th","June 13th"]
makeFriendlyDates(["2003-08-15", "2009-09-21"]) 应该返回 ["August 15th, 2003", "September 21st, 2009"].
makeFriendlyDates(["2010-10-23", "2011-10-22"]) 应该返回 ["October 23rd, 2010","October 22nd"].
makeFriendlyDates(["2008-10-31", "2009-10-31"]) 应该返回 ["October 31st, 2008","October 31st, 2009"].
makeFriendlyDates(["2004-11-17", "2005-12-25"]) 应该返回 ["November 17th, 2004","December 25th, 2005"].
makeFriendlyDates(["2001-12-20", "2001-12-20"]) 应该返回 ["December 20th, 2001"].
makeFriendlyDates(["2002-12-20", "2001-12-20"]) 不应该返回数组

```



## 7. Make a Person

```
var Person = function(firstAndLast) {
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();

```

```
用下面给定的方法构造一个对象.

方法有 getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

所有有参数的方法只接受一个字符串参数.

所有的方法只与实体对象交互.

当你遇到困难的时候，记得查看错误提示、阅读文档、搜索、提问。

这是一些对你有帮助的资源:

Closures
Details of the Object Model
```





## 8. Map the Debris

```
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```



```
返回一个数组，其内容是把原数组中对应元素的平均海拔转换成其对应的轨道周期.

原数组中会包含格式化的对象内容，像这样 {name: 'name', avgAlt: avgAlt}.

至于轨道周期怎么求，戳这里 on wikipedia (不想看英文的话可以自行搜索以轨道高度计算轨道周期的公式).

求得的值应该是一个与其最接近的整数，轨道是以地球为基准的.

地球半径是 6367.4447 kilometers, 地球的GM值是 398600.4418, 圆周率为Math.PI

当你遇到困难的时候，记得查看错误提示、阅读文档、搜索、提问。

这是一些对你有帮助的资源:

Math.pow()
/**
  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console.
  */

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) 应该返回 [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) 应该返回 [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].

```



## Pairwise

```
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);
```



```
找到你的另一半

都说优秀的程序员擅长面向对象编程，但却经常找不到另一半，这是为什么呢？因为你总是把自己局限成为一个程序员，没有打开自己的思维。

这是一个社群的时代啊，在这里你应该找到与你有相同价值观但又互补的另一半。

譬如：你编程能力强，估值11分，如果以20分为最佳情侣来计算，你应该找一个设计能力强，估值为9分的女生。

那么当你遇到一个设计能力为9分的女生，千万别犹豫，大胆去表白。千万别以为后面的瓜比前面的甜哦。

举个例子：有一个能力数组[7,9,11,13,15]，按照最佳组合值为20来计算，只有7+13和9+11两种组合。而7在数组的索引为0，13在数组的索引为3，9在数组的索引为1，11在数组的索引为2。

所以我们说函数：pairwise([7,9,11,13,15],20) 的返回值应该是0+3+1+2的和，即6。

我们可以通过表格来更直观地查看数组中索引和值的关系：

Index	0	1	2	3	4
Value	7	9	11	13	15
任务：帮右边的pairwise函数实现上面的功能。

当你遇到困难的时候，记得开大招'Read-Search-Ask'。

这是一些对你有帮助的资源:

Array.reduce()
/**
  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console.
  */

pairwise([1, 4, 2, 3, 0, 5], 7) 应该返回 11.
pairwise([1, 3, 2, 4], 4) 应该返回 1.
pairwise([1, 1, 1], 2) 应该返回 1.
pairwise([0, 0, 0, 0, 1, 1], 1) 应该返回 10.
pairwise([], 100) 应该返回 0.
```



