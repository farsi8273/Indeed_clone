// jobReducer.js
import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE, FETCH_JOB_DETAILS_REQUEST, FETCH_JOB_DETAILS_SUCCESS, FETCH_JOB_DETAILS_FAILURE } from '../types';

const initialState = {
  jobs: [],
  jobDetails: null,
  loading: false,
  error: null,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
    case FETCH_JOB_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_JOB_DETAILS_SUCCESS:
      return {
        ...state,
        jobDetails: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_JOBS_FAILURE:
    case FETCH_JOB_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
