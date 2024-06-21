import React from 'react';

const JobDetails = ({ job }) => {
  if (!job) {
    return (
      <div className="w-full md:w-3/5 p-4">
        <p className="text-gray-600">Select a job to view details</p>
      </div>
    );
  }

  return (
    <div className="w-full md:w-3/5 p-4">
      <div className="border p-4 rounded shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-2">{job.job_title}</h2>
        <p className="text-gray-600">{job.company_name}</p>
        <p className="text-gray-600">{job.job_location}</p>
        <p className="text-gray-600">{job.salary}</p>
        <a href={job.job_url} className="text-blue-500 hover:underline">Apply now</a>

        <div className="mt-4">
          <h3 className="text-lg font-bold">Benefits</h3>
          <p className="text-gray-600">Flexible schedule</p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-bold">Full job description</h3>
          <p className="text-gray-600">{job.description}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
