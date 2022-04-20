import React from "react";
import { useSelector } from "react-redux";
import { FaPizzaSlice, FaHandPointRight, FaMotorcycle } from "react-icons/fa";

const InfoItem = ({ icon, text }) => {
  const darkModeState = useSelector((state) => state.ui.darkMode);
  return (
    <article
      data-mdb-ripple="true"
      data-mdb-ripple-color={`${!darkModeState ? "dark" : "light"}`}
      className={` ${
        !darkModeState
          ? " lg:border-gray-400 lg:text-gray-400 lg:hover:text-gray-500 lg:hover:border-gray-500 text-gray-500 border-gray-500 shadow-gray-200 shadow-md hover:shadow-gray-500 hover:shadow-xl  "
          : "text-white border-white shadow-slate-100 shadow-sm hover:shadow-slate-100 hover:shadow-md "
      } w-full md:w-80 h-60 lg:h-52 cursor-pointer flex flex-col items-center justify-between border-2 p-10 rounded-lg  transition-all `}
    >
      {icon === "FaPizzaSlice" && <FaPizzaSlice className=" text-7xl" />}
      {icon === "FaHandPointRight" && (
        <FaHandPointRight className=" text-7xl" />
      )}
      {icon === "FaMotorcycle" && <FaMotorcycle className=" text-7xl" />}
      <p className=" text-center text-2xl lg:text-xl font-bold">{text}</p>
    </article>
  );
};

export default InfoItem;
