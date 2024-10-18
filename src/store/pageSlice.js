// src/store/pageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    activePage: 'Users',
    currentUserId: null,
  },
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
    setCurrentUserId: (state, action) => {
      state.currentUserId = action.payload;
    },
  },
});

export const { setActivePage, setCurrentUserId } = pageSlice.actions;

export default pageSlice.reducer;
