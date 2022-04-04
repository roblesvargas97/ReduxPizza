import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "../Slices/pizzaSlice";
import uiReducer from '../Slices/uiSlice';

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    ui: uiReducer
  },
});
