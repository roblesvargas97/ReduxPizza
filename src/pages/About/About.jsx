import React from "react";
import pizzaAbout from "../../assets/images/pizzaAbout";

const About = () => {
  return (
    <div className="w-full min-h-[85vh] overflow-hidden p-5 bg-white flex flex-col lg:flex-row justify-center space-y-5 lg:space-y-0 ">
      <section className=" w-[50%] flex flex-col items-center lg:items-start space-y-2" >
        <h2 className=" text-4xl md:text-7xl lg:text-6xl text-dark-blue font-bold text-center lg:text-left ">
          Historia
        </h2>
        <p className="w-[90%] text-xl md:text-3xl lg:text-2xl text-dark-blue font-normal text-center lg:text-left">
          Redux pizza nacio con la finalidad de poner a prueba mis conocimientos
          de tailwind , react js y redux.
        </p>
        <img className=" w-60 lg:w-80 self-center" src={pizzaAbout} alt="Pizza" />
      </section>
      <section className=" space-y-2 w-[50%]">
        <h2 className=" text-4xl md:text-7xl lg:text-6xl text-dark-blue font-bold text-center ">
          Informacion
        </h2>
        <article className=" space-y-2" >
          <h3 className="text-2xl md:text-5xl lg:text-2xl text-dark-blue font-bold text-left">
            Ubicacion:
          </h3>
          <p className="text-xl md:text-3xl lg:text-xl font-normal text-center">
            Av 16 de Septiembre 120 B, San Juan, 54960 Tultepec, Méx.
          </p>
        </article>
        <article className=" space-y-2">
          <h3 className="text-2xl md:text-5xl lg:text-2xl text-dark-blue font-bold text-left">Dias:</h3>
          <div className=" flex justify-between">
            <div className=" h-10 w-10 md:h-16 md:w-16 lg:h-10 lg:w-10 flex justify-center items-center rounded-full bg-dark-blue text-xl md:text-3xl lg:text-xl font-bold text-white shadow-sm shadow-black">
              L
            </div>
            <div className=" h-10 w-10 md:h-16 md:w-16 lg:h-10 lg:w-10 flex justify-center items-center rounded-full bg-dark-blue text-xl md:text-3xl lg:text-xl font-bold text-white shadow-sm shadow-black">
              M
            </div>
            <div className=" h-10 w-10 md:h-16 md:w-16 lg:h-10 lg:w-10 flex justify-center items-center rounded-full bg-dark-blue text-xl md:text-3xl lg:text-xl font-bold text-white shadow-sm shadow-black">
              M
            </div>
            <div className=" h-10 w-10 md:h-16 md:w-16 lg:h-10 lg:w-10 flex justify-center items-center rounded-full bg-dark-blue text-xl md:text-3xl lg:text-xl font-bold text-white shadow-sm shadow-black">
              J
            </div>
            <div className=" h-10 w-10 md:h-16 md:w-16 lg:h-10 lg:w-10 flex justify-center items-center rounded-full bg-dark-blue text-xl md:text-3xl lg:text-xl font-bold text-white shadow-sm shadow-black">
              V
            </div>
            <div className=" h-10 w-10 md:h-16 md:w-16 lg:h-10 lg:w-10 flex justify-center items-center rounded-full bg-dark-blue text-xl md:text-3xl lg:text-xl font-bold text-white shadow-sm shadow-black">
              S
            </div>
            <div className=" h-10 w-10 md:h-16 md:w-16 lg:h-10 lg:w-10 flex justify-center items-center rounded-full bg-dark-blue text-xl md:text-3xl lg:text-xl font-bold text-white shadow-sm shadow-black">
              D
            </div>
          </div>
        </article>
        <article className=" space-y-2">
          <h3 className="text-2xl md:text-5xl lg:text-2xl text-dark-blue font-bold text-left">
            Horarios de Atencion:
          </h3>
          <p className="text-xl md:text-3xl lg:text-xl font-normal text-left">
            11:00 de la mañana <br />
            10:00 de la noche.
          </p>
        </article>
      </section>
    </div>
  );
};

export default About;
