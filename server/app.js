const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

dotenv.config({path: './config.env'})
require('./DB/conn');
app.use(express.json());
app.use(require('./Router/router'));

const PORT = process.env.PORT;




app.get('/register' , (req ,res)=>{
    res.send("this is register page");
})
// app.get('/login' , (req ,res)=>{
//     res.send("this is login page");
// })

app.listen(PORT , ()=>{
    console.log("Server has started");
})