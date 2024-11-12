import React from 'react'
import {Route, Routes} from "react-router-dom";
import ProductDetailPage from "./ProductDetailPage.jsx";
import Posts from "./Posts.jsx";
import AddDetails from "./AddDetails.jsx";
import FetchOnClick from "./FetchOnClick.jsx";

const NavRouter = () => {
    return (

            <Routes>
                <Route path="/" element={<Posts />}/>
                <Route path="/productDetails/:id" element={<ProductDetailPage />}/>
                <Route path="/OnClickFetch" element={<FetchOnClick />}/>
                <Route path="/MutationForPost" element={<AddDetails/>}/>
                <Route path="/InfiniteLoadingOnClick" element={<ProductDetailPage />}/>
                <Route path="/InfiniteLoadingOnClick" element={<ProductDetailPage />}/>
            </Routes>

        //make sure to add Navrouter in app.jsx

    )
}
export default NavRouter
