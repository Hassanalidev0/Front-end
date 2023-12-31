import { createSlice } from "@reduxjs/toolkit";


const initialState = { 
    cart: [],
    totalQuantity: 0,
    totalPrice: 0
 };

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
           let find = state.cart.findIndex((item) => item.id === action.payload.id);
           if(find >=0){
           state.cart[find].quantity = state.cart.newquantity;
           }else(
              state.cart.push({ ...action.payload, quantity: 1 })
           )
        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
              (cartTotal, cartItem) => {
                // console.log("carttotal", cartTotal);
                // console.log("cartitem", cartItem);
                const { price, quantity } = cartItem;
                // console.log(price, quantity);
                const itemTotal = price * quantity;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal;
              },
              {
                totalPrice: 0,
                totalQuantity: 0,
              }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
          },
          removeItem: (state,action) => {
            state.cart = state.cart.filter( (item) => item.id !== action.payload)
          },
          increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            });
          },
          decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
              }
              return item;
            });
          },
          changeItemQuantity: (state, action) => {
            const { id, newQuantity } = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item) {
              item.quantity = newQuantity; // Update the quantity of the specific item
            }
          },
    }
})

export const { addToCart,getCartTotal,removeItem,increaseItemQuantity,decreaseItemQuantity,changeItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;