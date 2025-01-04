import {createApi} from "@reduxjs/toolkit/query/react";
import {createSlice} from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        selectedCards:[],
    },
    reducers: {
        addToCart: (state, action) => {
            if (!state.selectedCards.some(card => card.productId === action.payload.productId)) {
                state.selectedCards.push(action.payload);
            }

        },
        removeFromCart: (state, action) => {
            state.selectedCards=state.selectedCards.filter((item) => item.productId !== action.payload);
        },
        increaseQuantity: (state, action) => {
           const card=state.selectedCards.find((card) => card.productId === action.payload);
            if (card) {
                card.quantity += 1; // Directly update the quantity of the found card
                //reason
                //Immer Handling:
                //
                // Redux Toolkit automatically wraps the state in a proxy object (thanks to Immer).
                // When you mutate card.quantity, Immer tracks that change and applies it immutably to the state.
                // Reference to the Object:
                //
                // find returns a reference to the object inside the selectedCards array.
                // When you modify card.quantity, you are directly modifying the object within the array, and Immer captures this mutation.
            }
        },
        decreaseQuantity: (state, action)=>{
            const card=state.selectedCards.find((card) => card.productId === action.payload);
            if(card.quantity === 1){
                state.selectedCards=state.selectedCards.filter((item) => item.productId !== action.payload);
            }
          else if (card) {
              if(card.quantity>0)
                card.quantity -= 1;
            }
        }
    },
})
export const {addToCart,increaseQuantity,decreaseQuantity,removeFromCart}=cardSlice.actions;
export default cardSlice.reducer;

//u can use this method if you wanna do it manually and maintaining immutability
//increaseQuantity: (state, action) => {
//     state.selectedCards = state.selectedCards.map(card =>
//         card.id === action.payload ? { ...card, quantity: card.quantity + 1 } : card
//     );
// }