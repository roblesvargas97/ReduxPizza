import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  ingredientsPizza: ["Queso Mozarella"],
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
    addPizzaToShoppingCart: (state, action) => {
      state.pizzaShoppingCart.push(action.payload);
    },
    emptyIngredientsPizza: (state, action) => {
      state.ingredientsPizza = ["Queso Mozarella"];
    },
    increaseQuantityShoppinCart: (state, action) => {
      const itemCartExist =
        state.pizzaShoppingCart.filter(
          (element) => element.id === action.payload
        ).length !== 0;

      const itemPosition = state.pizzaShoppingCart.findIndex(
        (element) => element.id === action.payload
      );

      if (itemCartExist) {
        const quantityItem = state.pizzaShoppingCart[itemPosition].quantity;

        if (quantityItem <= 4) {
          state.pizzaShoppingCart[itemPosition].quantity++;
          // console.log(current(state.pizzaShoppingCart));
        }
      }
    },
    decreaseQuantityShoppinCart: (state, action) => {
      const itemCartExist =
        state.pizzaShoppingCart.filter(
          (element) => element.id === action.payload
        ).length !== 0;

      const itemPosition = state.pizzaShoppingCart.findIndex(
        (element) => element.id === action.payload
      );

      if (itemCartExist) {
        const quantityItem = state.pizzaShoppingCart[itemPosition].quantity;

        if (quantityItem >= 2) {
          state.pizzaShoppingCart[itemPosition].quantity--;
          // console.log(current(state.pizzaShoppingCart));
        }
      }
    },
    removeItemShoppingCart: (state, action) => {
      state.pizzaShoppingCart = state.pizzaShoppingCart.filter(
        (element) => element.id !== action.payload
      );
    },
  },
});

export const {
  setIngredient,
  removeIngredient,
  addPizzaToShoppingCart,
  emptyIngredientsPizza,
  increaseQuantityShoppinCart,
  decreaseQuantityShoppinCart,
  removeItemShoppingCart,
} = pizzaSlice.actions;

export default pizzaSlice.reducer;
