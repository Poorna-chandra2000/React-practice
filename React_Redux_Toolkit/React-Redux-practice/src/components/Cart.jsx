import React from 'react'
import {useSelector} from "react-redux";

const Cart = () => {

    const cartItems=useSelector((state) => state.cards.selectedCards);

    return (
        <div className="absolute right-4 top-5 w-fit h-fit bg-sky-800 rounded-lg">
            <div className="text-white relative p-1 font-mono font-bold flex items-center">
                <h3>Cart</h3>
                <spam className="text-[1.6em] rounded-full shadow-white shadow-sm">🛒</spam>
            </div>
            <div className=
                     {`${cartItems.length>0?"block":"hidden"}
                      rounded-lg w-[1.3em] h-[1.2em] 
                       bg-sky-400
                       flex items-center justify-center
                       absolute top-0 right-0`

            }
            >
                {cartItems.length}
            </div>
        </div>

    )
}
export default Cart
