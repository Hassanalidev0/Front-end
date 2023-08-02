import { createSlice } from "@reduxjs/toolkit";
import ProductData from '../api/ProductData';


const initialState = { 
    cart: [],
    items: [ProductData],
    totalQuantity: 0,
    subTotal: 0
 };

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
           let find = state.cart.findIndex((item) => item.id === action.payload.id);
           if(find >=0){
           state.cart[find].quantity += 1;
           }else(
              state.cart.push({ ...action.payload, quantity: 1 })
           )
        }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;