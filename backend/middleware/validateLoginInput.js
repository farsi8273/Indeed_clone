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

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateLoginInput;
