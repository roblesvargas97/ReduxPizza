import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredientsPizza: [],
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setIngredients: (state, action) => {
      state.ingredientsPizza = action.payload;
    },
  },
});

export const { setIngredients } = pizzaSlice.actions;

export default pizzaSlice.reducer;
