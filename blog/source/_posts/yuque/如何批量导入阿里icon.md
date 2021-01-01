
---

title: 如何批量导入阿里icon

urlname: dg3bg7

date: 2020-10-13 00:46:27 +0800

categories: [前端开发]

tags: [阿里图标]

---

<a name="ea9f3735"></a>
# 如何批量导出阿里icon

<br />原文章来源  [https://www.jianshu.com/p/59dd28f0b9c9](https://www.jianshu.com/p/59dd28f0b9c9)<br />
阿里icon 素材网站  [https://www.iconfont.cn/](https://www.iconfont.cn/)<br />

<a name="ae28ce60"></a>
## 下载图标


- 如何批量将素材导入购物车 比如在以下页面


<br />![](https://htwm623.github.io/htwm_open_sesame/images/2019-10-28_220857.png#align=left&display=inline&height=748&margin=%5Bobject%20Object%5D&originHeight=748&originWidth=1280&status=done&style=none&width=1280)<br />在该页面下调出控制台   在控制台执行如下代码 (亲测:2019年10月28日)<br />

```javascript
var icons = document.querySelectorAll('.icon-gouwuche1');

var auto_click = function(i) { if (i < icons.length) { setTimeout(function() { icons.item(i).click(); auto_click(i + 1); }, 600); } };

auto_click(0);
```

<br />则会自动添加代码至购物车 -> 添加至项目 -> 选择 fontclass 然后下载至本地<br />

<a name="f12d3480"></a>
## 调用图标


1. 将下载的文件全部放入项目的assert 文件下
2. 在main.js 中将 iconfont.css 文件引入(个人使用,略过 原文章中修改iconfont.css )
3. 查看incofont.css 文件中 font-family的值,如:


<br />![](https://htwm623.github.io/htwm_open_sesame/images/2019-10-28_233757.png#align=left&display=inline&height=160&margin=%5Bobject%20Object%5D&originHeight=160&originWidth=790&status=done&style=none&width=790)<br />
红框即为 fontfamily<br />

4. 调用```html
<i class="iconfont icon-bad-fill"></i>
```
<br />class空格前部分为 fontfamliy的值 后面一部分可在阿里icon项目页面进行复制<br />以上

