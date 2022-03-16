const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
require('dotenv').config()

// create express app
const app = express()
app.use(cors())

//setting up server port

const port = process.env.PORT || 5000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// define root routers
app.get('/',(req,res)=>{
    res.send("roots are properly working")
})
//Import JWT for Auth
const {checkToken} = require("./src/api/auth/token_validation")
// import the required routes
const userRoutes = require('./src/api/routes/Users/user')
const authRoutes = require('./src/api/routes/Users/auth/index')
//Create routes
app.use('/users',checkToken, userRoutes)
app.use('/auth', authRoutes)


//Listening to the port
app.listen(port,()=>{
    console.log("This server is running properly ",port)
})