const express = require('express');
const router = express.Router();
const linkController = require('../controllers/link.controllers');

// --- local auth routes -- //

router.get('/:id', linkController.getLinks);

router.post('/add', linkController.add);

module.exports = router;
