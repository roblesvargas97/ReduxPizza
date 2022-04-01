import React from "react";
import { FaSalesforce } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setIngredient, removeIngredient } from "../../Slices/pizzaSlice";
const BuildPizza = () => {
  const [stateSize, setStateSize] = React.useState("grande");

  const dispatch = useDispatch();

  const pizzaIngredients = useSelector((state) => state.pizza.ingredientsPizza);

  const clickIngredient = (e) => {
    const ingredient = e.target.value;
    const ingredientIsChecked = e.target.checked;
    if (!pizzaIngredients.includes(ingredient) && ingredientIsChecked) {
      dispatch(setIngredient(e.target.value));
    }
    if (!ingredientIsChecked) {
      dispatch(removeIngredient(ingredient));
    }
  };

  const onChangeSize = (e) => {
    const size = e.target.value;
    setStateSize(size);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(stateSize);
    console.log(separateArrayByComma(pizzaIngredients));
  };

  const separateArrayByComma = (array) => {
    const stringArray = array.join(", ");
    const lastCommaFromArray = stringArray.lastIndexOf(", ");
    if (lastCommaFromArray !== -1) {
      return (
        stringArray.substring(0, lastCommaFromArray) +
        " y" +
        stringArray.substring(lastCommaFromArray + 1)
      );
    } else {
      return stringArray;
    }
  };

  return (
    <div className="w-full min-h-[85vh] mt-[15vh] overflow-hidden p-5 bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 flex flex-col md:items-center lg:items-start lg:flex-row  justify-start space-y-5 lg:space-y-0">
      <section className="w-full">
        <h2 className="text-4xl md:text-7xl font-bold text-center text-white">
          Arma tu pizza
        </h2>
        <form onSubmit={(e) => onHandleSubmit(e)}>
          <div>
            <p>Seleccionar el tamaño de pizza:</p>
            <fieldset>
              <div>
                <input
                  type="radio"
                  name="pizza-size"
                  id="small"
                  value="chica"
                  onChange={(e) => onChangeSize(e)}
                />
                <label htmlFor="small">Chica</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="pizza-size"
                  id="medium"
                  value="mediana"
                  onChange={(e) => onChangeSize(e)}
                />
                <label htmlFor="medium">Mediana</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="pizza-size"
                  id="big"
                  value="grande"
                  onChange={(e) => onChangeSize(e)}
                  defaultChecked
                />
                <label htmlFor="big">Grande</label>
              </div>
            </fieldset>
            <p>Selecciona los ingredientes:</p>
            <fieldset>
              <div>
                <input
                  type="checkbox"
                  name="pizza-ingredient"
                  id="jamon"
                  onClick={(e) => clickIngredient(e)}
                  value="jamon"
                />
                <label htmlFor="jamon">Jamon</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="pizza-ingredient"
                  id="piña"
                  onClick={(e) => clickIngredient(e)}
                  value="piña"
                />
                <label htmlFor="piña">Piña</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="pizza-ingredient"
                  id="pepperonni"
                  onClick={(e) => clickIngredient(e)}
                  value="pepperonni"
                />
                <label htmlFor="pepperonni">Pepperonni</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="pizza-ingredient"
                  id="salami"
                  onClick={(e) => clickIngredient(e)}
                  value="salami"
                />
                <label htmlFor="salami">Salami</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="pizza-ingredient"
                  id="queso-crema"
                  onClick={(e) => clickIngredient(e)}
                  value="queso-crema"
                />
                <label htmlFor="queso-crema">Queso crema</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="pizza-ingredient"
                  id="queso-parmesano"
                  onClick={(e) => clickIngredient(e)}
                  value="queso-parmesano"
                />
                <label htmlFor="queso-parmesano">Queso parmesano</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="pizza-ingredient"
                  id="queso-cheddar"
                  onClick={(e) => clickIngredient(e)}
                  value="queso-cheddar"
                />
                <label htmlFor="queso-cheddar">Queso cheddar</label>
              </div>
            </fieldset>
            <button type="submit">Ordenar Pizza</button>
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
