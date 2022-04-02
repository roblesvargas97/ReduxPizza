import React from "react";
import { useSelector } from "react-redux";
import Masa from "../../../assets/images/masa.png";
import Jamon from "../../../assets/images/Jamon.png";
import Cheddar from "../../../assets/images/Cheddar.png";
import Piña from "../../../assets/images/Piña.png";
import Salami from "../../../assets/images/Salami.png";
import Pepperonni from "../../../assets/images/Pepperonni.png";
import QuesoCrema from "../../../assets/images/QuesoCrema.png";
import QuesoParmesano from "../../../assets/images/QuesoParmesano.png";

const VisualizationPizza = () => {
  const ingredientsPizza = useSelector((state) => state.pizza.ingredientsPizza);

  return (
    <div className=" relative">
      <img className=" -z-10" src={Masa} alt="masa pizza" />
      {ingredientsPizza.includes("Pepperonni") === true && (
        <img className=" absolute top-0 left-0 z-10 " src={Pepperonni} alt="" />
      )}
      {ingredientsPizza.includes("Salami") === true && (
        <img className=" absolute top-0 left-0 z-10 " src={Salami} alt="" />
      )}
      {ingredientsPizza.includes("Queso Crema") === true && (
        <img className=" absolute top-0 left-0 z-10 " src={QuesoCrema} alt="" />
      )}
      {ingredientsPizza.includes("Queso Parmesano") === true && (
        <img
          className=" absolute top-0 left-0 z-10 "
          src={QuesoParmesano}
          alt=""
        />
      )}
      {ingredientsPizza.includes("Queso Cheddar") === true && (
        <img className=" absolute top-0 left-0 z-10 " src={Cheddar} alt="" />
      )}
      {ingredientsPizza.includes("Jamon") === true && (
        <img className=" absolute top-0 left-0 z-10 " src={Jamon} alt="" />
      )}
      {ingredientsPizza.includes("Piña") === true && (
        <img className=" absolute top-0 left-0 z-10 " src={Piña} alt="" />
      )}
    </div>
  );
};

export default VisualizationPizza;
