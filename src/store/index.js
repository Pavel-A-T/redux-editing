import { configureStore } from '@reduxjs/toolkit'
import postSlice from "./postSlice";
import filterSlice from "./filterSlice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
    filter: filterSlice,
  },
})