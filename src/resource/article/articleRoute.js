const express = require('express');
const router = express.Router();
const ArticleCtrl = require('./article.controller');
//auth rout comes here

router.post('/', ArticleCtrl.createArticle);
router.get('/', ArticleCtrl.getArticles);
router.post('/:id', ArticleCtrl.upadteArticle);
router.delete('/:id', ArticleCtrl.deleteArticle);
router.get('/:id', ArticleCtrl.getOneArticle);
router.post('/create', function (req, res){
    res.json(req.body);
})

module.exports = router;