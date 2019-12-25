const express = require('express');
const router = express.Router();
//const UserCtrl = require('./user.auth');
const CommentCtrl = require("./comment.controller");
const { auth } = require("../../config/auth");


router.post("/:id/comment", auth, CommentCtrl.createComment);
router.get("/:id/comment", auth, CommentCtrl.commentFeed);

module.exports = router;