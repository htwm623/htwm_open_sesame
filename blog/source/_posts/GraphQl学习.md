---
title: GraphQl学习
date: 2020-01-05 19:44:21
tags:
- 网课笔记
categories:
- GraphQl
- API
---

## Graph介绍

- 特点

  - 请求需要的数据 不多不少
  - 获取多个资源，只用一个请求
  - 描述所有可能类型的系统,便于维护,根据需求平滑眼镜演进,添加或隐藏字段

- node监听运行修改文件命令 nodemon执行命令

- GraphHelloWolrd

  ```JS
  const express = require('express')
  const {buildSchema} = require('graphql')
  const graphqlHTTP = require('express-graphql')
  
  const schema = buildSchema(`
    type Account{
      name: String
      age: Int
      sex: String
      department: String
    }
    type Query {
      hello: String
      accountName: String
      age: Int
      account: Account
    }
  `)
  
  const root = {
    hello: () => {
      return 'hello world'
    },
    accountName: () => {
      return 'xiaoming'
    },
    age: () => {
      return 18
    },
    account: () => {
      return {
        name: 'nizi',
        age: '18',
        sex: 'femail',
        department: 'school'
      }
    }
  }
  
  const app = express()
  
  
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  }))
  
  app.listen(3000) 
  ```

- 

