import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "../Slices/pizzaSlice";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});
