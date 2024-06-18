import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
};

const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    resetCredentials: (state) => {
      state.firstName = '';
      state.lastName = '';
    },
  },
});

export const { setFirstName, setLastName, resetCredentials } = credentialsSlice.actions;

export default credentialsSlice.reducer;
