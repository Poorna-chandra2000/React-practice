import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../features/auth/authApi';
import { postsApi } from '../features/posts/postsApi';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, postsApi.middleware),
});
