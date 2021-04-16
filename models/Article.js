const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title : String,
    description : String,
    author : String,
    date : Date,
})

module.exports = mongoose.model('article', ArticleSchema)