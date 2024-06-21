import React from 'react';

const ProfileHeader = ({ name, email }) => {
  return (
    <div className="flex justify-between items-center py-8 px-4 md:px-8">
      <div>
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-gray-600 mt-2">{email}</p>
        <div className="mt-4">
          <a href="#" className="text-blue-500 mr-4">Add phone number</a>
          <a href="#" className="text-blue-500">Add location</a>
        </div>
      </div>
      <div>
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-2xl text-gray-700">👤</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
