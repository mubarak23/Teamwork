const express = require('express');
const router = express.Router();
const ArticleCtrl = require('./article.controller');
//auth rout comes here

router.post('/', ArticleCtrl.createArticle);
router.get('/', ArticleCtrl.getArticles);
router.update('/:id', ArticleCtrl.upadteArticle);
router.delete('/:id', ArticleCtrl.deleteArticle);
router.get('/:id', ArticleCtrl.getOneArticle);

module.exports = router;