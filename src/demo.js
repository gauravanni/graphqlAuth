const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Event = require('./model/event')
const cors = require('cors')
const co=require('co')
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api',(req,res)=>{
    try{
        co(function*(){
            const events=yield Event.find({})
            res.send(events);
        })
    }
    catch(err){
        console.log('err',err);
    }
})

app.listen(4000,()=>{
    console.log('port started at 4000');
});

(async () => {
    try {
        await mongoose.connect(`mongodb+srv://gaurav:gaurav@cluster0-txbot.mongodb.net/test`);
        console.log('mongodb connected');
    } catch (err) {
        console.log('connection error', err);
    }
})();