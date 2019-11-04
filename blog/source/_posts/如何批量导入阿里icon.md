---
title: 如何批量导入阿里icon
date: 2019-10-28 22:06:39
tags:
- vue
- 前端
categories:
- 技巧
# 图片链接 https://htwm623.github.io/htwm_open_sesame/images
---

# 如何批量导出阿里icon

原文章来源  https://www.jianshu.com/p/59dd28f0b9c9 

阿里icon 素材网站  https://www.iconfont.cn/ 



## 下载图标

- 如何批量将素材导入购物车 比如在以下页面

  

![2019-10-28_220857](https://htwm623.github.io/htwm_open_sesame/images/2019-10-28_220857.png)

<!--more-->

在该页面下调出控制台 <kbd>F12</kbd>  在控制台执行如下代码 (亲测:2019年10月28日)

```javascript
var icons = document.querySelectorAll('.icon-gouwuche1');

var auto_click = function(i) { if (i < icons.length) { setTimeout(function() { icons.item(i).click(); auto_click(i + 1); }, 600); } };

auto_click(0);

```



则会自动添加代码至购物车 -> 添加至项目 -> 选择 fontclass 然后下载至本地



## 调用图标

1. 将下载的文件全部放入项目的assert 文件下
2. 在main.js 中将 iconfont.css 文件引入(个人使用,略过 原文章中修改iconfont.css )
3. 查看incofont.css 文件中 font-family的值,如:



![2019-10-28_233757](https://htwm623.github.io/htwm_open_sesame/images/2019-10-28_233757.png)

红框即为 fontfamily

4. 调用

   ```html
   <i class="iconfont icon-bad-fill"></i>
   ```

   class空格前部分为 fontfamliy的值 后面一部分可在阿里icon项目页面进行复制

   

   以上

