// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { productApiSlice } from '../features/api/productApiSlice';
import cardReducer from "../features/addToCartSlice/cardSlice.jsx";


export const store = configureStore({
    reducer: {
        [productApiSlice.reducerPath]: productApiSlice.reducer,
        cards: cardReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApiSlice.middleware),
});
