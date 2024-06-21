import React from 'react';

const JobList = ({ jobs, onSelectJob }) => {
  if (!Array.isArray(jobs)) {
    return null;
  }

  return (
    <div className="w-full md:w-2/5 p-4 border-r border-gray-200">
      {jobs.map((job, index) => (
        <div key={index} className="border p-4 mb-4 rounded shadow-md bg-white" onClick={() => onSelectJob(job)}>
          <div className="flex items-center">
            {job.company_logo_url !== 'No Logo' && (
              <img src={job.company_logo_url} alt={job.company_name} className="w-16 h-16 mr-4" />
            )}
            <div>
              <h2 className="text-xl font-bold">{job.job_title}</h2>
              <p className="text-gray-600">{job.company_name}</p>
              <p className="text-gray-600">{job.job_location}</p>
              <p className="text-gray-600">{job.salary}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
