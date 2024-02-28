const express = require('express');
const router = express.Router();

const object_1Controller = require('../app/controllers/Object_1Controller');

// testController
router.get('/', object_1Controller.get);

module.exports = router;