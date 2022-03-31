import React from "react";

const BuildPizza = () => {
  return (
    <div className="w-full min-h-[85vh] mt-[15vh] overflow-hidden p-5 bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 flex flex-col md:items-center lg:items-start lg:flex-row  justify-start space-y-5 lg:space-y-0">
      <section className="w-full">
        <h2 className="text-4xl md:text-7xl font-bold text-center text-white">
          Arma tu pizza
        </h2>
        <form action="">
          <div>
            <p>Seleccionar el tamaño de pizza:</p>
            <fieldset>
              <div>
                <input type="radio" name="pizza-size" id="small" />
                <label htmlFor="small">Chica</label>
              </div>
              <div>
                <input type="radio" name="pizza-size" id="medium" />
                <label htmlFor="small">Mediana</label>
              </div>
              <div>
                <input type="radio" name="pizza-size" id="big" />
                <label htmlFor="small">Grande</label>
              </div>
            </fieldset>
            <p>Selecciona los ingredientes:</p>
            <fieldset>
              <div>
                <input type="checkbox" name="pizza-size" value="small" />
                <label htmlFor="small">Jamon</label>
              </div>
              <div>
                <input type="checkbox" name="pizza-size" value="medium" />
                <label htmlFor="small">Piña</label>
              </div>
              <div>
                <input type="checkbox" name="pizza-size" value="big" />
                <label htmlFor="small">Pepperonni</label>
              </div>
              <div>
                <input type="checkbox" name="pizza-size" value="big" />
                <label htmlFor="small">Salami</label>
              </div>
              <div>
                <input type="checkbox" name="pizza-size" value="big" />
                <label htmlFor="small">Queso crema</label>
              </div>
              <div>
                <input type="checkbox" name="pizza-size" value="big" />
                <label htmlFor="small">Queso parmesano</label>
              </div>
              <div>
                <input type="checkbox" name="pizza-size" value="big" />
                <label htmlFor="small">Queso cheddar</label>
              </div>
              <button type="submit" >Ordenar Pizza</button>
            </fieldset>
          </div>
        </form>
      </section>
      <section className="w-full bg-red-300">
          <img src="" alt="fsdf" />
      </section>
    </div>
  );
};

export default BuildPizza;
