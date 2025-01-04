import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload.data;
      state.token = accessToken;
      localStorage.setItem('token', accessToken);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;