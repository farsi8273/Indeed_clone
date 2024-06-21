// authService.js
import axios from 'axios';

const AUTH_BASE_URL = 'http://localhost:3000/api/users'; // Replace with your auth base URL

// Function to log in a user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${AUTH_BASE_URL}/login`, credentials);
    // Assuming the token is in the response data
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Function to sign up a user
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${AUTH_BASE_URL}/signup`, userData);
    // Assuming the token is in the response data
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

// Function to log out a user
export const logoutUser = () => {
  localStorage.removeItem('token');
};

// Function to get the current user
export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');
    
    const response = await axios.get(`${AUTH_BASE_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current user:', error);
    throw error;
  }
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};




// export const getCurrentUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };