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