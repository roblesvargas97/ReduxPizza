import React from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { setShowShoppingCart } from "../../Slices/uiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const ShowCart = useSelector((state) => state.ui.showShoppingCart);

  const shoppingCartState = useSelector(
    (state) => state.pizza.pizzaShoppingCart
  );

  const shoppingCartItemsQuantity = shoppingCartState.reduce(
    (a, b) => a + b.quantity,
    0
  );

  return (
    <header className=" fixed top-0 left-0 z-50 w-full h-[15vh]  bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 backdrop-blur-sm border-b-2 border-blue-500 hidden md:flex items-center justify-between lg:px-10 md:px-5 ">
      <img
        className="l w-[120px] h-[80px]"
        src="https://i.imgur.com/KVwBOVw.png"
        alt="logo"
      />
      <nav className="flex justify-between space-x-5 bg-white-glass backdrop-blur-sm text-white text-xl font-bold py-2 px-10  rounded-lg border-2 border-transparent hover:border-blue transition-all duration-300">
        <Link
          to="/"
          className="first-letter:text-blue py-1 px-2 rounded-lg border-2 border-transparent transition-all duration-300  ease-in hover:border-blue hover:text-white hover:first-letter:text-dark-blue hover:bg-cyan-500 hover:animate-bounceButton"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Menu
        </Link>
        <Link
          to="#"
          className="first-letter:text-blue py-1 px-2 rounded-lg border-2 border-transparent transition-all duration-300  ease-in hover:border-blue hover:text-white hover:first-letter:text-dark-blue hover:bg-cyan-500 hover:animate-bounceButton"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Informacion
        </Link>
        <Link
          to="/build-pizza"
          className="first-letter:text-blue py-1 px-2 rounded-lg border-2 border-transparent transition-all duration-300  ease-in hover:border-blue hover:text-white hover:first-letter:text-dark-blue hover:bg-cyan-500 hover:animate-bounceButton"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Arma tu pizza
        </Link>
      </nav>
      <div className=" relative">
        <button
          onClick={() => dispatch(setShowShoppingCart(!ShowCart))}
          className={` ${
            ShowCart ? "border-blue" : "border-transparent"
          } relative group h-14 w-14 flex justify-center py-2 items-center text-2xl font-bold px-2 border-2 hover:border-blue rounded-lg bg-white-glass backdrop-blur-lg text-white transition-all`}
        >
          <div
            className={` ${
              ShowCart
                ? "border-blue bg-cyan-500"
                : " border-transparent bg-transparent"
            } w-9 h-9 bg-transparent group-hover:bg-cyan-500 group-hover:animate-bounceButton group-hover:border-blue border-2 rounded-lg flex items-center justify-center `}
          >
            <FaShoppingCart />
          </div>
          { shoppingCartItemsQuantity!== 0 &&
            <span className={` ${ShowCart?' bg-blue animate-none':'bg-white-glass animate-pulse' }  group-hover:border-blue group-hover:bg-blue group-hover:animate-none border-2 border-transparent absolute flex justify-center items-center rounded-fulll h-5 w-5 rounded-full left-[-10px] top-[-10px] text-sm`} >
              {shoppingCartItemsQuantity}
            </span>
          }
        </button>
        {ShowCart && <ShoppingCart />}
      </div>
      <button className="l w-14 h-7 p-1 flex items-center border-2 rounded-lg bg-white-glass backdrop-blur-sm border-blue justify-between relative cursor-pointer transition-all duration-300 ease-in-out shadow-2xl ">
        <FaSun className=" text-white" />
        <FaMoon className=" text-white" />
        <span className=" absolute w-7 h-7 bg-white top-[-2px] left-[-2px] rounded-lg" />
      </button>
    </header>
  );
};

export default Header;
