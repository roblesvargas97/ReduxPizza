import React from "react";
import { useSelector } from "react-redux";
const ShoppingCart = () => {
  const shoppingCartState = useSelector(
    (state) => state.pizza.pizzaShoppingCart
  );

  return (
    <div className="md:w-40 md:animate-rotateAndShow2 md:h-40 absolute md:left-[-100%] md:top-[12vh]  transition-all duration-700">
        <div className=" hidden md:block h-10 w-10 absolute left-[calc(50%_-_20px)]  rotate-45 bg-orange-600 -z-10 " ></div>
        <div className=" w-full h-full bg-orange-600" ></div>
    </div>
  );
};

export default ShoppingCart;
