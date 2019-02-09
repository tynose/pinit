const express = require('express');
const router = express.Router();
const localAuthController = require('../controllers/local-auth.controllers');

// --- local auth routes -- //

router.post('/signup', localAuthController.userSignup);

router.post('/login', localAuthController.userLogin);

module.exports = router;
