// middleware/auth.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header('Authorization');
  
  // If no token is provided, deny access
  if (!token) return res.status(401).send('Access Denied: No Token Provided');

  try {
    // Verify the token using the secret key
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach the verified user information to the request object
    req.user = verified;
    
    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // If the token is invalid, return an error
    res.status(400).send('Invalid Token');
  }
};

module.exports = auth;
