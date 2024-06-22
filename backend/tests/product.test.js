// tests/product.test.js
const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Product = require('../models/Product');

describe('Product API', () => {
  beforeAll(async () => {
    // Connect to the MongoDB database before running the tests
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    // Close the MongoDB connection after all tests are done
    await mongoose.connection.close();
  });

  let productId;

  it('should create a new product', async () => {
    // Send a POST request to create a new product
    const res = await request(app)
      .post('/api/products')
      .send({
        name: 'Test Product',
        description: 'This is a test product',
        price: 100,
      });
    // Store the product ID for later use
    productId = res.body._id;
    // Check if the response status code is 201 (Created)
    expect(res.statusCode).toEqual(201);
    // Check if the response body contains a property '_id'
    expect(res.body).toHaveProperty('_id');
  });

  it('should fetch all products', async () => {
    // Send a GET request to fetch all products
    const res = await request(app).get('/api/products');
    // Check if the response status code is 200 (OK)
    expect(res.statusCode).toEqual(200);
    // Check if the response body is an array
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should fetch a single product by ID', async () => {
    // Send a GET request to fetch a product by ID
    const res = await request(app).get(`/api/products/${productId}`);
    // Check if the response status code is 200 (OK)
    expect(res.statusCode).toEqual(200);
    // Check if the response body contains a property '_id'
    expect(res.body).toHaveProperty('_id');
  });

  it('should update a product by ID', async () => {
    // Send a PUT request to update a product by ID
    const res = await request(app)
      .put(`/api/products/${productId}`)
      .send({
        name: 'Updated Test Product',
        description: 'This is an updated test product',
        price: 150,
      });
    // Check if the response status code is 200 (OK)
    expect(res.statusCode).toEqual(200);
    // Check if the response body contains the updated name
    expect(res.body).toHaveProperty('name', 'Updated Test Product');
  });

  it('should delete a product by ID', async () => {
    // Send a DELETE request to delete a product by ID
    const res = await request(app).delete(`/api/products/${productId}`);
    // Check if the response status code is 200 (OK)
    expect(res.statusCode).toEqual(200);
    // Check if the response body contains a message 'Product deleted'
    expect(res.body).toHaveProperty('message', 'Product deleted');
  });
});
