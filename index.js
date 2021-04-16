const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose');

const ArticleModel = require('./models/Article')

app.get('/', (req, res) => {
    res.send('Hello World!');
  })

  //Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

  //Connection database
mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true})
.then(() => console.log("Connected to database"))
.catch(err => console.log(err))

  //Start server
  app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`)
  })