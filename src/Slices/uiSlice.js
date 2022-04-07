import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showShoppingCart: false,
  showMenuMobile: false,
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
  },
});

export const { setShowShoppingCart ,setShowMenuMobile } = uiSlice.actions;

export default uiSlice.reducer;
