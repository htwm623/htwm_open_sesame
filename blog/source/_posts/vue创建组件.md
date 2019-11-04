---
title: vue创建组件
date: 2019-10-23 23:42:21
tags:
- vue
- component
categories:
- 踩的坑
---

# vue创建组件及发布流程

## 创建组件

1. 首先创建组件代码

```vue
<template>
  <div>
    <h3>this is a web component  created in vue</h3>  
    <div> My name is {{name}} </div>
  </div>
</template>

<script>
export default {
  props:{
    name: {type: String,default:"mark"}
  }
}
</script>
```

2. 使用cli 进行组件封装

```bash
vue build --target wc .\src\components\my-component.vue

- 踩坑 使用vue build 单个文件,文件名称中需要使用 "-" 符号作为文件命名连接符
```





1. 