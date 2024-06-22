// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User signup
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    if (!password) {
      return res.status(400).json({ message: 'Password is required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (error) {
    console.log('Signup error:', error); // Log signup error
    res.status(400).json({ message: error.message });
  }
};

// User login
exports.login = async (req, res) => {

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      console.log('Email or password is missing'); // Log missing fields
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found for email:', email); // Log if user is not found
      return res.status(400).json({ message: 'User not found for email' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.log('Login error:', error); // Log login error
    res.status(500).json({ message: error.message });
  }
};
