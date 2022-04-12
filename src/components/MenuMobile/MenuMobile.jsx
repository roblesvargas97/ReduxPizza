import React from "react";
import { FaPizzaSlice, FaInfo, FaHome, FaSun, FaMoon } from "react-icons/fa";
import {MdOutlineFoodBank} from 'react-icons/md';
import { useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";

const MenuMobile = () => {
  const stateShowMobile = useSelector((state) => state.ui.showMenuMobile);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div
      className={` ${
        stateShowMobile
          ? " translate-x-0 animate-rotateAndShow2 "
          : " translate-x-[-100%]"
      } min-w-[320px] w-full h-[85vh] block lg:hidden bg-dark-blue/50 backdrop-blur-[2px] fixed z-50 top-[15vh] left-0 transition-all`}
    >
      <div className="w-[70%] h-full px-10 flex space-y-5 flex-col items-center justify-center bg-gradient-to-t from-dark-blue via-dark-blue to-dark-blue-1 min-w-[320px] md:w-[55%]">
        <h2 className=" font-bold text-white text-3xl ">!Bienvenido¡</h2>
        <nav className=" w-full flex flex-col space-y-5">
          <HashLink
            to="/#home"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "end" })
            }
            className=" w-full h-16 flex justify-between items-center rounded-lg px-5 py-2 bg-dark-blue text-center font-bold text-white text-xl backdrop-blur-sm border-2 hover:scale-110 hover:bg-blue duration-300 transition-all md:h-20 "
          >
            Inicio <FaHome />{" "}
          </HashLink>
          <HashLink
            to="/#menu"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "end" })
            }
            className=" w-full h-16 flex justify-between items-center rounded-lg px-5 py-2 bg-dark-blue text-center font-bold text-white text-xl backdrop-blur-sm border-2 hover:scale-110 hover:bg-blue duration-300 transition-all md:h-20 "
          >
            Menu <MdOutlineFoodBank />{" "}
          </HashLink>
          <HashLink
            to="/#info"
            scroll={(el) => scrollWithOffset(el)}
            className=" w-full h-16 flex justify-between items-center rounded-lg px-5 py-2 bg-dark-blue text-center font-bold text-white text-xl backdrop-blur-sm border-2 hover:scale-110 hover:bg-blue duration-300 transition-all md:h-20 "
          >
            Informacion <FaInfo />{" "}
          </HashLink>
          <HashLink
            to="/build-pizza#build-pizza"
            scroll={(el) => scrollWithOffset(el)}
            className=" w-full h-16 flex justify-between items-center rounded-lg px-5 py-2 bg-dark-blue text-center font-bold text-white text-xl backdrop-blur-sm border-2 hover:scale-110 hover:bg-blue duration-300 transition-all md:h-20 "
          >
            Arma tu pizza <FaPizzaSlice />{" "}
          </HashLink>
        </nav>
      </div>
    </div>
  );
};

export default MenuMobile;
