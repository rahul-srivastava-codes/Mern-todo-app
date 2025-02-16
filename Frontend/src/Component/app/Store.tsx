import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Todoslice";

export default configureStore({
  reducer: {
    todo: todoReducer, // Add other reducers here.
  },
});
