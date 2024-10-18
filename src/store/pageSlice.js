// src/store/pageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    activePage: 'Users',
  },
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = pageSlice.actions;

export default pageSlice.reducer;
