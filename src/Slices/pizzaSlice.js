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
    },
    emptyIngredientsPizza: (state,action)=>{
      state.ingredientsPizza = [];
    }
  },
});

export const { setIngredient, removeIngredient , addPizzaToShoppingCart , emptyIngredientsPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
