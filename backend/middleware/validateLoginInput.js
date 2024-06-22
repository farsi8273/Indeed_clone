// middleware/validateLoginInput.js
const { check, validationResult } = require('express-validator');

const validateLoginInput = [
  // Validate email
  check('email', 'Please provide a valid email')
    .isEmail()
    .normalizeEmail(),
  
  // Validate password
  check('password', 'Password should be at least 6 characters long')
    .isLength({ min: 6 }),

  // Middleware function to check for validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // If there are validation errors, return a 400 status code with the errors
      return res.status(400).json({ errors: errors.array() });
    }
    // If validation is successful, proceed to the next middleware or route handler
    next();
  }
];

module.exports = validateLoginInput;
