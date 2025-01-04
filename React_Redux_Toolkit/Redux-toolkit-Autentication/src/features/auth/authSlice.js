import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        accessToken: null,
        refreshToken: null, // Added refreshToken field
    },
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken; // Update state with refreshToken
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null; // Clear refreshToken on logout
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
