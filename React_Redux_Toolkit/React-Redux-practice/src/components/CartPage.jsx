import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {increaseQuantity, decreaseQuantity, removeFromCart} from "../features/addToCartSlice/cardSlice.jsx"
const CartPage = () => {
    const cartItems=useSelector((state) => state.cards.selectedCards);
    console.log("cartpage");
    console.log(cartItems);

const dispatch = useDispatch();
    const totalPrice = cartItems.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
    return (
        <>
            <div className="text-xl font-bold font-sans p-4 text-violet-900">Cart Page</div>
            <div className="flex w-screen justify-around p-2">


           <div className="flex flex-col gap-3 w-1/2">
            {

                cartItems.length > 0 ?cartItems.map((product) =>(
                    <div key={product.productId}
                         className="flex bg-slate-50 p-2 gap-1 justify-between rounded-md drop-shadow-lg relative">
                        <div className="absolute right-0 top-[-0.8em] cursor-pointer bg-violet-900 bg-opacity-5 rounded-md drop-shadow-lg backdrop-blur-lg hover:scale-150" title="remove item from cart"
                        onClick={()=>dispatch(removeFromCart(product.productId))}>✖️</div>

                        <div className="flex items-center gap-2">
                            <img alt="no image" src={product.image}
                                 className="w-[3em] h-[3em] object-cover bg-sky-800 rounded-sm"/>
                            <h1 className="font-bold text-teal-800">{product.productName}</h1>
                        </div>

                        <div>
                            <h2>Price</h2>
                            <h3>${product.price * product.quantity}</h3>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <p>Quantity</p>
                            <div className="bg-violet-50 flex justify-center items-center gap-0.5">
                                <button className=" bg-amber-500 w-6 rounded-md h-fit text-xl grid place-content-center"
                                        onClick={() => dispatch(increaseQuantity(product.productId))}>+
                                </button>

                                <h2>{product.quantity}</h2>

                                <button
                                    className="flex items-center justify-center bg-amber-500 w-6 rounded-md h-[fit] text-xl"
                                    onClick={() => dispatch(decreaseQuantity(product.productId))}
                                >-
                                </button>
                            </div>
                        </div>

                    </div>

                )) : <h1>Cart is empty</h1>
            }

           </div>

                <div className="flex flex-col w-1/3 bg-white h-fit p-2 rounded-md drop-shadow-2xl">
                <h2 className="text-3xl font-bold p-1 text-violet-900">Order Details</h2>

                    <table className="text-start border-double border-slate-300 border-2">
                            <tr className="bg-sky-100 border-solid border-black border-2">
                                <th className="bg-sky-100 border-solid border-black border-2 text-start">product</th>
                                <th className="bg-sky-100 border-solid border-black border-2 text-start">price</th>
                            </tr>
                            {  cartItems.map((product) =>(

                               <tr key={product.productId}>
                                   <td>{product.productName}</td>
                                   <td className="pl-1">${product.price*product.quantity}</td>
                               </tr>
                            ))
                            }
                            <tr className="bg-violet-50 border-t-4">
                                <th>Total</th>
                                <td className="text-violet-900 font-bold pl-1">${totalPrice}</td>
                            </tr>
                        </table>

                </div>

            </div>
        </>

    )
}
export default CartPage
