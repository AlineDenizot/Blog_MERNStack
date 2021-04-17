const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title : {type :String, required : true, unique : true},
    description : String,
    author : String,
})

module.exports = mongoose.model('article', ArticleSchema);