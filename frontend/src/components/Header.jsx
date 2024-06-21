import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaBell, FaCommentDots, FaUser } from 'react-icons/fa';
import '../App.css'

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className="flex justify-between items-center py-4 px-8 border-b-2 border-gray-200 bg-white">
      <div className="flex items-center space-x-8">
        <div className="text-blue-700 text-2xl font-bold">Indeed</div>
        <nav className="space-x-6">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/company-reviews" className="nav-link">Company reviews</Link>
          <Link to="/salary-guide" className="nav-link">Salary guide</Link>
        </nav>
      </div>
      <div className="flex items-center space-x-6">
        {isAuthenticated ? (
          <>
              <FaCommentDots className="icon" />
            <FaBell className="icon" />
            <Link to="/profile"><FaUser className="icon" /></Link>
            
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link text-blue-700">Sign in</Link>
          </>
        )}
         <h1>|</h1>
          <Link to="/signup" className="nav-link text-blue-700">Employers / Post Job</Link>
      </div>
    </header>
  );
};

export default Header;
