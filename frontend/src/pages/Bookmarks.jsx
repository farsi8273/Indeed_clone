// Bookmarks.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookmarkedJobs } from '../redux/actions/bookmarkActions';
import JobListing from '../components/JobList';

const Bookmarks = () => {
  const dispatch = useDispatch();
  const bookmarkedJobs = useSelector((state) => state.bookmarks.bookmarkedJobs);
  const loading = useSelector((state) => state.bookmarks.loading);
  const error = useSelector((state) => state.bookmarks.error);

  useEffect(() => {
    dispatch(fetchBookmarkedJobs());
  }, [dispatch]);

  return (
    <div className="bookmarks-container">
      <header className="bookmarks-header">
        <h1>Bookmarked Jobs</h1>
      </header>
      {loading && <p>Loading bookmarked jobs...</p>}
      {error && <p>Error loading bookmarked jobs: {error}</p>}
      <section className="bookmarks-list">
        {bookmarkedJobs.map((job) => (
          <JobListing key={job.id} job={job} />
        ))}
      </section>
    </div>
  );
};

export default Bookmarks;
