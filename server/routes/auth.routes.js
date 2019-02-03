const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controllers');

// --- auth routes -- //

router.get('/login', authController.login);

router.get('/logout', authController.logOut);

router.get('/github', authController.github);

module.exports = router;
