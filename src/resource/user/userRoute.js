const express = require('express');
const router = express.Router();
const UserCtrl = require('./user.auth');
const Userlogin = require('./user.controller');

router.post('/signup', UserCtrl.UserSignup);
router.post('/login', Userlogin.login);

module.exports = router;