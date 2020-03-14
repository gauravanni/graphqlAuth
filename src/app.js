const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const {buildSchema} = require('graphql');
const mongoose = require('mongoose');
const Event = require('./model/event');
const cors = require('cors')
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
    schema:Event,
    rootValue:global,
    graphiql:true
}));


(async () => {
    try {
        await mongoose.connect(`mongodb+srv://gaurav:gaurav@cluster0-txbot.mongodb.net/test`);
        console.log('mongodb connected');
        app.listen(4000);
    } catch (err) {
        console.log('connection error', err);
    }
})();


/* {
  createEvent(eventInput:{title:"test",description:"description",price:9.99,date:"2019-11-13T09:22:39.924Z"}){
    title
    description
  }
}
*/