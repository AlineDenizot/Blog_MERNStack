const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose');

const ArticleController = require('./controllers/ArticleControl')

  //Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

  //Connection database
mongoose
.connect('mongodb://localhost:27017/blogdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  autoIndex: true,
})
.then(() => console.log("Connected to database"))
.catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send('Hello World!');
})

  //Higher-Order Function to catch errors
function asyncErrorWrapper (callback) {
  return function callAsync (req, res, next) {
    callback(req, res, next).catch(next)
  }
}

  //Routes
app.post('/api/article/create', asyncErrorWrapper(ArticleController.create))
app.get('/api/article/read', asyncErrorWrapper(ArticleController.read))
app.put('/api/article/update', asyncErrorWrapper(ArticleController.update))
app.delete('/api/article/delete', asyncErrorWrapper(ArticleController.delete))

  //Start server
app.listen(port, () => {
  console.log(`Server start at http://localhost:${port}`)
})