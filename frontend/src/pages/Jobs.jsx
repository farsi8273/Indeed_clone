// Jobs.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../redux/actions/jobActions';
import JobListing from '../components/JobList';
import SearchBar from '../components/SearchBar';

const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const loading = useSelector((state) => state.jobs.loading);
  const error = useSelector((state) => state.jobs.error);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="jobs-container">
      <header className="jobs-header">
        <h1>Job Listings</h1>
        <SearchBar />
      </header>
      {loading && <p>Loading jobs...</p>}
      {error && <p>Error loading jobs: {error}</p>}
      <section className="jobs-list">
        {jobs.map((job) => (
          <JobListing key={job.id} job={job} />
        ))}
      </section>
    </div>
  );
};

export default Jobs;
