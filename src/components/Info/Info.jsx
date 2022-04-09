import React from "react";
import InfoItem from "../InfoItem/InfoItem";
import { FaChevronDown } from "react-icons/fa";

const Info = () => {
  const infoArray = [
    {
      icon: "FaPizzaSlice",
      text: "Escoge o arma tu pizza.",
    },
    {
      icon: "FaHandPointRight",
      text: "Ordena los detalles de tu pedido.",
    },
    {
      icon: "FaMotorcycle",
      text: "Ordena los detalles de tu pedido.",
    },
  ];

  return (
    <div className=" relative w-full min-h-[45vh] md:min-h-[35vh] lg:h-[45vh] flex flex-col items-center p-5 md:flex-row bg-white space-y-5 lg:p-10 md:justify-center md:items-center md:space-x-5 md:space-y-0 ">
      {infoArray.map((element, index) => (
        <InfoItem key={index} icon={element.icon} text={element.text} />
      ))}
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="info"
        className=" absolute top-[-72px] md:top-[-48px] rounded-full   ml-0 w-52 h-16 border-[3px] border-dark-blue hover:border-blue  flex justify-between items-center font-bold  py-1 px-10 text-xl bg-gradient-to-r from-sky-300 via-sky-100 to-white text-dark-blue hover:scale-105 transition-all"
      >
        Menu <FaChevronDown />{" "}
      </button>
    </div>
  );
};

export default Info;
