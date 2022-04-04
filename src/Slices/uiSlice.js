import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showShoppingCart: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setShowShoppingCart: (state, action) => {
      state.showShoppingCart = action.payload;
    },
  },
});

export const { setShowShoppingCart } = uiSlice.actions;

export default uiSlice.reducer;
