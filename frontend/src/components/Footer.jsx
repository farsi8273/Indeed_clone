// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 w-full">
    <div className="container mx-auto">
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-gray-700 hover:text-gray-900">Career advice</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Browse Jobs</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Browse Companies</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Salaries</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Indeed Events</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Work at Indeed</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Countries</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Help Centre</a>
      </div>
      <div className="mt-4 flex flex-col items-center space-y-2">
        <p className="text-gray-600">&copy; 2024 Indeed</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Accessibility at Indeed</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Centre</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Ad Choices</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
