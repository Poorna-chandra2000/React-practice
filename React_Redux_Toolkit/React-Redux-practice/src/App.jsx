import React from 'react';
import './App.css';
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import CartPage from "./components/CartPage.jsx";

function App() {

  return (
    <div className="w-full  bg-gradient-to-br bg-sky-100 flex flex-col justify-center items-center overflow-x-hidden ">
        <Cart/>
        <ProductList />
        <CartPage/>
    </div>
  );
}

export default App;
