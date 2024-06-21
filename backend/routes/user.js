// routes/user.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateSignupInput = require('../middleware/validateSignupInput');
const validateLoginInput = require('../middleware/validateLoginInput');

// Route for user signup - Corrected
router.post('/signup', userController.signup);

// Route for user login - Corrected
router.post('/login', userController.login);

// Incorrect route definition causing the error
router.get('/me');  // <-- This line is causing the error

module.exports = router;
