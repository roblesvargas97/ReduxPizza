import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredientsPizza: ['Queso Mozarella'],
  pizzaShoppingCart: [],
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
    addPizzaToShoppingCart: (state,action) => {
      state.pizzaShoppingCart.push(action.payload);
    }
  },
});

export const { setIngredient, removeIngredient , addPizzaToShoppingCart } = pizzaSlice.actions;

export default pizzaSlice.reducer;
