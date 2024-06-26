// routes/product.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');

// Route to get all products
router.get('/', productController.getAllProducts);

// Route to get a single product by ID
router.get('/:id', productController.getProductById);

// Route to add a new product, requires authentication
router.post('/', auth, productController.addProduct);

// Route to update a product by ID, requires authentication
router.put('/:id', auth, productController.updateProduct);

// Route to delete a product by ID, requires authentication
router.delete('/:id', auth, productController.deleteProduct);

// Route to bookmark a product, requires authentication
router.post('/bookmark', auth, productController.bookmarkProduct);

module.exports = router;
