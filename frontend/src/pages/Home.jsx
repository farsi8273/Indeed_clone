// import React, { useState } from 'react';
// import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
// import JobList from '../components/JobList';
// import JobDetails from '../components/JobDetails';


// const Home = () => {
//   const [jobResults, setJobResults] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [jobSearchTerm, setJobSearchTerm] = useState('');
//   const [locationSearchTerm, setLocationSearchTerm] = useState('');

//   const handleJobSearchChange = (e) => {
//     setJobSearchTerm(e.target.value);
//   };

//   const handleLocationSearchChange = (e) => {
//     setLocationSearchTerm(e.target.value);
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();

    
//     // const response = await fetch(`https://indeed12.p.rapidapi.com/jobs/search?query=${jobSearchTerm}&location=${locationSearchTerm}&page_id=1&locality=us&fromage=1&radius=50&sort=date`, {
//       const response = await fetch(`https://indeed12.p.rapidapi.com/jobs/search?query=${jobSearchTerm}&location=${locationSearchTerm}&page_id=1&locality=us&fromage=1&radius=50&sort=date`, {
//         method: 'GET',
//         headers: {
//           'x-rapidapi-host': 'indeed12.p.rapidapi.com',
//           'x-rapidapi-key': '7706b2ee80mshefc3c4ae81c78f6p18d9eejsn8f7b91b6c308',
//         },
//       });

//     const data = await response.json();
//     if (Array.isArray(data)) {
//       setJobResults(data);
//     } else {
//       console.error("Expected an array but got:", data);
//       setJobResults([]);
//     }
//     setSelectedJob(null); // Reset selected job on new search
//   };

//   const handleSelectJob = (job) => {
//     setSelectedJob(job);
//   };

//   return (
//     <div>
//       <div className="flex-grow flex flex-col items-center py-16 px-4">
//         <div className="w-full max-w-4xl">
//           <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center w-full border border-black rounded-md overflow-hidden shadow-lg">
//             <div className="relative flex-grow w-full">
//               <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" />
//               <input
//                 type="text"
//                 value={jobSearchTerm}
//                 onChange={handleJobSearchChange}
//                 placeholder="Job title, keywords, or company"
//                 className="border-none w-full py-3 pl-10 pr-4"
//               />
//             </div>
//             <div className="relative flex-grow w-full mt-3 md:mt-0 md:ml-2">
//               <FaMapMarkerAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" />
//               <input
//                 type="text"
//                 value={locationSearchTerm}
//                 onChange={handleLocationSearchChange}
//                 placeholder="City, state, zip code, or 'remote'"
//                 className="border-none w-full py-3 pl-10 pr-4"
//               />
//             </div>
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 text-nowrap rounded-md w-full md:w-auto mt-3 md:mt-0 md:ml-2">
//               Find jobs
//             </button>
//           </form>
//         </div>

//         <div className="flex w-full mt-8">
//           <JobList jobs={jobResults} onSelectJob={handleSelectJob} />
//           <JobDetails job={selectedJob} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import JobList from '../components/JobList';
import JobDetails from '../components/JobDetails';
import Header from '../components/Header';

const Home = () => {
  const [jobResults, setJobResults] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobSearchTerm, setJobSearchTerm] = useState('');
  const [locationSearchTerm, setLocationSearchTerm] = useState('');
  const [error, setError] = useState(null);

  const handleJobSearchChange = (e) => {
    setJobSearchTerm(e.target.value);
  };

  const handleLocationSearchChange = (e) => {
    setLocationSearchTerm(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state

    try {
      const response = await fetch(`https://indeed12.p.rapidapi.com/jobs/search?query=${jobSearchTerm}&location=${locationSearchTerm}&page_id=1&locality=us&fromage=1&radius=50&sort=date`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'indeed12.p.rapidapi.com',
          'x-rapidapi-key': '7706b2ee80mshefc3c4ae81c78f6p18d9eejsn8f7b91b6c308',
        },
      });

      if (response.status === 429) {
        setError('You have exceeded the monthly quota for requests on your current plan. Please upgrade your plan.');
        setJobResults([]);
        return;
      }

      const data = await response.json();
      console.log('Fetched data:', data);

      if (data && data.results && Array.isArray(data.results)) {
        setJobResults(data.results);
      } else {
        console.error("Expected an array but got:", data);
        setJobResults([]);
      }
    } catch (error) {
      console.error('Error fetching job results:', error);
      setError('An error occurred while fetching job results. Please try again later.');
      setJobResults([]);
    }

    setSelectedJob(null); // Reset selected job on new search
  };

  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex flex-col items-center py-16 px-4">
        <div className="w-full max-w-4xl">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center w-full border border-black rounded-md overflow-hidden shadow-lg">
            <div className="relative flex-grow w-full">
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" />
              <input
                type="text"
                value={jobSearchTerm}
                onChange={handleJobSearchChange}
                placeholder="Job title, keywords, or company"
                className="border-none w-full py-3 pl-10 pr-4"
              />
            </div>
            <div className="relative flex-grow w-full mt-3 md:mt-0 md:ml-2">
              <FaMapMarkerAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" />
              <input
                type="text"
                value={locationSearchTerm}
                onChange={handleLocationSearchChange}
                placeholder="City, state, zip code, or 'remote'"
                className="border-none w-full py-3 pl-10 pr-4"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 text-nowrap rounded-md w-full md:w-auto mt-3 md:mt-0 md:ml-2">
              Find jobs
            </button>
          </form>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <div className="flex w-full mt-8">
          <JobList jobs={jobResults} onSelectJob={handleSelectJob} />
          <JobDetails job={selectedJob} />
        </div>
      </div>
    </div>
  );
};

export default Home;
