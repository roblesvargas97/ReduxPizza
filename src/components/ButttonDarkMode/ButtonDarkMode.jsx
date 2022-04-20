import React from "react";

const ButtonDarkMode = () => {
  return (
    <button className="l w-14 h-7 p-1 flex items-center border-2 rounded-lg bg-white-glass backdrop-blur-sm border-blue justify-between relative cursor-pointer transition-all duration-300 ease-in-out shadow-2xl ">
      <FaSun className=" text-white" />
      <FaMoon className=" text-white" />
      <span className=" absolute w-7 h-7 bg-white top-[-2px] left-[-2px] rounded-lg" />
    </button>
  );
};

export default ButtonDarkMode;
