import React from 'react';

const ResumeSection = () => {
  return (
    <div className="py-8 px-4 md:px-8">
      <h2 className="text-xl font-bold">Resume</h2>
      <div className="mt-4 flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Upload Resume</button>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">Build an Indeed Resume</button>
      </div>
      <p className="text-gray-600 mt-2">By continuing, you agree to receive job opportunities from Indeed.</p>
    </div>
  );
};

export default ResumeSection;
