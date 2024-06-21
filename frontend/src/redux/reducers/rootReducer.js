// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import jobReducer from './jobReducer';
import bookmarkReducer from './bookmarkReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  jobs: jobReducer,
  bookmarks: bookmarkReducer,
});

export default rootReducer;
