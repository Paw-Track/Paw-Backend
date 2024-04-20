const express = require('express');
const router = express.Router();
const responseControllers = require('../controllers/responseControllers.js');

router.post('/user_Response', responseControllers.getResponse);

module.exports = router;