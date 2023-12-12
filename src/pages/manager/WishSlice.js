import { createSlice } from "@reduxjs/toolkit"

const wishState = []

const wishSlice = createSlice({
  name: "wishlist",
  initialState: wishState,
  reducers: {
    add: (state, action) => {
      const newWish = action.payload
      state.push(newWish)
    },
    remove: (state, action) => {
      return state.filter(wishData => wishData.id !== action.payload)
    }
  }
})

export default wishSlice.reducer

export const { add, remove } = wishSlice.actions
