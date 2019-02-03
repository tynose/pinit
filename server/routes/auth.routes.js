const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/auth.controllers');

// --- auth routes -- //

router.get('/login', authController.login);

router.get('/logout', authController.logOut);

router.get('/github', authController.github);

router.get('/github/callback', authController.callBack);

module.exports = router;
