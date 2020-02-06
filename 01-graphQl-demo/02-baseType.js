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

app.use(express.static('.'))
app.listen(3000);