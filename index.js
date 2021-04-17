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

//Routes
app.post('/api/article/create', ArticleController.create)
app.get('/api/article/read', ArticleController.read)
app.put('/api/article/update', ArticleController.update)
app.delete('/api/article/delete', ArticleController.delete)

//Start server
app.listen(port, () => {
  console.log(`Server start at http://localhost:${port}`)
})