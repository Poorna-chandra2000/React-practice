// src/features/api/productApiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApiSlice = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/public' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ({ pageNumber = 0, pageSize = 10, sortBy = 'productId', sortOrder = 'asc' }) =>
                `productResponse/getAllProducts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
            transformResponse: (response) => ({
                products: response.content,
                pagination: {
                    pageNumber: response.pageNumber,
                    pageSize: response.pageSize,
                    totalElements: response.totalElements,
                    totalPages: response.totalPages,
                    isLastPage: response.lastpage,
                },
            }),
        }),
        searchProducts: builder.query({
            query: ({ keyword, pageNumber = 0, pageSize = 10, sortBy = 'productId', sortOrder = 'asc' }) =>
                `searchProduct/${keyword}?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
            transformResponse: (response) => ({
                products: response.content,
                pagination: {
                    pageNumber: response.pageNumber,
                    pageSize: response.pageSize,
                    totalElements: response.totalElements,
                    totalPages: response.totalPages,
                    isLastPage: response.lastpage,
                },
            }),
        }),
    }),
});

export const { useGetAllProductsQuery, useSearchProductsQuery } = productApiSlice;//this works in serial so name it in serially
