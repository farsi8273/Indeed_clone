// jobActions.js
import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE,
    FETCH_JOB_DETAILS_REQUEST,
    FETCH_JOB_DETAILS_SUCCESS,
    FETCH_JOB_DETAILS_FAILURE,
    APPLY_FOR_JOB_REQUEST,
    APPLY_FOR_JOB_SUCCESS,
    APPLY_FOR_JOB_FAILURE,
  } from '../types';
  import { getJobs, getJobDetails, applyForJob } from '../../services/api';
  
  // Fetch Jobs Action
  export const fetchJobs = (queryParams) => async (dispatch) => {
    dispatch({ type: FETCH_JOBS_REQUEST });
    try {
      const data = await getJobs(queryParams);
      dispatch({ type: FETCH_JOBS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_JOBS_FAILURE, payload: error.message });
    }
  };
  
  // Fetch Job Details Action
  export const fetchJobDetails = (jobId) => async (dispatch) => {
    dispatch({ type: FETCH_JOB_DETAILS_REQUEST });
    try {
      const data = await getJobDetails(jobId);
      dispatch({ type: FETCH_JOB_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_JOB_DETAILS_FAILURE, payload: error.message });
    }
  };
  
  // Apply for Job Action
  export const applyForJobAction = (jobId, applicationData) => async (dispatch) => {
    dispatch({ type: APPLY_FOR_JOB_REQUEST });
    try {
      const data = await applyForJob(jobId, applicationData);
      dispatch({ type: APPLY_FOR_JOB_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: APPLY_FOR_JOB_FAILURE, payload: error.message });
    }
  };
  