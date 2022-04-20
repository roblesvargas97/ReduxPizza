import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showShoppingCart: false,
  showMenuMobile: false,
  darkMode: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setShowShoppingCart: (state, action) => {
      state.showShoppingCart = action.payload;
    },
    setShowMenuMobile: (state, action) => {
      state.showMenuMobile = action.payload;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setShowShoppingCart, setShowMenuMobile , setDarkMode } = uiSlice.actions;

export default uiSlice.reducer;
