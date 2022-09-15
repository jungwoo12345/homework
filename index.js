const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./server/config/key');
const {auth} = require('./server/middleware/auth');
const { User } = require("./server/models/User");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cookieParser());



const mongoose = require('mongoose')

// mongodb+srv://plan:a123456!@plate.uqrfbar.mongodb.net/?retryWrites=true&w=majority
 
mongoose.connect('mongodb+srv://plan:a123456!@plate.uqrfbar.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => console.log('MongoDB Connect...'))
  .catch(err => console.log(err))
  

app.get('/', (req, res) => res.send('Hello world!!@#!#!#'));

app.get('/api/hello', (req, res) => {

  res.send("안녕하세요")
})

const port = 5000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))