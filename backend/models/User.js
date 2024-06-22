// models/User.js
const mongoose = require('mongoose');

// Define the schema for a User
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure the username is unique
    trim: true, // Trim whitespace from the username
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure the email is unique
    trim: true, // Trim whitespace from the email
    lowercase: true, // Convert the email to lowercase
  },
  password: {
    type: String,
    required: true, // Ensure the password is provided
  },
  bookmarks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Reference the Product model
  }],
  createdAt: {
    type: Date,
    default: Date.now, // Set the default value to the current date and time
  },
});

// Export the User model
module.exports = mongoose.model('User', UserSchema);
