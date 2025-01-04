import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        credentials: 'include', //for storing cookies important
        method: 'POST',
        body: credentials,
      }),
    }),
    getAllPosts: builder.query({
      query: () => '/post/getall',
      providesTags: ['Posts'],
    }),
    createPost: builder.mutation({
      query: (post) => ({
        url: '/post/createpost',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetAllPostsQuery,
  useCreatePostMutation
} = apiSlice;

//-------------------------------------------------------------------------------------------------------------------------------
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { isTokenExpired } from './authUtils'; // Assuming you have a utility to check if the token is expired
// import { setCredentials, logout } from './authSlice'; // Redux actions for setting credentials and logging out
//
// const baseQuery = fetchBaseQuery({
//   baseUrl: 'http://localhost:8080',
//   prepareHeaders: async (headers, { getState, dispatch }) => {
//     let token = getState().auth.token;
//     const refreshToken = getState().auth.refreshToken; // Assuming you store refreshToken in Redux too
//
//     // Check if the token has expired
//     if (isTokenExpired(token)) {
//       if (refreshToken) {
//         try {
//           // Make a request to refresh the access token using the refresh token
//           const response = await fetch('http://localhost:8080/refresh', {
//             method: 'POST',
//             credentials: 'include', // Send cookies with the request
//           });
//
//           if (response.ok) {
//             const data = await response.json();
//             const { accessToken, refreshToken: newRefreshToken } = data;
//
//             // Update the tokens in the Redux store
//             dispatch(setCredentials({ data: { accessToken, refreshToken: newRefreshToken } }));
//
//             // Use the new accessToken for this request
//             token = accessToken;
//           } else {
//             console.error('Failed to refresh token:', response.statusText);
//             dispatch(logout());
//             return headers; // Return headers without authorization if refresh fails
//           }
//         } catch (error) {
//           console.error('Error refreshing token:', error);
//           dispatch(logout());
//           return headers; // Return headers without authorization if refresh fails
//         }
//       } else {
//         // No refresh token available, log the user out
//         dispatch(logout());
//         return headers; // Return headers without authorization if no refresh token
//       }
//     }
//
//     // If token is valid, include it in the request headers
//     if (token) {
//       headers.set('Authorization', `Bearer ${token}`);
//     }
//
//     return headers;
//   },
// });
//
// export const apiSlice = createApi({
//   baseQuery,
//   tagTypes: ['Posts'],
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: '/auth/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     getAllPosts: builder.query({
//       query: () => '/post/getall',
//       providesTags: ['Posts'],
//     }),
//     createPost: builder.mutation({
//       query: (post) => ({
//         url: '/post/createpost',
//         method: 'POST',
//         body: post,
//       }),
//       invalidatesTags: ['Posts'],
//     }),
//   }),
// });
//
// export const {
//   useLoginMutation,
//   useGetAllPostsQuery,
//   useCreatePostMutation
// } = apiSlice;


// //for using local storage//////////////////////////////////////////////////////////////////////////////////
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//
//
// import {isTokenExpired} from "../../utils/authUtils.js";
// import {logout, setCredentials} from "../auth/authSlice.js";
//
//
// const baseQuery = fetchBaseQuery({
//   baseUrl: 'http://localhost:8080',
//   prepareHeaders: async (headers, { getState, dispatch }) => {
//     let token = getState().auth.token || localStorage.getItem('accessToken');//just this line
//
//     if (isTokenExpired(token)) {
//       try {
//         const response = await fetch('http://localhost:8080/refresh', {
//           method: 'POST',
//           credentials: 'include',
//         });
//
//         if (response.ok) {
//           const data = await response.json();
//           const { accessToken, refreshToken: newRefreshToken } = data;
//
//           dispatch(setCredentials({ data: { accessToken, refreshToken: newRefreshToken } }));
//
//           // Use the new access token
//           token = accessToken;
//         } else {
//           console.error('Failed to refresh token:', response.statusText);
//           dispatch(logout());
//           return headers;
//         }
//       } catch (error) {
//         console.error('Error refreshing token:', error);
//         dispatch(logout());
//         return headers;
//       }
//     }
//
//     if (token) {
//       headers.set('Authorization', `Bearer ${token}`);
//     }
//
//     return headers;
//   },
// });
//
// export const apiSlice = createApi({
//   baseQuery,
//   tagTypes: ['Posts'],
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: '/auth/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     getAllPosts: builder.query({
//       query: () => '/post/getall',
//       providesTags: ['Posts'],
//     }),
//     createPost: builder.mutation({
//       query: (post) => ({
//         url: '/post/createpost',
//         method: 'POST',
//         body: post,
//       }),
//       invalidatesTags: ['Posts'],
//     }),
//   }),
// });
//
// export const {
//   useLoginMutation,
//   useGetAllPostsQuery,
//   useCreatePostMutation
// } = apiSlice;

//----------------------------------------------------------------------------------------------------------------------
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import axios from 'axios';
// import { isTokenExpired } from "../../utils/authUtils.js";
// import { logout, setCredentials } from "../auth/authSlice.js";
//
// const baseQuery = fetchBaseQuery({
//   baseUrl: 'http://localhost:8080',
//   prepareHeaders: async (headers, { getState, dispatch }) => {
//     let token = getState().auth.token || localStorage.getItem('accessToken');
//
//     if (isTokenExpired(token)) {
//       try {
//         const response = await axios.post('http://localhost:8080/auth/refresh', {}, {
//           withCredentials: true,
//         });
//
//         if (response.status === 200) {
//           const { accessToken, refreshToken: newRefreshToken } = response.data;
//
//           dispatch(setCredentials({ data: { accessToken, refreshToken: newRefreshToken } }));
//
//           // Use the new access token
//           token = accessToken;
//         } else {
//           console.error('Failed to refresh token:', response.statusText);
//           dispatch(logout());
//           return headers;
//         }
//       } catch (error) {
//         if (error.response) {
//           console.error('Error refreshing token:', error.response.data || error.response.statusText);
//         } else {
//           console.error('Error refreshing token:', error.message);
//         }
//         dispatch(logout());
//         return headers;
//       }
//     }
//
//     if (token) {
//       headers.set('Authorization', `Bearer ${token}`);
//     }
//
//     return headers;
//   },
// });
//
// export const apiSlice = createApi({
//   baseQuery,
//   tagTypes: ['Posts'],
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: '/auth/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     getAllPosts: builder.query({
//       query: () => '/post/getall',
//       providesTags: ['Posts'],
//     }),
//     createPost: builder.mutation({
//       query: (post) => ({
//         url: '/post/createpost',
//         method: 'POST',
//         body: post,
//       }),
//       invalidatesTags: ['Posts'],
//     }),
//   }),
// });
//
// export const {
//   useLoginMutation,
//   useGetAllPostsQuery,
//   useCreatePostMutation,
// } = apiSlice;
