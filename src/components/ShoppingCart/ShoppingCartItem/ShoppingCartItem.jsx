import React from "react";
import "../styles.css";

const ShoppingCartItem = ({ info }) => {
  console.log(info);

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
  const formatIngredients = separateArrayByComma(info.ingredients);

  return (
    <article className="w-full h-20 flex items-center justify-center border-2 border-white overflow-hidden rounded-lg bg-dark-blue text-dark-blue shadow shadow-white/50 ">
      <div className="w-[20%] h-full bg-gradient-to-tr from-sky-500 via-sky-200 to-white ">
        <img className="w-full" src={info.img} alt={info.name} />
      </div>
      <div className="w-[70%] flex flex-col justify-center overflow-hidden h-full text-white bg-gradient-to-tl from-sky-500 via-transparent to-transparent ">
        <h3 className=" text-center text-sm">{info.name}</h3>
        <div className=" custom-scroll h-6 rounded-lg w-full overflow-y-scroll">
          <ul className=" list-disc pl-5 text-white ">
            {info.ingredients.map((element, index) => (
              <li className="text-xs font-light" key={index}>
                {element}
              </li>
            ))}
          </ul>
        </div>
        <div className=" w-full flex space-x-2 flex-wrap justify-center">
          <p className=" text-left text-xs font-bold">
            Tamaño: <span className=" font-light">{info.size}</span>{" "}
          </p>
          <p className=" text-left text-xs font-bold">
            Cantidad: <span className=" font-light">{info.quantity}</span>{" "}
          </p>
          <p className=" text-left text-xs font-bold">
            Precio: <span className=" font-light">${info.price}MXN</span>{" "}
          </p>
        </div>
      </div>
      <div className="w-[10%] h-full flex justify-center items-center ">
        <button className=" w-full h-full rounded-l-none bg-dark-blue w-100% text-white font-bold text-xl rounded-sm">
          x
        </button>
      </div>
    </article>
  );
};

export default ShoppingCartItem;
