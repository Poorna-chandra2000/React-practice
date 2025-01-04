import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
    user: null,
    token: null,
    token2: null,
    isAuthenticated: false,
    refreshError: null,
};

// Async thunk for refreshing the token
export const refreshAuthToken = createAsyncThunk(
    'auth/refresh',
    async (_, { getState, rejectWithValue }) => {
        const state = getState();
        const refreshToken = state.auth.token2;
        console.log('refreshToken', refreshToken);

        if (!refreshToken) {
            return rejectWithValue('Refresh token is missing');
        }

        try {
            const response = await axios.post(
                'http://localhost:8080/auth/refresh',
                {}, // No body needed; token extracted from cookies
                {
                    withCredentials: true, // Ensure cookies are sent
                }
            );

            const { accessToken } = response.data.data;//response.data is the object of axios and the last data is my application object
            console.log('Primary Access Token', accessToken);
            if (accessToken) {
                return { accessToken };
            } else {
                return rejectWithValue('Access token not found in response');
            }
        } catch (error) {
            return rejectWithValue(error.message || 'Failed to refresh token');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken, refreshToken } = action.payload.data;
            state.token = accessToken;
            state.token2 = refreshToken;
            // Store tokens
          //  Cookies.set('refreshToken', refreshToken, { secure: true, httpOnly: false, sameSite: 'strict' });
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.token2 = null;
            state.isAuthenticated = false;
           // Cookies.remove('refreshToken'); // Clear the cookie on logout
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(refreshAuthToken.fulfilled, (state, action) => {
                const { accessToken } = action.payload;
                state.token = accessToken; // Corrected state update
                console.log('acsessToken', accessToken);
                console.log('Successfully Refreshed');
                state.refreshError = null; // Corrected state update
                console.log('Token refreshed successfully');
            })
            .addCase(refreshAuthToken.rejected, (state, action) => {
                state.refreshError = action.payload || 'Failed to refresh token'; // Corrected state update
                console.error('Token refresh error:', state.refreshError);
            });
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

// Selectors
export const selectCurrentToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectRefreshError = (state) => state.auth.refreshError;



























//for using local storage with refrehs token make few changes//////////////////////////////////////////////////////////
// import { createSlice } from '@reduxjs/toolkit';
//
// const initialState = {
//   token: localStorage.getItem('accessToken') || null,
//   refreshToken: localStorage.getItem('refreshToken') || null,
// };
//
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       const { accessToken, refreshToken } = action.payload.data;
//       state.token = accessToken;
//       state.refreshToken = refreshToken;
//
//       // Save tokens to local storage
//       localStorage.setItem('accessToken', accessToken);
//       localStorage.setItem('refreshToken', refreshToken);
//     },
//     logout: (state) => {
//       state.token = null;
//       state.refreshToken = null;
//
//       // Clear tokens from local storage
//       localStorage.removeItem('accessToken');
//       localStorage.removeItem('refreshToken');
//     },
//   },
// });
//
// export const { setCredentials, logout } = authSlice.actions;
// export default authSlice.reducer;
//
//  export const selectCurrentToken = (state) => state.auth.token;
//  export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;