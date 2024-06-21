import React from 'react';

// Functional component for displaying company card
const CompanyCard = ({ name, reviews, img }) => {
  return (
    // Container for company card
    <div className="relative border border-gray-400 p-5 rounded-lg hover:shadow-lg flex flex-col md:flex-row items-center mt-4">
      {/* Render company logo if provided */}
      {img && <img src={img} alt={`${name} logo`} className="w-16 h-16 md:w-24 md:h-24 mr-4 md:mr-8 mb-4 md:mb-0 shadow-lg rounded-lg" />}
      {/* Company information */}
      <div className="flex flex-col items-start">
        {/* Company name */}
        <h3 className="font-bold mb-2">{name}</h3>
        {/* Number of reviews */}
        <p className="mb-2">{reviews} reviews</p>
        {/* Links for job openings, reviews, and salaries */}
        <div className="flex flex-wrap mt-2">
          <a href="#" className="text-gray-500 mr-4 mb-2 md:mb-0 hover:text-blue-900 hover:underline text-sm">Job openings</a>
          <a href="#" className="text-gray-500 mr-4 mb-2 md:mb-0 hover:text-blue-900 hover:underline text-sm">Reviews</a>
          <a href="#" className="text-gray-500 hover:text-blue-900 hover:underline text-sm">Salaries</a>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
