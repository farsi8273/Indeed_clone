// routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Bookmarks from './pages/Bookmarks';
import Profile from './pages/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import JobDetails from './components/JobDetails';
import CompanyReviews from './pages/CompanyReviews';
import SalaryGuide from './pages/SalaryGuide';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/company-reviews" element={<CompanyReviews />} /> {/* Route for company reviews */}
      <Route path="/salary-guide" element={<SalaryGuide />} /> {/* Route for salary guide */}
    </Routes>
  );
};

export default AppRoutes;
