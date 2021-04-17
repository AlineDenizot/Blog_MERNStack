const ArticleModel = require('../models/ArticleModel');

module.exports = {
    create: async (req, res, next) => {
        const article = new ArticleModel(req.body)
        const result = await article.save()
        res.json({ success:true, result: result})
    }, 
    read : async (req, res, next) => {
        const article = await ArticleModel.find()
        res.json({ success:true, result: article})
    },
    update: async (req, res, next) => {
        const article = await ArticleModel.updateOne({_id: req.body._id}, req.body)
        res.json({ success:true, result: article}) 
    },
    delete : async (req, res, next) => {
        const article = await ArticleModel.deleteOne({_id: req.body._id})
        res.json({ success:true, result: article})
        
    }
    
}