// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');
const { login, signup } = require('./controllers/userController');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
  origin: true,
}));
// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(morgan('dev')); // To log HTTP requests

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.use('/', (req, res) => {
  res.send(`
      <h1>Welcome to our backend project</h1>
      <p>There are many apps you can use:</p>
      <ul>
          <li>1. <code>/api/users/login</code> - POST</li>
          <li>2. <code>/api/users/signup</code> - POST</li>
          <li>3. <code>/api/products/</code> - GET</li>
          <li>4. <code>/api/products/:id</code> - POST</li>
          <li>5. <code>/api/products/:id</code> - PUT</li>
          <li>6. <code>/api/products/</code> - POST</li>
          <li>7. <code>/api/products/:id</code> - DELETE</li>
          <li>9. <code>/api/products/bookmark</code> - POST</li>
      </ul>
  `);
});

//








// Error Handling Middleware
app.use(errorHandler);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => console.error('MongoDB connection error:', err));

module.exports = app;
