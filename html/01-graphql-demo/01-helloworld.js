const express = require('express');
const {buildSchema} = require('graphql');
const graphqlHTTP = require('express-graphql');


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
`);

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
};

const app = express();


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000);