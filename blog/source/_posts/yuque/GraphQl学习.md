
---

title: GraphQl学习

urlname: bd7oz4

date: 2020-01-19 13:21:35 +0800

tags: [GraphQL]

categories: [前端开发]

---

<a name="cd02615d"></a>
## Graph介绍


- 特点
   - 请求需要的数据 不多不少
   - 获取多个资源，只用一个请求
   - 描述所有可能类型的系统,便于维护,根据需求平滑眼镜演进,添加或隐藏字段
- node监听运行修改文件命令 nodemon执行命令
- GraphHelloWolrd```javascript
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




<a name="9WsJ8"></a>
## 基本数据类型

- 基本类型 String,Int,Float,Boolean和ID
<a name="DCuaR"></a>
## 参数传递 
query<br />

```javascript
query{
	getClassMates(classNo: 31)
  account(username:"xiaoming") {
    name
    age
    sex
    department
    salary(city:"canton")
  }
}
```


- 示例2 js
```javascript
const express = require('express');
const {buildSchema} = require('graphql');
const graphqlHTTP = require('express-graphql');

const schema = buildSchema(`
    type Account {
        name: String
        age: Int
        sex: String
        department: String
        salary(city: String): Int     
    }
    type Query {
        getClassMates(classNo: Int!): [String]
        account(username: String): Account
    }
`);

const root = {
    getClassMates: ({classNo}) => {
        const obj = {
            31: ['张三'],
            61: ['李四']
        };
        return obj[classNo]
    },
    account: ({username}) => {
        const name = username;
        const sex = 'man';
        const age = 18;
        const department = "development";
        const salary = ({city}) => {
            if (city === 'canton') {
                return 10000
            }
            return 3000
        };
        return {
            name,
            sex,
            age,
            department,
            salary
        }
    }
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000);
```

<br />

<a name="sdBuX"></a>
## GrqphQl 客户端访问
示例3 获取示例2中的数据
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<button onclick="getData()">获取数据</button>
</body>
<script>
  function getData() {
    const query = `
    query Account($username: String,$city: String) {
      account(username: $username) {
        name
        age
        sex
        salary(city: $city)
      }
    }
    `;
    const variables = {username: 'xiaoming', city: "canton"};
    fetch('/graphql', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    }).then(res => res.json)
    .then(json => {
      console.log(json)
    })
  }
</script>
</html>
```

<br />

<a name="LdNqC"></a>
## 使用Mutations 修改数据
示例 创建数据查询体<br />

```javascript
mutation {
  createAccount(input: {
    name: "xiaoming",
    age:20
    sex: "female"
    department: "test"
  }) {
    name
    age
    sex
    department
  }
}
```

<br />示例 更新数据查询体<br />

```javascript
mutation {
  updateAccount(id: "xiaoming", input:{
    age:100
  }) {
    age
  }
}
```

<br />示例 查询数据 查询体<br />

```javascript
query {
  account{
    name
    sex
    age
  }
}
```

<br />示例 mutation.js文件<br />

```javascript
const express = require('express');
const {buildSchema} = require('graphql');
const graphqlHTTP = require('express-graphql');


const schema = buildSchema(`
  input AccountInput {
    name: String
    age: Int
    sex: String
    department: String
  }
  type Account {
    name: String
    age: Int
    sex: String
    department: String
  }
  type Mutation {
    createAccount(input: AccountInput): Account
    updateAccount(id: ID!, input: AccountInput): Account   
  }
  type Query {
    account: [Account] 
   }
`);
const fakeDb = {};

const root = {
  account() {
    let arr = [];
    for (const key in fakeDb) {
      arr.push(fakeDb[key])
    }
    return arr;
  },
  createAccount({input}) {
    fakeDb[input.name] = input;
    return fakeDb[input.name]
  },
  updateAccount({id, input}) {
    const updatedAccount = Object.assign({}, fakeDb[id], input)
    console.log(id, updatedAccount)
    fakeDb[id] = updatedAccount;
    console.log(fakeDb)
    return updatedAccount
  }
};


const app = express();


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.use(express.static('.'))
app.listen(3000);
```

<br />


