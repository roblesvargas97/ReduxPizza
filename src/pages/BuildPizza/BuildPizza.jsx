import React from "react";
import { FaSalesforce } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setIngredient, removeIngredient } from "../../Slices/pizzaSlice";
import VisualizationPizza from "./VisualizationPizza/VisualizationPizza";
import ArmasteTuPizza from "../../assets/images/ArmasteTuPizza.png";
const BuildPizza = () => {
  const [stateSize, setStateSize] = React.useState("Grande");
  const [statePrice, setStatePrice] = React.useState(135);
  const [stateQuantify, setStateQuantify] = React.useState(1);

  const dispatch = useDispatch();

  const pizzaIngredients = useSelector((state) => state.pizza.ingredientsPizza);

  const clickIngredient = (e) => {
    const ingredient = e.target.value;
    const ingredientIsChecked = e.target.checked;
    if (!pizzaIngredients.includes(ingredient) && ingredientIsChecked) {
      switch (e.target.value) {
        case "jamon":
          return (
            dispatch(setIngredient("Jamon")),
            setStatePrice((prevState) => prevState + 15)
          );
        case "piña":
          return (
            dispatch(setIngredient("Piña")),
            setStatePrice((prevState) => prevState + 15)
          );
        case "pepperonni":
          return (
            dispatch(setIngredient("Pepperonni")),
            setStatePrice((prevState) => prevState + 15)
          );
        case "salami":
          return (
            dispatch(setIngredient("Salami")),
            setStatePrice((prevState) => prevState + 15)
          );
        case "queso-crema":
          return (
            dispatch(setIngredient("Queso Crema")),
            setStatePrice((prevState) => prevState + 5)
          );
        case "queso-parmesano":
          return (
            dispatch(setIngredient("Queso Parmesano")),
            setStatePrice((prevState) => prevState + 5)
          );
        case "queso-cheddar":
          return (
            dispatch(setIngredient("Queso Cheddar")),
            setStatePrice((prevState) => prevState + 5)
          );
        default:
          break;
      }
    }
    if (!ingredientIsChecked) {
      switch (e.target.value) {
        case "jamon":
          return (
            dispatch(removeIngredient("Jamon")),
            setStatePrice((prevState) => prevState - 15)
          );
        case "piña":
          return (
            dispatch(removeIngredient("Piña")),
            setStatePrice((prevState) => prevState - 15)
          );
        case "pepperonni":
          return (
            dispatch(removeIngredient("Pepperonni")),
            setStatePrice((prevState) => prevState - 15)
          );
        case "salami":
          return (
            dispatch(removeIngredient("Salami")),
            setStatePrice((prevState) => prevState - 15)
          );
        case "queso-crema":
          return (
            dispatch(removeIngredient("Queso Crema")),
            setStatePrice((prevState) => prevState - 5)
          );
        case "queso-parmesano":
          return (
            dispatch(removeIngredient("Queso Parmesano")),
            setStatePrice((prevState) => prevState - 5)
          );
        case "queso-cheddar":
          return (
            dispatch(removeIngredient("Queso Cheddar")),
            setStatePrice((prevState) => prevState - 5)
          );
        default:
          break;
      }
    }
  };

  const onChangeSize = (e) => {
    const size = e.target.value;
    switch (size) {
      case "grande":
        return setStateSize("Grande"), setStatePrice(135);
      case "chica":
        return setStateSize("Chica"), setStatePrice(70);
      case "mediana":
        return setStateSize("Mediana"), setStatePrice(95);
      default:
        break;
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const objectPizza = {
      name: "Arma tu pizza",
      img: ArmasteTuPizza,
      ingredients: pizzaIngredients,
      price: statePrice,
      size: stateSize,
      quantity: stateQuantify,
    };
    console.log(objectPizza);
  };

  const addQuantify = () => {
    if (stateQuantify <= 4) {
      setStateQuantify((prevVal) => prevVal + 1);
    }
  };

  const sustractQuantify = () => {
    if (stateQuantify >= 2) {
      setStateQuantify((prevVal) => prevVal - 1);
    }
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
      <section className="w-full min-w-[320px] ">
        <h2 className="text-4xl md:text-7xl lg:text-6xl font-bold text-center text-white">
          Arma tu pizza
        </h2>
        <form onSubmit={(e) => onHandleSubmit(e)}>
          <div className=" space-y-5" >
            <p className="text-2xl md:text-5xl lg:text-2xl font-bold text-white text-center ">
              Selecciona el tamaño de pizza:
            </p>
            <fieldset className="px-5 flex w-full justify-between " >
              <div>
                <input
                  type="radio"
                  name="pizza-size"
                  id="small"
                  value="chica"
                  onChange={(e) => onChangeSize(e)}
                />
                <label className="text-xl md:text-3xl lg:text-xl text-white" htmlFor="small">Chica</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="pizza-size"
                  id="medium"
                  value="mediana"
                  onChange={(e) => onChangeSize(e)}
                />
                <label className="text-xl md:text-3xl lg:text-xl text-white" htmlFor="medium">Mediana</label>
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
                <label className="text-xl md:text-3xl lg:text-xl text-white" htmlFor="big">Grande</label>
              </div>
            </fieldset>
            <p className="text-2xl md:text-5xl lg:text-2xl font-bold text-white text-center ">
              Selecciona los ingredientes:
            </p>
            <fieldset className="px-10 grid grid-cols-2">
              <div>
                <div>
                  <input
                    type="checkbox"
                    name="pizza-ingredient"
                    id="jamon"
                    onClick={(e) => clickIngredient(e)}
                    value="jamon"
                  />
                  <label className="text-xl md:text-3xl lg:text-xl text-sky-200" htmlFor="jamon">Jamon</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="pizza-ingredient"
                    id="piña"
                    onClick={(e) => clickIngredient(e)}
                    value="piña"
                  />
                  <label className="text-xl md:text-3xl lg:text-xl text-sky-200" htmlFor="piña">Piña</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="pizza-ingredient"
                    id="pepperonni"
                    onClick={(e) => clickIngredient(e)}
                    value="pepperonni"
                  />
                  <label className="text-xl md:text-3xl lg:text-xl text-sky-200" htmlFor="pepperonni">Pepperonni</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="pizza-ingredient"
                    id="salami"
                    onClick={(e) => clickIngredient(e)}
                    value="salami"
                  />
                  <label className="text-xl md:text-3xl lg:text-xl text-sky-200" htmlFor="salami">Salami</label>
                </div>
              </div>
              <div>
                <div>
                  <input
                    type="checkbox"
                    name="pizza-ingredient"
                    id="queso-crema"
                    onClick={(e) => clickIngredient(e)}
                    value="queso-crema"
                  />
                  <label className="text-xl md:text-3xl lg:text-xl text-sky-200" htmlFor="queso-crema">Queso crema</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="pizza-ingredient"
                    id="queso-parmesano"
                    onClick={(e) => clickIngredient(e)}
                    value="queso-parmesano"
                  />
                  <label className="text-xl md:text-3xl lg:text-xl text-sky-200" htmlFor="queso-parmesano">Queso parmesano</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="pizza-ingredient"
                    id="queso-cheddar"
                    onClick={(e) => clickIngredient(e)}
                    value="queso-cheddar"
                  />
                  <label className="text-xl md:text-3xl lg:text-xl text-sky-200" htmlFor="queso-cheddar">Queso cheddar</label>
                </div>
              </div>
            </fieldset>
            <div>
              <p className="text-2xl md:text-5xl lg:text-2xl font-bold text-white text-center" >Cantidad</p>
              <div>
                <button type="button" onClick={addQuantify}>
                  +
                </button>
                <span>{stateQuantify}</span>
                <button type="button" onClick={sustractQuantify}>
                  -
                </button>
              </div>
            </div>
            <button type="submit">Ordenar Pizza</button>
          </div>
        </form>
      </section>
      <section className="w-full">
        <VisualizationPizza />
      </section>
    </div>
  );
};

export default BuildPizza;
