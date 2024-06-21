
// import React from 'react';

// // SearchBar component for displaying a search bar
// const SearchBar = () => {
//   return (
//     // Search bar container with background color, text color, padding, and flex layout
//     <div className="px-4 md:px-10 bg-blue-900 text-white py-4 md:py-6 flex flex-col md:flex-row items-center">
//       {/* Title */}
//       <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0 md:mr-4">Find a career you'll love</h1>
//       {/* Description */}
//       <p className="text-sm md:text-base mb-4 md:mb-0 md:ml-4">Explore which careers have the highest job satisfaction, best salaries and more</p>

//       {/* Search input fields and button */}
//       <div className="flex mt-4 md:mt-0 w-full md:w-auto">
//         {/* Input field for job search */}
//         <input type="text" placeholder="Job title, skills, benefits, certifications, any keywords" className="p-2 rounded-l-lg md:rounded-l-none md:rounded-l-lg border border-gray-300 flex-grow" />
//         {/* Input field for location */}
//         <input type="text" placeholder="India" className="p-2 rounded-r-lg md:rounded-r-none md:rounded-r-lg border border-gray-300 flex-grow" />
//         {/* Search button */}
//         <button className="bg-blue-600 p-2 rounded-l-lg md:rounded-l-none md:rounded-r-lg rounded-r-lg text-white">Search</button>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;




// import React from 'react';

// // SearchBar component for displaying a search bar
// const SearchBar = () => {
//   return (
//     // Search bar container with background color, text color, padding, and flex layout
//     <div className="px-4 md:px-10 bg-blue-900 text-white py-4 md:py-6 flex flex-col">
//       {/* Title */}
//       <h1 className="text-2xl md:text-3xl font-bold mb-2">Find a career you'll love</h1>
//       {/* Description */}
//       <p className="text-sm md:text-base mb-4">Explore which careers have the highest job satisfaction, best salaries and more</p>

//       {/* Search input fields and button */}
//       <div className="flex flex-col md:flex-row w-full md:w-auto">
//         {/* Input field for job search */}
//         <input type="text" placeholder="Job title, skills, benefits, certifications, any keywords" className="p-5 rounded-t-lg md:rounded-l-lg md:rounded-t-none border border-gray-300 flex-grow mb-2 md:mb-0" />
//         {/* Input field for location */}
//         <input type="text" placeholder="India" className="p-2 md:rounded-r-lg border border-gray-300 flex-grow mb-2 md:mb-0" />
//         {/* Search button */}
//         <button className="bg-blue-600 p-2 rounded-b-lg md:rounded-r-lg text-white">Search</button>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;



import React from 'react';

// SearchBar component for displaying a search bar
const SearchBar = () => {
  return (
    // Search bar container with background color, text color, padding, and flex layout
    <div className="px-4 md:px-10 bg-blue-900 text-white py-4 md:py-6 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Find a career you'll love</h1>
      {/* Description */}
      <p className="text-sm md:text-base mb-4 text-center">Explore which careers have the highest job satisfaction, best salaries and more</p>

      {/* Search input fields and button */}
      <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-1/2 items-center">
        {/* Input field for job search */}
        <input type="text" placeholder="Job title, skills, benefits, certifications, any keywords" className="p-2  items-center  rounded-t-lg md:rounded-l-lg md:rounded-t-none border border-gray-300 flex-grow mb-2 md:mb-0 md:mr-2" />
        {/* Input field for location */}
        <input type="text" placeholder="India" className="p-2 md:rounded-r-lg border border-gray-300 flex-grow   items-center mb-2 md:mb-0 md:mr-2" />
        {/* Search button */}
        <button className="bg-blue-600 p-2 rounded-b-lg md:rounded-r-lg text-white w-full md:w-auto">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
