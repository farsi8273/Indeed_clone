import React from 'react';

const ImprovementSection = ({ title, description }) => {
  return (
    <div className="py-4 px-4 md:px-8 border-b border-gray-200 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div>
        <a href="#" className="text-blue-500">›</a>
      </div>
    </div>
  );
};

export default ImprovementSection;
