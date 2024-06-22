// tests/user.test.js
const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');

describe('User API', () => {
  beforeAll(async () => {
    // Connect to the MongoDB database before running the tests
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    // Close the MongoDB connection after all tests are done
    await mongoose.connection.close();
  });

  it('should signup a new user', async () => {
    // Send a POST request to signup a new user
    const res = await request(app)
      .post('/api/users/signup')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123',
      });
    // Check if the response status code is 201 (Created)
    expect(res.statusCode).toEqual(201);
    // Check if the response body contains a property 'token'
    expect(res.body).toHaveProperty('token');
  });

  it('should login an existing user', async () => {
    // Send a POST request to login an existing user
    const res = await request(app)
      .post('/api/users/login')
      .send({
        email: 'testuser@example.com',
        password: 'password123',
      });
    // Check if the response status code is 200 (OK)
    expect(res.statusCode).toEqual(200);
    // Check if the response body contains a property 'token'
    expect(res.body).toHaveProperty('token');
  });
});
