// models/Product.js
const mongoose = require('mongoose');

// Define the schema for a Product
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Trim whitespace from the name
  },
  description: {
    type: String,
    required: true,
    trim: true, // Trim whitespace from the description
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Ensure the price is not negative
  },
  createdAt: {
    type: Date,
    default: Date.now, // Set the default value to the current date and time
  },
});

// Export the Product model
module.exports = mongoose.model('Product', ProductSchema);
