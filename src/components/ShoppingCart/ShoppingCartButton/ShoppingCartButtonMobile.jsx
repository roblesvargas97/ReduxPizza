import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowShoppingCart } from "../../../Slices/uiSlice";
import { MdOutlineClose } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const ShoppingCartButton = () => {
  const dispatch = useDispatch();
  const ShowCart = useSelector((state) => state.ui.showShoppingCart);
  const shoppingCartState = useSelector(
    (state) => state.pizza.pizzaShoppingCart
  );
  const shoppingCartItemsQuantity = shoppingCartState.reduce(
    (a, b) => a + b.quantity,
    0
  );
  return (
    <button
      onClick={() => dispatch(setShowShoppingCart(!ShowCart))}
      className={` ${
        ShowCart
          ? " border-blue top-[16vh] "
          : "lg:border-transparent bottom-2 hover:border-blue"
      } fixed z-30 lg:hidden  right-2 group h-14 w-14 flex justify-center py-2 items-center text-2xl font-bold px-2 border-2  rounded-lg lg:bg-white-glass bg-dark-blue lg:backdrop-blur-lg text-white transition-all`}
    >
      <div
        className={` ${
          ShowCart
            ? "border-transparent bg-transparent"
            : " border-transparent bg-transparent"
        } w-9 h-9 bg-transparent group-active:animate-bounceButton group-hover:bg-cyan-500 group-hover:animate-bounceButton group-hover:border-blue border-2 rounded-lg flex items-center justify-center `}
      >
        {ShowCart ? <MdOutlineClose /> : <FaShoppingCart />}
      </div>
      {shoppingCartItemsQuantity !== 0 && (
        <span
          className={` ${
            ShowCart ? " hidden " : " bg-dark-blue animate-pulse"
          }  group-hover:border-blue group-hover:bg-blue group-hover:animate-none border-2 border-transparent absolute flex justify-center items-center rounded-fulll h-5 w-5 rounded-full left-[-10px] top-[-10px] text-sm`}
        >
          {shoppingCartItemsQuantity}
        </span>
      )}
    </button>
  );
};

export default ShoppingCartButton;
