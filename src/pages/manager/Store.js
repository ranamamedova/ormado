import { configureStore } from "@reduxjs/toolkit"
import wishSlice from "./addwishlist/WishSlice"
import cartSlice from "./addtocart/CartSlice";


const store = configureStore({
  reducer: {
    cart: cartSlice,
    wish: wishSlice
    
  }
})

export default store
