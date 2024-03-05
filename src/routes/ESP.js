const express = require('express');
const router = express.Router();

const espController = require('../app/controllers/ESPController');

// /connect/:id?numPort=
router.get('/connect/:id', espController.connect);

module.exports = router;