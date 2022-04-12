import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantityShoppinCart,
  decreaseQuantityShoppinCart,
  removeItemShoppingCart,
  calculatePriceAccordingToQuantity,
} from "../../../Slices/pizzaSlice";
import "../styles.css";

const ShoppingCartItem = ({ info }) => {
  const dispatch = useDispatch();

  const onAddClick = () => {
    dispatch(increaseQuantityShoppinCart(info.id));
    dispatch(calculatePriceAccordingToQuantity(info.id));
  };

  const onSustractionClick = () => {
    dispatch(decreaseQuantityShoppinCart(info.id));
    dispatch(calculatePriceAccordingToQuantity(info.id));
  };

  const onRemoveItem = () => {
    dispatch(removeItemShoppingCart(info.id));
  };

  return (
    <article className="w-full h-28 md:h-40 lg:h-28 flex items-center justify-center border-2 border-white overflow-hidden rounded-lg bg-dark-blue text-dark-blue shadow shadow-white/50 ">
      <div className="w-[30%] flex justify-center items-center h-full bg-gradient-to-tr from-sky-500 via-sky-200 to-white ">
        <img className="w-full md:w-[70%]" src={info.img} alt={info.name} />
      </div>
      <div className="w-[60%] flex flex-col justify-center overflow-hidden h-full text-white bg-gradient-to-tl from-sky-500 via-transparent to-transparent ">
        <h3 className=" text-center text-sm md:text-lg lg:text-sm">{info.name}</h3>
        <div className=" custom-scroll h-6 md:h-10 rounded-lg flex flex-col items-center w-full overflow-y-scroll">
          <ul className=" list-disc pl-5 text-white ">
            {info.ingredients.map((element, index) => (
              <li className="text-xs md:text-base lg:text-xs font-light" key={index}>
                {element}
              </li>
            ))}
          </ul>
        </div>
        <div className=" w-full flex space-x-2 flex-wrap justify-center">
          <p className=" text-left text-xs md:text-base lg:text-xs font-bold">
            Tamaño: <span className=" font-light">{info.size}</span>{" "}
          </p>
          <p className=" text-left text-xs md:text-base lg:text-xs font-bold">
            Cantidad: <span className=" font-light">{info.quantity}</span>{" "}
          </p>
          <p className=" text-left text-xs md:text-base lg:text-xs font-bold">
            Precio: <span className=" font-light">${info.finalPrice}MXN</span>{" "}
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            onClick={onAddClick}
            disabled={info.quantity === 5}
            className=" h-5 w-5 md:h-10 md:w-10 lg:h-5 lg:w-5 text-white text-xs md:text-base lg:text-sm bg-dark-blue border-2 rounded-sm border-sky-200 disabled:bg-gray-500"
          >
            +
          </button>
          <span className=" h-5 w-5 md:h-10 md:w-10 lg:h-5 lg:w-5 flex items-center justify-center text-xs md:text-base lg:text-sm border-2 border-sky-200 bg-dark-blue">
            {info.quantity}
          </span>
          <button
            onClick={onSustractionClick}
            disabled={info.quantity === 1}
            className=" h-5 w-5 md:h-10 md:w-10 lg:h-5 lg:w-5 text-white text-xs md:text-base lg:text-sm bg-dark-blue border-2 rounded-sm border-sky-200 disabled:bg-gray-500"
          >
            -
          </button>
        </div>
      </div>
      <div className="w-[10%] h-full flex justify-center items-center ">
        <button
          onClick={onRemoveItem}
          className=" w-full h-full rounded-l-none bg-dark-blue w-100% text-white font-bold text-xl rounded-sm"
        >
          x
        </button>
      </div>
    </article>
  );
};

export default ShoppingCartItem;
