import { FaCartPlus } from "react-icons/fa";
import React from "react";

const PizzaCarouselItem = ({ infoPizza }) => {
  const { img, name, prices } = infoPizza;

  return (
    <div className="main-container ">
      <div className=" w-[90%] h-[60vh] border-2 border-white rounded-lg relative shadow-lg shadow-white/50">
        <div className=" absolute top-0 left-0 w-full backdrop-blur h-[60%] bg-clip-padding rounded-t-lg bg-gradient-to-tl from-sky-500 via-transparent to-transparent -z-10"></div>
        <div className=" relative h-[50%] flex flex-col justify-center items-center ">
          <img className=" object-scale-down h-60 " src={img} alt="" />
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className=" h-10 w-10 flex justify-center items-center rounded-full cursor-pointer absolute top-[10px] left-[10px] text-white text-3xl"
          >
            <FaCartPlus />
          </button>
        </div>
        <div className=" h-[50%] bg-gradient-to-tr from-sky-500 via-sky-200 to-white space-y-3  rounded-b-lg p-2 flex flex-col justify-center items-center">
          <h4 className=" text-3xl md:text-xl font-bold text-dark-blue">{name}</h4>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className=" w-44 h-12 flex justify-center items-center text-base font-light bg-dark-blue  rounded-lg text-white"
          >
            Ingredientes
          </button>
          <select 
            className="w-44 rounded-lg font-light text-base h-12 bg-dark-blue text-white focus:ring-4 ring-white outline-4 focus:outline-blue " >
            <option className=" text-center text-base font-light" value="">
              Selecciona tu Pizza
            </option>
            {prices.map((element, index) => (
              <option value={element[1]} key={index} className=" text-center text-base font-light">{`${
                element[0][0].toUpperCase() + element[0].slice(1)
              } $${element[1]}MXN`}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PizzaCarouselItem;
