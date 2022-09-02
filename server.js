const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
const config = require("config")

const app = express()
app.use(express.json())


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
