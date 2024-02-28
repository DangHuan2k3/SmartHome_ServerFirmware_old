const express = require('express');
const router = express.Router();

const espController = require('../app/controllers/ESPController');

// testController
router.post('/connect/:id', espController.connect);

module.exports = router;