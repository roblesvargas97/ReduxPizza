import React from "react";
import { useDispatch , useSelector } from "react-redux";
import "../styles.css";

const OrderPizzaItem = ({ info }) => {
  const dispatch = useDispatch();

  const separateArrayByComma = (array) => {
    const stringArray = array.join(", ");
    const lastCommaFromArray = stringArray.lastIndexOf(", ");
    if (lastCommaFromArray !== -1) {
      return (
        stringArray.substring(0, lastCommaFromArray) +
        " y" +
        stringArray.substring(lastCommaFromArray + 1) +
        "."
      );
    } else {
      return stringArray;
    }
  };

  return (
    <article className="w-full h-44 flex items-center justify-center border-2 border-white overflow-hidden rounded-lg bg-dark-blue text-dark-blue shadow shadow-white/50 ">
      <div className="w-[40%] flex justify-center items-center h-full bg-gradient-to-tr from-sky-500 via-sky-200 to-white ">
        <img className="w-full md:w-[70%] md:h-full" src={info.img} alt={info.name} />
      </div>
      <div className=" relative w-[60%] flex flex-col space-y-2 p-2 justify-center overflow-hidden h-full text-white bg-gradient-to-tl from-sky-500 via-transparent to-transparent ">
        <h3 className=" text-center text-base font-bold">{info.name}</h3>
        <div className=" custom-scroll rounded-lg space-y-2 flex flex-col items-center w-full">
          <p className=" text-center text-xs font-bold">Ingredientes:</p>
          <p className=" text-center text-xs font-light">
            {separateArrayByComma(info.ingredients)}
          </p>
        </div>
        <div className=" w-full flex space-x-2 flex-wrap justify-center">
          <p className=" text-left text-xs font-bold">
            Tamaño: <span className=" font-light">{info.size}</span>{" "}
          </p>
          <p className=" text-left text-xs font-bold">
            Cantidad: <span className=" font-light">{info.quantity}</span>{" "}
          </p>
          <p className=" text-left text-xs font-bold">
            Precio: <span className=" font-light">${info.finalPrice}MXN</span>{" "}
          </p>
        </div>
      </div>
    </article>
  );
};

export default OrderPizzaItem;
