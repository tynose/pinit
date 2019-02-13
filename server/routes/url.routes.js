const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url.controllers');

// --- local auth routes -- //

router.get('/:id', urlController.decoder);

router.post('/add', urlController.encoder);

module.exports = router;
