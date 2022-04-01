import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredientsPizza: ['Queso Mozarella'],
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setIngredient: (state, action) => {
      state.ingredientsPizza.push(action.payload);
    },
    removeIngredient: (state, action) => {
      state.ingredientsPizza = state.ingredientsPizza.filter(
        (element) => element !== action.payload
      );
    },
  },
});

export const { setIngredient, removeIngredient } = pizzaSlice.actions;

export default pizzaSlice.reducer;
