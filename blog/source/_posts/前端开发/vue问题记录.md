---
title: vue问题记录
date: 2019-11-23 01:24:06
tags:
- vue
categories:
- 前端开发
# https://htwm623.github.io/htwm_open_sesame/images
---

## vue使用.env文件保存全局变量

- vue-cli 中可以使用.env文件保存环境变量,以便于快速切换环境

- 使用方式如下

  1. 在主目录下创建.env文件,文件内容参照如下

     ```javascript
     VUE_APP_TITLE = "标题测试"
     // 必须使用VUE_APP_ 开头
     ```

  2. 在任何vue文件中均可使用如下方式进行读取,如:

     ```javascript
     console.log(process.env.VUE_APP_TITLE)
     ```

- 使用不同的.env文件切换变量

  - 如创建.env.test文件

  - 然后在启动脚本命令中配置 

    ```json
    "scripts": {
        "test": "vue-cli-service serve --mode test",
        "serve": "vue-cli-service serve",
        "build": "vue-cli-service build"
      },
    ```

  - 即可使用 npm run test 运行服务,调用的即为.env.test 中的环境变量









<!--more-->

