---
title: node基础操作
date: 2020-01-15 00:11:20
tags:
- node
categories:
- node
---



### 遍历文件夹

1. 原生递归遍历文件夹

   ```javascript
   const fs = require('fs')
   const path = require('path')
   
   const readDir = (entry) => {
     const dirInfo = fs.readdirSync(entry);
     dirInfo.forEach(item => {
       const location = path.join(entry,item) // 拼接绝对路径
       const info = fs.statSync(location) // 获取路径的文件信息
       if (info.isDirectory()) {
         // 如果还是文件夹就需要递归
         readDir(location)
       }else {
         console.log(`file: ${location}`)
       }
       
     })
   } 
   readDir(__dirname)  // _dirname 为当前目录
   ```

   

2. 使用第三方库获取指定的正则的文件 [glob]( https://github.com/isaacs/node-glob )

   ```javascript
   const glob = require( 'glob' );  
   
   glob( 'node_modules/**/*.js', function( err, files ) {
     console.log( files );
   });
   ```



