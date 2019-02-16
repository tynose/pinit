const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/auth.controllers');

// --- auth routes -- //

router.get('/logout', authController.logOut);

router.get(
	'/github',
	passport.authenticate('github', {
		scope: ['profile']
	})
);

router.get(
	'/github/callback',
	passport.authenticate('github'),
	authController.callBack
);

module.exports = router;
