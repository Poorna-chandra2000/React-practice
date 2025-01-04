import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080',
  credentials: 'include', // Important: This enables sending cookies with requests
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
        credentials: 'include',
      }),
    }),
    getAllPosts: builder.query({
      query: () => ({
        url: '/post/getall',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useLoginMutation, useGetAllPostsQuery } = apiSlice;