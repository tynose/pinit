const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

// --- user routes -- //

router.get('/me', userController.authorize, userController.loggedInUser);

router.get('/:id', userController.user);

module.exports = router;
