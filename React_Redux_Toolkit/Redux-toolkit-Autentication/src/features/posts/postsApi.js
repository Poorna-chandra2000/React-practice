import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080',
        prepareHeaders: (headers, { getState }) => {

             const token = getState().auth.accessToken;

            console.log("hello");
            console.log(token);
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        // getAllPosts: builder.query({
        //     query: () => 'post/getall',
        //     transformResponse: (response) => {
        //         // Validate and return the 'data' field or an empty array
        //         return response?.data || [];
        //     },
        // }),
    }),
});

export const { useGetAllPostsQuery } = postsApi;
