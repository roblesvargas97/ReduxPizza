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
    <div className=" relative w-[60%] h-[60%] hidden lg:block">
      <img className=" w-[100%] h-[100%] -z-10" src={Masa} alt="masa pizza" />
      {ingredientsPizza.includes("Pepperonni") === true && (
        <img
          className=" animate-rotateAndShow absolute w-[100%] h-[105%] top-0 left-0 z-10 "
          src={Pepperonni}
          alt="Pepperonni"
        />
      )}
      {ingredientsPizza.includes("Salami") === true && (
        <img
          className=" animate-rotateAndShow absolute w-[100%] h-[105%] top-0 left-0 z-10 "
          src={Salami}
          alt="Salami"
        />
      )}
      {ingredientsPizza.includes("Queso Crema") === true && (
        <img
          className=" animate-rotateAndShow absolute w-[100%] h-[105%] top-0 left-0 z-10 "
          src={QuesoCrema}
          alt="Queso Crema"
        />
      )}
      {ingredientsPizza.includes("Queso Parmesano") === true && (
        <img
          className=" animate-rotateAndShow absolute w-[100%] top-0 left-0 z-10 "
          src={QuesoParmesano}
          alt="Queso Parmesano"
        />
      )}
      {ingredientsPizza.includes("Queso Cheddar") === true && (
        <img
          className=" animate-rotateAndShow absolute w-[100%] h-[105%] top-0 left-0 z-10 "
          src={Cheddar}
          alt="Cheddar"
        />
      )}
      {ingredientsPizza.includes("Jamon") === true && (
        <img
          className=" animate-rotateAndShow absolute w-[100%] h-[105%] top-0 left-0 z-10 "
          src={Jamon}
          alt="Jamon"
        />
      )}
      {ingredientsPizza.includes("Piña") === true && (
        <img
          className=" animate-rotateAndShow absolute w-[100%] h-[105%] top-0 left-0 z-10 "
          src={Piña}
          alt="Piña"
        />
      )}
    </div>
  );
};

export default VisualizationPizza;
