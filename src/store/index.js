import { configureStore } from "@reduxjs/toolkit";
import listMovieSlice from "./../pages/Home/ListMovie/slice.js";
import authSlice from "./auth.slice";

export const store = configureStore({
  reducer: {
    listMovieSlice,
    authSlice,
  },
});
