const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

// --- user routes -- //

router.get('/me', userController.authorize, userController.loggedInUser);

module.exports = router;
