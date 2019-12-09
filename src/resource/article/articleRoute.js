const express = require("express");
const router = express.Router();
const ArticleCtrl = require("./article.controller");
//auth rout comes here
const { auth } = require("../../config/auth");

router.post("/", auth, ArticleCtrl.createArticle);
router.get("/", auth, ArticleCtrl.getArticles);
router.post("/:id", ArticleCtrl.upadteArticle);
router.delete("/:id", auth, ArticleCtrl.deleteArticle);
router.get("/:id", auth, ArticleCtrl.getOneArticle);
router.post("/create", function(req, res) {
  res.json(req.body);
});

module.exports = router;
