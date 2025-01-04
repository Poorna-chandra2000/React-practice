// src/components/ProductList.js
import React, { useState } from 'react';
import { useGetAllProductsQuery, useSearchProductsQuery } from '../features/api/productApiSlice';
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../features/addToCartSlice/cardSlice.jsx";

const ProductList = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [pagination, setPagination] = useState({
        pageNumber: 0,
        pageSize: 2,
        sortBy: 'productId',
        sortOrder: 'asc',
    });

    const { data: allProducts, isLoading: isLoadingAll } = useGetAllProductsQuery(pagination);
    const { data: searchResults, isLoading: isLoadingSearch } = useSearchProductsQuery(
        searchKeyword
            ? { keyword: searchKeyword, ...pagination }
            : null // Skip if no keyword
    );

    const handleSearchChange = (e) => setSearchKeyword(e.target.value);

    const currentData = searchKeyword ? searchResults : allProducts;


    //now lets do add to card functionality
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        const productWithQuantity = { ...product, quantity: 1 };
        dispatch(addToCart(productWithQuantity));
    }

    const selectedCards=useSelector((state) => state.cards.selectedCards);
    console.log(selectedCards);
    console.log(selectedCards.length);


    return (
        <div className="bg">
            <h1 className="text-2xl font-bold text-center">Product List</h1>

            {/* Search Input */}
            <div className="my-4 p-1 flex items-start gap-3 justify-center">
                <h2 className="text-xl font-bold text-blue-800">search</h2>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchKeyword}
                    onChange={handleSearchChange}
                    className=" w-1/2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
                />
            </div>

            {/* Loading State */}
            {(isLoadingAll || isLoadingSearch) && <p>Loading...</p>}

            {/* Display Products */}
            <ul className="flex items-center justify-center gap-2">
                {currentData?.products?.map((product) => (
                    <li key={product.productId} className="border-8 w-[13em] rounded-lg h-[19em] flex flex-col gap-3 items-center border-double border-amber-300 bg-slate-50 p-[0.2em]">

                        <strong className="uppercase">{product.productName} </strong><span className="text-sm text-center">{product.description}</span>
                        <div className="h-full w-full flex flex-col justify-evenly">
                            <img src={product.image} alt={product.productName} className="w-full h-[7em] " />
                            <span className="self">Price: ${product.specialPrice.toFixed(2)}</span>
                        </div>

                        <button className="bg-amber-500 mb-2 shadow-black drop-shadow-lg w-fit self-center p-2 rounded-md font-mono font-bold text-amber-100 justify-self-end"
                                onClick={()=>handleAddToCart(product)}

                        >
                            AddToCart
                        </button>
                    </li>
                ))}
            </ul>

            {/* Pagination Controls */}
            <div className="mt-4 flex justify-between">
                <button
                    disabled={pagination.pageNumber === 0}
                    onClick={() =>
                        setPagination((prev) => ({
                            ...prev,
                            pageNumber: Math.max(0, prev.pageNumber - 1),
                        }))
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    disabled={currentData?.pagination?.isLastPage}
                    onClick={() =>
                        setPagination((prev) => ({
                            ...prev,
                            pageNumber: prev.pageNumber + 1,
                        }))
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductList;
