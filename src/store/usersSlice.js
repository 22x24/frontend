// src/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Dummy Data
const dummyUsers = [
  { id: 1, name: 'John Doe', maxBandwidth: '100 Mbps', bandwidthLimit: '50 Mbps', isOnline: true, history: [
      { time: '00:00', value: 10 },
      { time: '01:00', value: 7.5 },
      { time: '02:00', value: 5 },
      { time: '03:00', value: 2.5 },
      { time: '04:00', value: 1 },
  ]},
  { id: 2, name: 'Jane Smith', maxBandwidth: '200 Mbps', bandwidthLimit: '100 Mbps', isOnline: false, history: [
      { time: '00:00', value: 12 },
      { time: '01:00', value: 8 },
      { time: '02:00', value: 4 },
  ]},
  { id: 3, name: 'Alice Johnson', maxBandwidth: '150 Mbps', bandwidthLimit: '75 Mbps', isOnline: true, history: [
      { time: '00:00', value: 6 },
      { time: '01:00', value: 4 },
      { time: '02:00', value: 3 },
  ]}
];

// Global Server Information (dummy)
const dummyServerInfo = {
  totalClients: 3,
  onlineClients: 2,
  serverMaxOffer: '500 Mbps'
};

// Initial state
const initialState = {
  users: [],
  serverInfo: {},
  useDummyData: true, // Flag for using dummy data
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Set user data manually (real data could be dispatched)
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    // Set server information manually (real data could be dispatched)
    setServerInfo: (state, action) => {
      state.serverInfo = action.payload;
    },
    // Initialize data based on the dummy flag
    initializeUsersAndServer: (state) => {
      if (state.useDummyData) {
        state.users = dummyUsers;
        state.serverInfo = dummyServerInfo;
      } else {
        state.users = [];
        state.serverInfo = {};
      }
    },
    // Update a specific user's bandwidth limit
    updateUserBandwidthLimit: (state, action) => {
      const { id, newBandwidthLimit } = action.payload;
      const user = state.users.find((user) => user.id === id);
      if (user) {
        user.bandwidthLimit = newBandwidthLimit;
      }
    },
    // Add a new history data point for a user
    addUserHistory: (state, action) => {
      const { id, newHistoryPoint } = action.payload; // { time, value }
      const user = state.users.find((user) => user.id === id);
      if (user) {
        user.history.push(newHistoryPoint);
      }
    },
  },
});

// Export the actions
export const { setUsers, setServerInfo, initializeUsersAndServer, updateUserBandwidthLimit, addUserHistory } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
