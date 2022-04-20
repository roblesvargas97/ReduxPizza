import React from "react";
import pizzaAbout from "../../assets/images/pizzaAbout";
import PointsOrnament from "../../components/PointsOrnament/PointsOrnament";
import SwirlOrnament from "../../components/SwirlOrnament/SwirlOrnament";
import { useSelector } from "react-redux";

const About = () => {
  const darkModeState = useSelector((state) => state.ui.darkMode);
  return (
    <div
      className={` ${
        !darkModeState ? "bg-white" : "bg-slate-900"
      } w-full min-h-[85vh] overflow-hidden p-5 flex flex-col md:items-center lg:items-center lg:flex-row  justify-center space-y-5 lg:space-y-0 `}
      id="info"
    >
      <section className=" md:min-h-[40vh] lg:h-[80vh] relative lg:w-[50%]  flex flex-col items-center lg:items-start space-y-2">
        <SwirlOrnament
          styles=" absolute md:h-96 md:w-96 lg:top-[-250px] lg:left-[calc(100%_-_192px)] md:left-[calc(50%_-_192px)] md:top-[-250px]  hidden md:block  "
          fillColor={`${!darkModeState ? "#92b1fd" : "#92B1FD"}`}
        />
        <PointsOrnament
          styles=" absolute h-60 w-60 lg:bottom-0 lg:left-[0] md:bottom-[-48vh] md:left-[0]  hidden md:block  "
          fillColor={`${!darkModeState ? "#92b1fd" : "#92B1FD"}`}
        />
        <PointsOrnament
          styles=" absolute h-60 lg:bottom-[0] lg:right-[-100%] md:bottom-[-48vh] md:right-[0] hidden md:block  "
          fillColor={`${!darkModeState ? "#92b1fd" : "#92B1FD"}`}
        />
        <h2
          className={` ${
            !darkModeState ? " text-dark-blue" : "text-white"
          } text-4xl z-10 md:text-7xl lg:text-6xl font-bold text-center lg:text-left `}
        >
          Historia
        </h2>
        <p
          className={` ${
            !darkModeState ? " text-dark-blue" : "text-white"
          } w-[90%] h- z-10 text-xl md:text-3xl lg:text-2xl font-normal text-center lg:text-left`}
        >
          Redux pizza nacio con la finalidad de poner a prueba mis conocimientos
          de tailwind , react js y redux.
        </p>
        <img
          className=" w-60 lg:w-80 z-10 self-center"
          src={pizzaAbout}
          alt="Pizza"
        />
      </section>
      <section className=" md:min-h-[40vh] lg:h-[80vh] space-y-2 lg:w-[50%]  flex flex-col z-10">
        <h2
          className={` ${
            !darkModeState ? " text-dark-blue" : "text-white"
          } text-4xl md:text-7xl lg:text-6xl font-bold text-center `}
        >
          Informacion
        </h2>
        <article className=" space-y-2">
          <h3
            className={` ${
              !darkModeState ? " text-dark-blue" : "text-white"
            } text-2xl md:text-5xl lg:text-2xl font-bold text-left`}
          >
            Ubicacion:
          </h3>
          <p
            className={` ${
              !darkModeState ? " text-dark-blue" : "text-white"
            } text-xl md:text-3xl lg:text-xl font-normal text-center`}
          >
            Av 16 de Septiembre 120 B, San Juan, 54960 Tultepec, Méx.
          </p>
        </article>
        <article className=" space-y-2">
          <h3
            className={` ${
              !darkModeState ? " text-dark-blue" : "text-white"
            } text-2xl md:text-5xl lg:text-2xl font-bold text-left`}
          >
            Dias:
          </h3>
          <div className=" flex justify-between">
            <div
              className={` ${
                darkModeState
                  ? " text-dark-blue bg-white"
                  : "text-white bg-dark-blue"
              } h-10 w-10 md:h-16 md:w-16 lg:h-10 lg:w-10 flex justify-center items-center rounded-full text-xl md:text-3xl lg:text-xl font-bold shadow-sm shadow-black`}
            >
              L
            </div>
            <div
              className={` ${
                darkModeState
                  ? " text-dark-blue bg-white"
                  : "text-white bg-dark-blue"
              } h-10 w-10 md:h-16 md:w-16 lg:h-10 lg:w-10 flex justify-center items-center rounded-full text-xl md:text-3xl lg:text-xl font-bold shadow-sm shadow-black`}
            >
              M
            </div>
            <div
              className={` ${
                darkModeState
                  ? " text-dark-blue bg-white"
                  : "text-white bg-dark-blue"
              } h-10 w-10 md:h-16 md:w-16 lg:h-10 lg:w-10 flex justify-center items-center rounded-full text-xl md:text-3xl lg:text-xl font-bold shadow-sm shadow-black`}
            >
              M
            </div>
            <div
              className={` ${
                darkModeState
                  ? " text-dark-blue bg-white"
                  : "text-white bg-dark-blue"
              } h-10 w-10 md:h-16 md:w-16 lg:h-10 lg:w-10 flex justify-center items-center rounded-full text-xl md:text-3xl lg:text-xl font-bold shadow-sm shadow-black`}
            >
              J
            </div>
            <div
              className={` ${
                darkModeState
                  ? " text-dark-blue bg-white"
                  : "text-white bg-dark-blue"
              } h-10 w-10 md:h-16 md:w-16 lg:h-10 lg:w-10 flex justify-center items-center rounded-full text-xl md:text-3xl lg:text-xl font-bold shadow-sm shadow-black`}
            >
              V
            </div>
            <div
              className={` ${
                darkModeState
                  ? " text-dark-blue bg-white"
                  : "text-white bg-dark-blue"
              } h-10 w-10 md:h-16 md:w-16 lg:h-10 lg:w-10 flex justify-center items-center rounded-full text-xl md:text-3xl lg:text-xl font-bold shadow-sm shadow-black`}
            >
              S
            </div>
            <div
              className={` ${
                darkModeState
                  ? " text-dark-blue bg-white"
                  : "text-white bg-dark-blue"
              } h-10 w-10 md:h-16 md:w-16 lg:h-10 lg:w-10 flex justify-center items-center rounded-full text-xl md:text-3xl lg:text-xl font-bold shadow-sm shadow-black`}
            >
              D
            </div>
          </div>
        </article>
        <article className=" space-y-2">
          <h3
            className={` ${
              !darkModeState ? " text-dark-blue" : "text-white"
            } text-2xl md:text-5xl lg:text-2xl font-bold text-left`}
          >
            Horarios de Atencion:
          </h3>
          <p
            className={` ${
              !darkModeState ? " text-dark-blue" : "text-white"
            } text-xl md:text-3xl lg:text-xl font-normal text-left`}
          >
            11:00 de la mañana <br />
            10:00 de la noche.
          </p>
        </article>
      </section>
    </div>
  );
};

export default About;
