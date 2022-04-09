import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setIngredient,
  removeIngredient,
  addPizzaToShoppingCart,
  emptyIngredientsPizza,
} from "../../Slices/pizzaSlice";
import VisualizationPizza from "./VisualizationPizza/VisualizationPizza";
import ArmasteTuPizza from "../../assets/images/ArmasteTuPizza.png";
import "./styles.css";
const BuildPizza = () => {
  const [stateSize, setStateSize] = React.useState("Grande");
  const [statePrice, setStatePrice] = React.useState(135);
  const [stateQuantify, setStateQuantify] = React.useState(1);
  const [stateIngredientsFormat, setStateIngredientsFormat] =
    React.useState("");
  const [stateFinalPrice, setStateFinalPrice] = React.useState(0);
  const [stateIngredientsPrice, setStateIngredientsPrice] = React.useState(0);

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
            setStatePrice((prevState) => prevState + 15),
            setStateIngredientsPrice((prevState) => prevState + 15)
          );
        case "piña":
          return (
            dispatch(setIngredient("Piña")),
            setStatePrice((prevState) => prevState + 15),
            setStateIngredientsPrice((prevState) => prevState + 15)
          );
        case "pepperonni":
          return (
            dispatch(setIngredient("Pepperonni")),
            setStatePrice((prevState) => prevState + 15),
            setStateIngredientsPrice((prevState) => prevState + 15)
          );
        case "salami":
          return (
            dispatch(setIngredient("Salami")),
            setStatePrice((prevState) => prevState + 15),
            setStateIngredientsPrice((prevState) => prevState + 15)
          );
        case "queso-crema":
          return (
            dispatch(setIngredient("Queso Crema")),
            setStatePrice((prevState) => prevState + 5),
            setStateIngredientsPrice((prevState) => prevState + 5)
          );
        case "queso-parmesano":
          return (
            dispatch(setIngredient("Queso Parmesano")),
            setStatePrice((prevState) => prevState + 5),
            setStateIngredientsPrice((prevState) => prevState + 5)
          );
        case "queso-cheddar":
          return (
            dispatch(setIngredient("Queso Cheddar")),
            setStatePrice((prevState) => prevState + 5),
            setStateIngredientsPrice((prevState) => prevState + 5)
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
            setStatePrice((prevState) => prevState - 15),
            setStateIngredientsPrice((prevState) => prevState - 15)
          );
        case "piña":
          return (
            dispatch(removeIngredient("Piña")),
            setStatePrice((prevState) => prevState - 15),
            setStateIngredientsPrice((prevState) => prevState - 15)
          );
        case "pepperonni":
          return (
            dispatch(removeIngredient("Pepperonni")),
            setStatePrice((prevState) => prevState - 15),
            setStateIngredientsPrice((prevState) => prevState - 15)
          );
        case "salami":
          return (
            dispatch(removeIngredient("Salami")),
            setStatePrice((prevState) => prevState - 15),
            setStateIngredientsPrice((prevState) => prevState - 15)
          );
        case "queso-crema":
          return (
            dispatch(removeIngredient("Queso Crema")),
            setStatePrice((prevState) => prevState - 5),
            setStateIngredientsPrice((prevState) => prevState - 5)
          );
        case "queso-parmesano":
          return (
            dispatch(removeIngredient("Queso Parmesano")),
            setStatePrice((prevState) => prevState - 5),
            setStateIngredientsPrice((prevState) => prevState - 5)
          );
        case "queso-cheddar":
          return (
            dispatch(removeIngredient("Queso Cheddar")),
            setStatePrice((prevState) => prevState - 5),
            setStateIngredientsPrice((prevState) => prevState - 5)
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
        return (
          setStateSize("Grande"), setStatePrice(135 + stateIngredientsPrice)
        );
      case "chica":
        return setStateSize("Chica"), setStatePrice(70 + stateIngredientsPrice);
      case "mediana":
        return (
          setStateSize("Mediana"), setStatePrice(95 + stateIngredientsPrice)
        );
      default:
        break;
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const objectPizza = {
      name: "Arma tu pizza",
      img: ArmasteTuPizza,
      id: Date.now(),
      ingredients: pizzaIngredients,
      price: statePrice,
      finalPrice: stateFinalPrice,
      size: stateSize,
      quantity: stateQuantify,
    };
    dispatch(addPizzaToShoppingCart(objectPizza));
    e.target.reset();
    setStateSize("Grande");
    setStatePrice(135);
    setStateQuantify(1);
    setStateFinalPrice(0);
    dispatch(emptyIngredientsPizza());
  };

  const addQuantify = () => {
    setStateQuantify((prevVal) => prevVal + 1);
  };

  const sustractQuantify = () => {
    setStateQuantify((prevVal) => prevVal - 1);
  };

  const separateArrayByComma = (array) => {
    const stringArray = array.join(", ");
    const lastCommaFromArray = stringArray.lastIndexOf(", ");
    if (lastCommaFromArray !== -1) {
      return (
        stringArray.substring(0, lastCommaFromArray) +
        " y" +
        stringArray.substring(lastCommaFromArray + 1) +
        "."
      );
    } else {
      return stringArray;
    }
  };

  React.useEffect(
    () => setStateIngredientsFormat(separateArrayByComma(pizzaIngredients)),
    [pizzaIngredients]
  );

  React.useEffect(() => {
    let actualPrice = statePrice;
    setStateFinalPrice(stateQuantify * actualPrice);
  }, [stateQuantify, stateSize, pizzaIngredients]);

  React.useEffect(() => {
    setStateSize("Grande");
    setStatePrice(135);
    setStateQuantify(1);
    setStateFinalPrice(0);
    dispatch(emptyIngredientsPizza());
  }, []);

  return (
    <div className="w-full min-h-[85vh] overflow-hidden p-5 bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 flex flex-col md:items-center lg:items-start lg:flex-row  justify-center space-y-5 lg:space-y-0" id="build-pizza">
      <section className="w-full lg:w-[50%] lg:min-h-[75vh] min-w-[320px] flex flex-col justify-center items-center ">
        <h2 className="text-4xl md:text-7xl lg:text-6xl font-bold text-center text-white">
          Arma tu pizza
        </h2>
        <form
          className=" group mt-3 space-y-3 md:space-y-5 lg:space-y-3 flex flex-col items-center border-2 bg-white-glass p-3 hover:border-white border-blue hover:bg-sky-500 transition-all duration-300 rounded-lg"
          onSubmit={(e) => onHandleSubmit(e)}
        >
          <p className=" group-hover:text-dark-blue text-xl md:text-4xl lg:text-xl font-bold text-white text-center ">
            Selecciona el tamaño de pizza:
          </p>
          <fieldset className="px-5 flex w-full justify-between text-sky-200 group-hover:text-dark-blue font-normal ">
            <div className=" flex justify-center items-center">
              <input
                type="radio"
                name="pizza-size"
                className=" cursor-pointer mr-1"
                id="big"
                value="grande"
                onChange={(e) => onChangeSize(e)}
                defaultChecked
              />
              <label
                className=" text-lg md:text-3xl lg:text-lg cursor-pointer"
                htmlFor="big"
              >
                Grande
              </label>
            </div>
            <div className=" flex justify-center items-center">
              <input
                type="radio"
                name="pizza-size"
                className=" cursor-pointer mr-1"
                id="medium"
                value="mediana"
                onChange={(e) => onChangeSize(e)}
              />
              <label
                className=" text-lg md:text-3xl lg:text-lg cursor-pointer"
                htmlFor="medium"
              >
                Mediana
              </label>
            </div>
            <div className=" flex justify-center items-center">
              <input
                type="radio"
                name="pizza-size"
                className=" cursor-pointer mr-1"
                id="small"
                value="chica"
                onChange={(e) => onChangeSize(e)}
              />
              <label
                className=" text-lg md:text-3xl lg:text-lg cursor-pointer"
                htmlFor="small"
              >
                Chica
              </label>
            </div>
          </fieldset>
          <p className="group-hover:text-dark-blue text-xl md:text-4xl lg:text-xl font-bold text-white text-center ">
            Selecciona los ingredientes:
          </p>
          <fieldset className="flex flex-wrap space-x-5 md:space-x-10 lg:space-x-5 justify-center font-normal text-sky-200 group-hover:text-dark-blue">
            <div className=" flex justify-center items-center">
              <input
                type="checkbox"
                name="pizza-ingredient"
                className=" cursor-pointer mr-1"
                id="jamon"
                onClick={(e) => clickIngredient(e)}
                value="jamon"
              />
              <label
                className="text-lg md:text-3xl lg:text-lg cursor-pointer"
                htmlFor="jamon"
              >
                Jamon
              </label>
            </div>
            <div className=" flex justify-center items-center">
              <input
                type="checkbox"
                name="pizza-ingredient"
                className=" cursor-pointer mr-1"
                id="piña"
                onClick={(e) => clickIngredient(e)}
                value="piña"
              />
              <label
                className="text-lg md:text-3xl lg:text-lg cursor-pointer"
                htmlFor="piña"
              >
                Piña
              </label>
            </div>
            <div className=" flex justify-center items-center">
              <input
                type="checkbox"
                name="pizza-ingredient"
                className=" cursor-pointer mr-1"
                id="pepperonni"
                onClick={(e) => clickIngredient(e)}
                value="pepperonni"
              />
              <label
                className="text-lg md:text-3xl lg:text-lg cursor-pointer"
                htmlFor="pepperonni"
              >
                Pepperonni
              </label>
            </div>
            <div className=" flex justify-center items-center">
              <input
                type="checkbox"
                name="pizza-ingredient"
                className=" cursor-pointer mr-1"
                id="salami"
                onClick={(e) => clickIngredient(e)}
                value="salami"
              />
              <label
                className="text-lg md:text-3xl lg:text-lg cursor-pointer"
                htmlFor="salami"
              >
                Salami
              </label>
            </div>
            <div className=" flex justify-center items-center">
              <input
                type="checkbox"
                name="pizza-ingredient"
                className=" cursor-pointer mr-1"
                id="queso-crema"
                onClick={(e) => clickIngredient(e)}
                value="queso-crema"
              />
              <label
                className="text-lg md:text-3xl lg:text-lg cursor-pointer"
                htmlFor="queso-crema"
              >
                Queso crema
              </label>
            </div>
            <div className=" flex justify-center items-center">
              <input
                type="checkbox"
                name="pizza-ingredient"
                className=" cursor-pointer mr-1"
                id="queso-parmesano"
                onClick={(e) => clickIngredient(e)}
                value="queso-parmesano"
              />
              <label
                className="text-lg md:text-3xl lg:text-lg cursor-pointer"
                htmlFor="queso-parmesano"
              >
                Queso parmesano
              </label>
            </div>
            <div className=" flex justify-center items-center">
              <input
                type="checkbox"
                name="pizza-ingredient"
                className=" cursor-pointer mr-1"
                id="queso-cheddar"
                onClick={(e) => clickIngredient(e)}
                value="queso-cheddar"
              />
              <label
                className="text-lg md:text-3xl lg:text-lg cursor-pointer"
                htmlFor="queso-cheddar"
              >
                Queso cheddar
              </label>
            </div>
          </fieldset>
          <div className=" space-y-3 lg:space-y-1">
            <p className=" group-hover:text-dark-blue text-xl md:text-4xl lg:text-xl font-bold text-white text-center">
              Cantidad
            </p>
            <div className=" flex justify-center items-center">
              <button
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                disabled={stateQuantify >= 5}
                className=" w-10 h-10 md:w-16 md:h-16 lg:w-10 lg:h-10 text-lg md:text-3xl lg:text-lg text-sky-200 font-light bg-dark-blue-1 rounded-lg border-2 border-sky-200  active:scale-75 transition-all duration-300 disabled:opacity-40 disabled:bg-gray-500 disabled:cursor-not-allowed"
                type="button"
                onClick={addQuantify}
              >
                +
              </button>
              <span className=" w-10 h-10 md:w-16 md:h-16 lg:w-10 lg:h-10 text-lg md:text-3xl lg:text-lg rounded-lg flex flex-col justify-center items-center text-white border-2 border-sky-200">
                {stateQuantify}
              </span>
              <button
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                disabled={stateQuantify === 1}
                className=" w-10 h-10 text-lg md:w-16 md:h-16 lg:w-10 lg:h-10 text-sky-200 font-light bg-dark-blue-1 rounded-lg border-2 border-sky-200    active:scale-75 transition-all duration-300 disabled:opacity-40 disabled:bg-gray-500 disabled:cursor-not-allowed"
                type="button"
                onClick={sustractQuantify}
              >
                -
              </button>
            </div>
          </div>
          <div className="">
            <button
              data-mdb-ripple="true"
              data-mdb-ripple-color="info"
              className=" group-hover:bg-dark-blue group-hover:text-white px-3 py-2 w-auto h-10 md:h-16 lg:h-10 rounded-lg bg-sky-200 text-xl md:text-4xl lg:text-xl font-bold text-dark-blue hover:scale-105 transition-all"
              type="submit"
            >
              Ordenar Pizza
            </button>
          </div>
        </form>
      </section>
      <section className="w-full lg:w-[50%] lg:min-h-[75vh] flex flex-col justify-center items-center ">
        <div className="w-full flex flex-col justify-center items-center space-y-3 md:space-y-5 lg:space-y-3">
          <div className=" flex lg:hidden w-full flex-col justify-center items-center">
            <p className="text-xl md:text-4xl lg:text-xl font-bold text-white">
              Ingredientes:
            </p>
            <p className="text-lg md:text-3xl lg:text-lg font-light text-sky-200 text-center ">
              {pizzaIngredients.length === 1
                ? "Aqui mostraremos tus ingredientes"
                : stateIngredientsFormat}
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center ">
            <p className="text-xl md:text-4xl lg:text-xl font-bold text-white">
              Precio:
            </p>
            <p className="text-lg md:text-3xl lg:text-lg font-light text-sky-200 ">
              ${stateFinalPrice} MXN.
            </p>
          </div>
        </div>
        <div className=" w-full flex justify-center">
          <VisualizationPizza />
        </div>
      </section>
    </div>
  );
};

export default BuildPizza;
