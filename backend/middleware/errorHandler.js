// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
  // Log the error stack for debugging purposes
  console.error(err.stack);
  
  // Respond with a 500 status code and the error message
  res.status(500).json({ message: err.message });
};

module.exports = errorHandler;
