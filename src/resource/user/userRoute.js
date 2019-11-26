const express = require('express');
const router = express.Router();
//const UserCtrl = require('./user.auth');
const UserCtrl = require('./user.controller');

router.post('/signup', UserCtrl.signup);
router.post('/login', UserCtrl.login);

module.exports = router;