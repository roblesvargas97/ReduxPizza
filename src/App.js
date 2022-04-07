import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HeaderMobile from "./components/HeaderMobile/HeaderMobile";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import BuildPizza from "./pages/BuildPizza/BuildPizza";
import Home from "./pages/Home/Home";
import BackGroundShoppingCart from "./components/ShoppingCart/BackGroundShoppingCart";
import { useSelector } from "react-redux";

function App() {
  const ShowCart = useSelector((state) => state.ui.showShoppingCart);

  return (
    <HashRouter>
      <Header />
      <HeaderMobile />
      <MenuMobile/>
      {ShowCart && <BackGroundShoppingCart />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build-pizza" element={<BuildPizza />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
