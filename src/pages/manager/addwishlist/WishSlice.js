import { createSlice } from "@reduxjs/toolkit";

const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

const wishSlice = createSlice({
  name: "wishlist",
  initialState: storedWishlist,
  reducers: {
    add: (state, action) => {
      const newWish = action.payload;
      state.push(newWish);
      localStorage.setItem("wishlist", JSON.stringify(state));
    },
    remove: (state, action) => {
      const itemIdToDelete = action.payload;
      const indexToRemove = state.findIndex((wishData) => wishData.id === itemIdToDelete);
      const updatedWishlist = [...state.slice(0, indexToRemove), ...state.slice(indexToRemove + 1)];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    },

    addToCartFromWishlist: (state, action) => {
      const itemIdToAdd = action.payload;
      const itemToAdd = state.find((item) => item.id === itemIdToAdd);

      if (itemToAdd) {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

        const updatedCart = [...storedCart, itemToAdd];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return state;
      }
      return state;
    },
    
  },
});

export default wishSlice.reducer;

export const { add, remove, addToCartFromWishlist } = wishSlice.actions;
