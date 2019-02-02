const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

// --- user routes -- //

router.get('/', userController.users);

router.get('/me', userController.authorize, userController.loggedInUser);

router.post('/signup', userController.userSignup);

router.post('/login', userController.userLogin);

// router.put('/:id/update', userController.userUpdate);

// router.delete('/:id/delete', userController.userDelete);

module.exports = router;
