import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';
import credentialsReducer from './slices/credentialsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
    credentials: credentialsReducer
  },
});

export default store;
