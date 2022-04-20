import React from "react";
import { FaBars } from "react-icons/fa";
import { setShowMenuMobile } from "../../Slices/uiSlice";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import ButtonDarkMode from "../ButttonDarkMode/ButtonDarkMode";

const HeaderMobile = () => {
  const dispatch = useDispatch();
  const stateShowMobile = useSelector((state) => state.ui.showMenuMobile);

  const onClickShowMenuMobile = () => {
    dispatch(setShowMenuMobile(!stateShowMobile));
  };

  return (
    <div className=" fixed top-0 left-0 z-50 w-full h-[15vh] flex items-center justify-between px-10 bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 border-b-2 border-blue backdrop-blur-sm min-w-[320px] lg:hidden ">
      <button
        onClick={onClickShowMenuMobile}
        type="button"
        className=" group h-12 w-12 bg bg-white-glass border-2 border-transparent active:border-blue flex justify-center items-center rounded-lg text-white cursor-pointer transition-all duration-300 ease-in-out"
      >
        <div className=" h-10 w-10 flex justify-center items-center text-3xl group-active:animate-bounceButton group-active:bg-cyan-500 rounded-lg ">
          {stateShowMobile ? <MdOutlineClose /> : <FaBars />}
        </div>
      </button>
      <img
        className="w-[130px] h-[85px] md:h-[100px] md:w-[170px]"
        src="https://i.imgur.com/KVwBOVw.png"
        alt="logo"
      />
      <ButtonDarkMode />
    </div>
  );
};

export default HeaderMobile;
