const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
const config = require("config")

const app = express()
app.use(express.json())


// Use in production to serve client files 
//let a = 10; b = '10' console.log(a == b) // true 
// let a = 10; b = 10; c = -10 console.log(a==b)//true, console.log(a==c)//false; console(b!=c)//true; console.log(a != b)//false
//let str1 = 'Javscript'; let str2 = 'Javascript'; let str3 = 'JavaScript' console.log(str1 == str2)//true; str1 == str3 //false
//let a = 10; let b == '10'; let c= 10; console.log(a===b)//false; console.log(a === c )//true
// 34 === '34' //false 
// === returns true only if operands are of the same data type and same value, otherwise returns false

if(process.env.NODE_ENV  === 'production'){
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(___dirname, 'client', 'build', 'index.html'));
  })
}


// connecting to mongeDB and then running server on port 4000
const dbURI  = config('dbURI');
const port = process.env.PORT || 4000;
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err))
