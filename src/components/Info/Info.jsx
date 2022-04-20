import React from "react";
import InfoItem from "../InfoItem/InfoItem";
import { FaChevronDown } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";

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

  const darkModeState = useSelector((state) => state.ui.darkMode);

  return (
    <div
      className={`${
        !darkModeState ? "bg-white" : " bg-slate-900"
      } relative w-full min-h-[45vh] md:min-h-[35vh] lg:h-[45vh] flex flex-col items-center p-5 md:flex-row space-y-5 lg:p-10 md:justify-center md:items-center md:space-x-5 md:space-y-0 transition-all duration-500 ease-in-out `}
    >
      {infoArray.map((element, index) => (
        <InfoItem key={index} icon={element.icon} text={element.text} />
      ))}
      <HashLink
        to="/#menu"
        scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
        data-mdb-ripple="true"
        data-mdb-ripple-color="info"
        className=" absolute top-[-72px] md:top-[-48px] rounded-full   ml-0 w-52 h-16 border-[3px] border-dark-blue hover:border-blue  flex justify-between items-center font-bold  py-1 px-10 text-xl bg-gradient-to-r from-sky-300 via-sky-100 to-white text-dark-blue hover:scale-105 transition-all"
      >
        Menu <FaChevronDown />{" "}
      </HashLink>
    </div>
  );
};

export default Info;
