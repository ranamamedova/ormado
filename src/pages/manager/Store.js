import { configureStore } from "@reduxjs/toolkit"
import wishSlice from "./WishSlice"

const store = configureStore({
  reducer: {
    wish: wishSlice
  }
})

export default store
