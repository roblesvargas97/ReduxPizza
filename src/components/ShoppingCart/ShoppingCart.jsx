import React from "react";
import { useSelector } from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";

const ShoppingCart = () => {
  const shoppingCartState = useSelector(
    (state) => state.pizza.pizzaShoppingCart
  );

  return (
    <div className=" fixed z-20 top-[15vh] left-0 w-full h-[85vh]  md:w-96 md:h-80 md:animate-rotateAndShow2 lg:absolute md:left-[-290%] md:top-[12vh]  transition-all duration-700">
      <div className=" hidden md:block h-10 w-10 absolute left-[calc(50%_-_20px)]  rotate-45 bg-blue -z-10 "></div>
      <div className=" w-full h-full border-2 space-y-2 text-xl font-bold border-transparent rounded-none lg:border-blue flex flex-col items-center justify-center bg-dark-blue/95 text-white lg:rounded-lg p-2">
        <h2 className=" text-3xl lg:text-base" >Tu Carrito</h2>
        <div className=" custom-scroll2 w-full h-[75%]  lg:h-48 p-2 overflow-y-scroll space-y-2 bg-white-glass rounded-l-lg border-2 border-sky-200">
          {shoppingCartState.map((element, index) => (
            <ShoppingCartItem key={index} info={element} />
          ))}
        </div>
        <button
          data-mdb-ripple="true"
          data-mdb-ripple-color="info"
          className=" bg-sky-200  px-3 py-2 w-auto rounded-lg text-xl lg:text-lg text-dark-blue font-bold hover:scale-105 transition-all "
        >
          Realizar Compra
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
