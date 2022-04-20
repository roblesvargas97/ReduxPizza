import React from "react";
import { setDarkMode } from "../../Slices/uiSlice";
import { useSelector, useDispatch } from "react-redux";
import { FaSun, FaMoon } from "react-icons/fa";

const ButtonDarkMode = () => {
  const dispatch = useDispatch();
  const darkModeState = useSelector((state) => state.ui.darkMode);

  const onSetDarkMode = () => {
    dispatch(setDarkMode(!darkModeState));
  };

  return (
    <button
      onClick={onSetDarkMode}
      className="l w-14 h-7 p-1 flex items-center border-2 rounded-lg bg-white-glass backdrop-blur-sm border-blue justify-between relative cursor-pointer transition-all duration-300 ease-in-out shadow-2xl "
    >
      <FaSun className=" text-white" />
      <FaMoon className=" text-white" />
      <span
        className={` ${
          !darkModeState ? "translate-x-0" : " translate-x-[100%]"
        } absolute w-7 h-7 bg-white top-[-2px] left-[-2px] rounded-lg transition-all ease-in-out duration-300`}
      />
    </button>
  );
};

export default ButtonDarkMode;
