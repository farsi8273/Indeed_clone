// bookmarkActions.js
import {
    BOOKMARK_JOB_REQUEST,
    BOOKMARK_JOB_SUCCESS,
    BOOKMARK_JOB_FAILURE,
    FETCH_BOOKMARKED_JOBS_REQUEST,
    FETCH_BOOKMARKED_JOBS_SUCCESS,
    FETCH_BOOKMARKED_JOBS_FAILURE,
  } from '../types';
  import { bookmarkJob, getBookmarkedJobs } from '../../services/api';
  
  // Bookmark Job Action
  export const bookmarkJobAction = (jobId) => async (dispatch) => {
    dispatch({ type: BOOKMARK_JOB_REQUEST });
    try {
      const data = await bookmarkJob(jobId);
      dispatch({ type: BOOKMARK_JOB_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: BOOKMARK_JOB_FAILURE, payload: error.message });
    }
  };
  
  // Fetch Bookmarked Jobs Action
  export const fetchBookmarkedJobs = () => async (dispatch) => {
    dispatch({ type: FETCH_BOOKMARKED_JOBS_REQUEST });
    try {
      const data = await getBookmarkedJobs();
      dispatch({ type: FETCH_BOOKMARKED_JOBS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_BOOKMARKED_JOBS_FAILURE, payload: error.message });
    }
  };
  