import { FaCartPlus } from "react-icons/fa";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPizzaToShoppingCart,
  increaseQuantityShoppinCart,
  calculatePriceAccordingToQuantity,
} from "../../../Slices/pizzaSlice";

const PizzaCarouselItem = ({ infoPizza }) => {
  const [statePizzaSize, setStatePizzaSize] = React.useState("");
  const [statePizzaPrice, setStatePizzaPrice] = React.useState("");
  const [statePizzaId, setStatePizzaId] = React.useState("");
  const [stateShowIngredients, setStateShowIngredients] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const { img, name, id, prices, ingredients } = infoPizza;

  const dispatch = useDispatch();
  const shoppingCartState = useSelector(
    (state) => state.pizza.pizzaShoppingCart
  );

  const handleOnChange = (e) => {
    const pizzaSelect = e.target.options[e.target.selectedIndex];
    const pizzaSize = pizzaSelect.getAttribute("data-size");
    const pizzaId = pizzaSelect.getAttribute("data-id");
    const pizzaPrice = pizzaSelect.value;
    setStatePizzaSize(pizzaSize);
    setStatePizzaId(pizzaId);
    setStatePizzaPrice(pizzaPrice);
    setShowAlert(false);
  };

  const addPizzaToShoppingCartHandle = () => {
    const pizzaDoesNotExistInShoppingCart =
      shoppingCartState.filter((element) => element.id === statePizzaId)
        .length === 0;

    const pizzaAlreadyExistInShoppingCart =
      shoppingCartState.filter((element) => element.id === statePizzaId)
        .length > 0;

    const objectPizza = {
      name: name,
      img: img,
      id: statePizzaId,
      ingredients: ingredients,
      price: statePizzaPrice,
      finalPrice: statePizzaPrice,
      size: statePizzaSize,
      quantity: 1,
    };

    if (
      setStatePizzaSize === "" ||
      statePizzaPrice === "" ||
      statePizzaId === ""
    ) {
      setShowAlert(true);
    } 

    if (pizzaDoesNotExistInShoppingCart) {
      dispatch(addPizzaToShoppingCart(objectPizza));
      dispatch(calculatePriceAccordingToQuantity(objectPizza.id));
    } else {
      dispatch(increaseQuantityShoppinCart(objectPizza.id));
      dispatch(calculatePriceAccordingToQuantity(objectPizza.id));
    }
  };

  const onShowIngredients = () => {
    setStateShowIngredients(!stateShowIngredients);
  };

  const onCloseShowIngredients = () => {
    setStateShowIngredients(false);
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

  const ingredientsFormat = separateArrayByComma(ingredients);

  return (
    <div className="main-container ">
      <div className=" w-[90%] h-[60vh] border-2 border-white rounded-lg relative shadow-lg shadow-white/50">
        <div className=" absolute top-0 left-0 w-full backdrop-blur h-[60%] rounded-t-lg bg-gradient-to-tl from-sky-500 via-transparent to-transparent -z-10"></div>
        <div className=" relative h-[50%] md:h-[60%] lg:h-[50%] flex flex-col justify-center items-center ">
          <img
            className=" object-scale-down h-60 md:h-80 lg:h-60 "
            src={img}
            alt=""
          />
          <article
            className={`${
              stateShowIngredients ? " animate-rotateAndShow2" : " opacity-0 "
            } flex flex-col justify-center items-center  rounded-t-lg duration-500 absolute h-full w-full overflow-hidden transition-all`}
          >
            <div className=" absolute py-5 px-7 w-full left-0 bg-transparent flex flex-col justify-center items-center z-[40]">
              <h3 className=" text-center font-bold text-white ">
                Ingredientes
              </h3>
              <p className=" text-center font-normal text-white">
                Deliciosa pizza compuesta por {ingredientsFormat}{" "}
              </p>
            </div>
            <button
              onClick={onCloseShowIngredients}
              className={`${
                stateShowIngredients ? "cursor-pointer" : " cursor-auto"
              } absolute top-2 right-2 group border-2 z-40 border-blue hover:border-blue bg-white-glass h-12 w-12 flex justify-center items-center rounded-lg transition-all text-white text-2xl`}
            >
              <div className=" flex items-center justify-center group-hover:bg-cyan-500 group-hover:animate-bounceButton rounded h-8 w-8 transition-all ">
                x
              </div>
            </button>
            <div className=" absolute top-0 left-0 h-full w-full bg-dark-blue/60 z-[0]"></div>
          </article>
          <button
            onClick={addPizzaToShoppingCartHandle}
            className=" group border-2 z-40 border-transparent hover:border-blue bg-white-glass h-12 w-12 flex justify-center items-center rounded-lg cursor-pointer absolute top-[5px] left-[5px] transition-all text-white text-2xl"
          >
            <div className=" flex items-center justify-center group-hover:bg-cyan-500 group-hover:animate-bounceButton rounded h-8 w-8 transition-all ">
              <FaCartPlus />
            </div>
          </button>
        </div>
        <div className=" h-[50%]  md:h-[40%] lg:h-[50%] bg-gradient-to-tr from-sky-500 via-sky-200 to-white space-y-3  rounded-b-lg p-2 flex flex-col justify-center items-center">
          <h4 className=" text-3xl md:text-xl font-bold text-dark-blue">
            {name}
          </h4>
          <button
            onClick={onShowIngredients}
            className=" w-44 h-12 hover:bg-blue hover:border-dark-blue hover:text-dark-blue hover:font-bold border-2 border-transparent flex justify-center items-center text-base font-light bg-dark-blue  rounded-lg text-white transition-all"
          >
            Ingredientes
          </button>
          <select
            onChange={handleOnChange}
            className={` ${showAlert? 'bg-green-500 ring-4 ring-green-800 ':'bg-dark-blue '} w-44 rounded-lg hover:bg-blue  hover:border-dark-blue hover:text-dark-blue hover:font-bold  font-light text-base h-12 text-white focus:ring-4 ring-white outline-4 focus:outline-blue transition-all `}
          >
            <option
              className=" text-center text-base font-light"
              value=""
              data-size=""
              data-id=""
            >
              Tamaños Precios
            </option>

            {prices.map((element, index) => (
              <option
                value={element[1]}
                data-size={element[0]}
                data-id={element[2]}
                key={index}
                className=" text-center text-base font-light"
              >{`${element[0]} $${element[1]}MXN`}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PizzaCarouselItem;
