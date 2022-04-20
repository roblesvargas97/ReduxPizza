import React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartButtonDesktop from "../ShoppingCart/ShoppingCartButton/ShoppingCartButtonDesktop";
import { HashLink } from "react-router-hash-link";
import ButtonDarkMode from "../ButttonDarkMode/ButtonDarkMode";

const Header = () => {
  const dispatch = useDispatch();
  const ShowCart = useSelector((state) => state.ui.showShoppingCart);

  const shoppingCartState = useSelector(
    (state) => state.pizza.pizzaShoppingCart
  );

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const shoppingCartItemsQuantity = shoppingCartState.reduce(
    (a, b) => a + b.quantity,
    0
  );

  return (
    <header className=" fixed top-0 left-0 z-50 w-full h-[15vh]  bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 backdrop-blur-sm border-b-2 border-blue-500 hidden lg:flex items-center justify-between lg:px-10 md:px-5 ">
      <img
        className="l w-[120px] h-[80px]"
        src="https://i.imgur.com/KVwBOVw.png"
        alt="logo"
      />
      <nav className="flex justify-between space-x-5 bg-white-glass backdrop-blur-sm text-white text-xl font-bold py-2 px-10  rounded-lg border-2 border-transparent hover:border-blue transition-all duration-300">
        <HashLink
          to="/#home"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "end" })
          }
          className="first-letter:text-blue py-1 px-2 rounded-lg border-2 border-transparent transition-all duration-300  ease-in hover:border-blue hover:text-white hover:first-letter:text-dark-blue hover:bg-cyan-500 hover:animate-bounceButton"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Menu
        </HashLink>
        <HashLink
          to="/#info"
          scroll={(el) => scrollWithOffset(el)}
          className="first-letter:text-blue py-1 px-2 rounded-lg border-2 border-transparent transition-all duration-300  ease-in hover:border-blue hover:text-white hover:first-letter:text-dark-blue hover:bg-cyan-500 hover:animate-bounceButton"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Informacion
        </HashLink>
        <HashLink
          to="/build-pizza#build-pizza"
          scroll={(el) => scrollWithOffset(el)}
          className="first-letter:text-blue py-1 px-2 rounded-lg border-2 border-transparent transition-all duration-300  ease-in hover:border-blue hover:text-white hover:first-letter:text-dark-blue hover:bg-cyan-500 hover:animate-bounceButton"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Arma tu pizza
        </HashLink>
      </nav>
      <div className=" relative">
        <ShoppingCartButtonDesktop />
        {ShowCart && <ShoppingCart />}
      </div>
      <ButtonDarkMode />
    </header>
  );
};

export default Header;
