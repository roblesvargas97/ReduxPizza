import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HeaderMobile from "./components/HeaderMobile/HeaderMobile";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import BuildPizza from "./pages/BuildPizza/BuildPizza";
import Home from "./pages/Home/Home";
import BackGroundShoppingCart from "./components/ShoppingCart/BackGroundShoppingCart";
import { useSelector } from "react-redux";
import ShoppingCartButtonMobile from './components/ShoppingCart/ShoppingCartButton/ShoppingCartButtonMobile';
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import BackgroundHeader from "./components/BackgroundHeader/BackgroundHeader";
import OrderPizza from "./pages/OrderPizza/OrderPizza";

function App() {
  const ShowCart = useSelector((state) => state.ui.showShoppingCart);

  return (
    <HashRouter>
      <Header />
      <HeaderMobile />
      <BackgroundHeader/>
      <MenuMobile />
      <main className="relative" >
        <ShoppingCartButtonMobile/>
        {ShowCart && <ShoppingCart/>}
        {ShowCart && <BackGroundShoppingCart />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build-pizza" element={<BuildPizza />} />
          <Route path="/order-pizza" element={<OrderPizza/>} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
