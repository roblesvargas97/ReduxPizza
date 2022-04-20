import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import { setShowShoppingCart } from "../../Slices/uiSlice";
import { BsFillEmojiDizzyFill } from "react-icons/bs";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const hideShoppingCart = () => dispatch(setShowShoppingCart(false));
  const shoppingCartState = useSelector(
    (state) => state.pizza.pizzaShoppingCart
  );

  const onMakePurchase = () => {
    history("/order-pizza");
    hideShoppingCart();
  };

  return (
    <div className=" min-w-[320px] fixed z-20 top-[15vh] left-0 w-full h-[85vh]  lg:w-96 lg:h-80 md:animate-rotateAndShow2 lg:absolute lg:left-[-290%] lg:top-[12vh]  transition-all duration-700">
      <div className=" hidden md:block h-10 w-10 absolute left-[calc(50%_-_20px)]  rotate-45 bg-blue -z-10 "></div>
      <div className=" w-full h-full border-2 space-y-2 text-xl font-bold border-transparent rounded-none lg:border-blue flex flex-col items-center justify-center bg-dark-blue/95 lg:bg-dark-blue text-white lg:rounded-lg p-2">
        <h2 className=" text-3xl lg:text-base">Tu Carrito</h2>
        <div className=" custom-scroll2 w-full h-[75%]  lg:h-48 p-2 overflow-y-scroll space-y-2 bg-white-glass rounded-l-lg border-2 border-sky-200">
          {shoppingCartState.length === 0 && (
            <div className=" flex flex-col h-28 md:h-40 lg:h-28 items-center text-center bg-blue rounded-lg py-5 px-2 ">
              <p>¡Aun no has agregado pizzas a tu carrito!</p>{" "}
            </div>
          )}
          {shoppingCartState.map((element, index) => (
            <ShoppingCartItem key={index} info={element} />
          ))}
        </div>
        <button
          onClick={onMakePurchase}
          data-mdb-ripple="true"
          data-mdb-ripple-color="info"
          disabled={shoppingCartState.length === 0}
          className=" bg-sky-200  px-3 py-2 w-auto rounded-lg text-xl lg:text-lg text-dark-blue font-bold hover:scale-105 transition-all disabled:bg-sky-200/60 disabled:hover:scale-100 "
        >
          Realizar Compra
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
