import React from "react";
import { BsEmojiFrownFill } from "react-icons/bs";

const Page404 = () => {
  return (
    <div className="relative min-w-[320px] p-5 min-h-[85vh]  bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 flex flex-col justify-center items-center space-y-5">
      <div className=" w-full lg:w-[50%] flex flex-col justify-center items-center space-y-10">
        <h1 className="text-4xl md:text-7xl lg:text-6xl font-bold text-center text-white">
          Lo sentimos no encontramos esta pagina
        </h1>
        <BsEmojiFrownFill size={"150px"} color="#fff" className=" animate-rotateOrnament" />
      </div>
    </div>
  );
};

export default Page404;
