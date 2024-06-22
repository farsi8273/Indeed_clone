// routes/user.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateSignupInput = require('../middleware/validateSignupInput');
const validateLoginInput = require('../middleware/validateLoginInput');

// Route for user signup - Corrected
router.post('/signup', validateSignupInput, userController.signup);

// Route for user login - Corrected
router.post('/login', validateLoginInput, userController.login);



module.exports = router;
