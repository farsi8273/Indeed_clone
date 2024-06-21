// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173',
}));
// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(morgan('dev')); // To log HTTP requests

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

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
