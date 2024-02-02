const express = require('express');
const router = express.Router();
const responseControllers = require('../controllers/responseControllers');

router.post('/user_Response', responseControllers.getResponse);

