// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './pageSlice';
import userReducer from './usersSlice';

const store = configureStore({
  reducer: {
    page: pageReducer,
    user: userReducer,
  },
});

export default store;
