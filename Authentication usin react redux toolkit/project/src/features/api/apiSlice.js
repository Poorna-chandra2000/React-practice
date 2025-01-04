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