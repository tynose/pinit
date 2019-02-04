const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

// --- user routes -- //

router.get('/', userController.users);

router.post('/signup', userController.userSignup);

module.exports = router;
