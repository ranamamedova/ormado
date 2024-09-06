import { createSlice } from "@reduxjs/toolkit";

const storedAddtoCart = JSON.parse(localStorage.getItem("addtocart")) || [];

const cartSlice = createSlice({
  name: "addtocart",
  initialState: storedAddtoCart,
  reducers: {
    addToCart: (state, action) => {
      const newCartItem = action.payload;
      const existingCartItemIndex = state.findIndex((cartData) => cartData._id === newCartItem._id);
    
      if (existingCartItemIndex !== -1) {
        state[existingCartItemIndex].quantity += 1;
      } else {
        state.push(newCartItem);
      }
    
      localStorage.setItem("addtocart", JSON.stringify(state));
    },
    
    removeToCart: (state, action) => {
      const itemIdToDelete = action.payload;
      const indexToRemove = state.findIndex((cartData) => cartData.id === itemIdToDelete);
      const updatedadToCart = [...state.slice(0, indexToRemove), ...state.slice(indexToRemove + 1)];
      localStorage.setItem("addtocart", JSON.stringify( updatedadToCart));
      return  updatedadToCart;
    },
    
    

  },
});

export default cartSlice.reducer;

export const { addToCart, removeToCart } = cartSlice.actions;
