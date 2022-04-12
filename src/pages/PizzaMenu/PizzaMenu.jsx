import React from "react";
import PizzaCarousel from "../../components/PizzaCarousel/PizzaCarousel";
import PointsOrnament from "../../components/PointsOrnament/PointsOrnament";
import SwirlOrnament from "../../components/SwirlOrnament/SwirlOrnament";

const PizzaMenu = () => {
  return (
    <div className=" h-[85vh] overflow-hidden flex flex-col lg:flex-row lg:justify-between lg:items-center relative p-5 bg-gradient-to-r space-y-5 from-dark-blue via-dark-blue to-dark-blue-1" id="menu">
      <SwirlOrnament
        styles=" hidden opacity-90 md:block absolute md:h-48 md:w-48 md:top-[-96px] md:left-[-96px] lg:h-96 lg:w-96 lg:top-[-192px] lg:left-[-192px] "
        fillColor="white"
      />
      <PointsOrnament
        styles=" hidden opacity-90 md:block lg:h-52 lg:w-52 absolute md:h-48 md:w-48 md:bottom-[10px] md:right-[10px] lg:bottom-[10px] lg:left-0 "
        fillColor="white"
      />
      <h2 className=" text-4xl md:text-7xl font-bold text-white text-center ">
        Nuestro Menu
      </h2>
      <PizzaCarousel />
    </div>
  );
};

export default PizzaMenu;
