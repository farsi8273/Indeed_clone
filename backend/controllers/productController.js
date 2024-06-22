// controllers/productController.js
const Product = require('../models/Product');
const User = require('../models/User');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find();
    // Return the products in JSON format
    res.json(products);
  } catch (error) {
    // If there's an error, return a 500 status with the error message
    res.status(500).json({ message: error.message });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    // Fetch the product by its ID from the request parameters
    const product = await Product.findById(req.params.id);
    // If the product is not found, return a 404 status with a message
    if (!product) return res.status(404).json({ message: 'Product not found' });
    // Return the product in JSON format
    res.json(product);
  } catch (error) {
    // If there's an error, return a 500 status with the error message
    res.status(500).json({ message: error.message });
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
  try {
    // Create a new product using the data from the request body
    const product = new Product(req.body);
    // Save the product to the database
    await product.save();
    // Return the newly created product with a 201 status
    res.status(201).json(product);
  } catch (error) {
    // If there's an error, return a 400 status with the error message
    res.status(400).json({ message: error.message });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    // Find the product by its ID and update it with the new data from the request body
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // If the product is not found, return a 404 status with a message
    if (!product) return res.status(404).json({ message: 'Product not found' });
    // Return the updated product in JSON format
    res.json(product);
  } catch (error) {
    // If there's an error, return a 400 status with the error message
    res.status(400).json({ message: error.message });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    // Find the product by its ID and delete it from the database
    const product = await Product.findByIdAndDelete(req.params.id);
    // If the product is not found, return a 404 status with a message
    if (!product) return res.status(404).json({ message: 'Product not found' });
    // Return a message indicating the product was deleted
    res.json({ message: 'Product deleted' });
  } catch (error) {
    // If there's an error, return a 500 status with the error message
    res.status(500).json({ message: error.message });
  }
};

// Bookmark a product
exports.bookmarkProduct = async (req, res) => {
  try {
    // Find the user by their ID from the request's user object
    const user = await User.findById(req.user.userId);
    // If the user is not found, return a 404 status with a message
    if (!user) return res.status(404).json({ message: 'User not found' });
    // If the product ID is not already in the user's bookmarks, add it
    if (!user.bookmarks.includes(req.body.productId)) {
      user.bookmarks.push(req.body.productId);
      // Save the updated user document
      await user.save();
    }
    // Return a message indicating the product was bookmarked
    res.json({ message: 'Product bookmarked' });
  } catch (error) {
    // If there's an error, return a 500 status with the error message
    res.status(500).json({ message: error.message });
  }
};
