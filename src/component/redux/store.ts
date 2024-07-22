import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from './scoreSlice';
import userReducer from './userSlice';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  score: scoreReducer,
  user: userReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
