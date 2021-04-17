const ArticleModel = require('../models/ArticleModel');

module.exports = {
    create: (req, res) => {
        let article = new ArticleModel(req.body)
        article
        .save()
        .then((result) => {
            res.json({ success:true, result:result})
        })
        .catch(err => {
            res.json({ success: false, result: err})
           });
    },
    read : (req, res) => {
        ArticleModel.find()
        .then((result) => {
            if (!result) res.json({ success: false, result: "No articles found"})

            res.json({ success:true, result:result})
        })
        .catch(err => {
            res.json({ success: false, result: err})
           })
    },
    update: (req, res) => {
        ArticleModel.updateOne({_id: req.body._id}, req.body)
        .then((result) => {
            if (!result) res.json({ success: false, result: "No articles found"})
            
            res.json({ success:true, result:result})
        })
        .catch(err => {
            res.json({ success: false, result: err})
           });
    },
    delete : (req, res) => {
        ArticleModel.deleteOne({_id: req.body._id})
        .then((result) => {
            if (!result) res.json({ success: false, result: "No articles found"})
            
            res.json({ success:true, result:result})
        })
        .catch(err => {
            res.json({ success: false, result: err})
           });
    }
    
}