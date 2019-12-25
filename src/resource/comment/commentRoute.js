const express = require('express');
const router = express.Router();
//const UserCtrl = require('./user.auth');
const CommentCtrl = require("./comment.controller");
const { auth } = require("../../config/auth");


router.post('/', CommentCtrl.createComment);


module.exports = router;