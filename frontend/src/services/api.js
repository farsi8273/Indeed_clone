// api.js
import axios from 'axios';

const API_BASE_URL = 'hhttps://backend-green-six-92.vercel.app'; // Replace with your API base URL

// Function to get all jobs
export const getJobs = async (queryParams = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs`, { params: queryParams });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Function to get job details by ID
export const getJobDetails = async (jobId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs/${jobId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching job details:', error);
    throw error;
  }
};

// Function to apply for a job
export const applyForJob = async (jobId, applicationData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/jobs/${jobId}/apply`, applicationData);
    return response.data;
  } catch (error) {
    console.error('Error applying for job:', error);
    throw error;
  }
};

// Function to bookmark a job
export const bookmarkJob = async (jobId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/jobs/${jobId}/bookmark`);
    return response.data;
  } catch (error) {
    console.error('Error bookmarking job:', error);
    throw error;
  }
};

// Function to get bookmarked jobs
export const getBookmarkedJobs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs/bookmarked`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bookmarked jobs:', error);
    throw error;
  }
};
