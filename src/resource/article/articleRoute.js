const express = require('express');
const router = express.Router();
const ArticleCtrl = require('./article.controller');
//auth rout comes here

router.post('/', ArticleCtrl.createArticle);


module.exports = router;