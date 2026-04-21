import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    count: counterSlice
  },
})