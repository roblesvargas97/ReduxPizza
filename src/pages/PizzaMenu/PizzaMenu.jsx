import React from "react";
import PizzaCarousel from "../../components/PizzaCarousel/PizzaCarousel";
import PointsOrnament from "../../components/PointsOrnament/PointsOrnament";
import SwirlOrnament from "../../components/SwirlOrnament/SwirlOrnament";

const PizzaMenu = () => {
  return (
    <div className=" h-[85vh] overflow-hidden flex flex-col lg:flex-row lg:justify-between lg:items-center relative p-5 bg-gradient-to-r space-y-5 from-dark-blue via-dark-blue to-dark-blue-1">
      <SwirlOrnament styles=" hidden opacity-90 lg:block absolute w-96 top-[-60%] left-[-15%] " />
      <PointsOrnament styles=" hidden opacity-90 lg:block absolute w-40 bottom-[-9%] left-0 " />
      <h2 className=" text-4xl md:text-7xl font-bold text-white text-center ">
        Nuestro Menu
      </h2>
      <PizzaCarousel />
    </div>
  );
};

export default PizzaMenu;
