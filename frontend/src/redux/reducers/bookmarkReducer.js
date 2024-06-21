// bookmarkReducer.js
import { BOOKMARK_JOB_REQUEST, BOOKMARK_JOB_SUCCESS, BOOKMARK_JOB_FAILURE, FETCH_BOOKMARKED_JOBS_REQUEST, FETCH_BOOKMARKED_JOBS_SUCCESS, FETCH_BOOKMARKED_JOBS_FAILURE } from '../types';

const initialState = {
  bookmarkedJobs: [],
  loading: false,
  error: null,
};

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKMARK_JOB_REQUEST:
    case FETCH_BOOKMARKED_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case BOOKMARK_JOB_SUCCESS:
      return {
        ...state,
        bookmarkedJobs: [...state.bookmarkedJobs, action.payload],
        loading: false,
        error: null,
      };
    case FETCH_BOOKMARKED_JOBS_SUCCESS:
      return {
        ...state,
        bookmarkedJobs: action.payload,
        loading: false,
        error: null,
      };
    case BOOKMARK_JOB_FAILURE:
    case FETCH_BOOKMARKED_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
