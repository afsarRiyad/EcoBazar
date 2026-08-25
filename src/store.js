import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import cartSlice from './slices/cartSlice'
import wishlistSlice from './slices/wishlistSlice'

export const store = configureStore({
  reducer: {
    count: counterSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
  },
})