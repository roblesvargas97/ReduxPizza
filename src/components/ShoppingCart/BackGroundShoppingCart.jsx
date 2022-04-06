import React from "react";
import { useDispatch } from "react-redux";
import { setShowShoppingCart } from "../../Slices/uiSlice";

const BackGroundShoppingCart = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setShowShoppingCart(false));
  };

  return (
    <div
      onClick={(e) => handleClick(e)}
      className=" fixed hidden lg:block top-[15VH] left-0  w-full h-[85vh] bg-dark-blue/50 animate-rotateAndShow2 z-20"
    ></div>
  );
};

export default BackGroundShoppingCart;
