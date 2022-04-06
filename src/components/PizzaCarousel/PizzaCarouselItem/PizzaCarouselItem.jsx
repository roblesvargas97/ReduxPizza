import { FaCartPlus } from "react-icons/fa";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizzaToShoppingCart, increaseQuantityShoppinCart } from "../../../Slices/pizzaSlice";

const PizzaCarouselItem = ({ infoPizza }) => {
  const [statePizzaSize, setStatePizzaSize] = React.useState("");
  const [statePizzaPrice, setStatePizzaPrice] = React.useState("");
  const [statePizzaId, setStatePizzaId] = React.useState("");
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
      size: statePizzaSize,
      quantity: 1,
    };

    if (
      setStatePizzaSize === "" ||
      statePizzaPrice === "" ||
      statePizzaId === ""
    ) {
      return;
    }
    if (pizzaDoesNotExistInShoppingCart) {
      dispatch(addPizzaToShoppingCart(objectPizza));
    }else{
      dispatch(increaseQuantityShoppinCart(objectPizza.id));
    }
  };

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
          <button
            onClick={addPizzaToShoppingCartHandle}
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className=" h-10 w-10 flex justify-center items-center rounded-full cursor-pointer absolute top-[10px] left-[10px] text-white text-3xl"
          >
            <FaCartPlus />
          </button>
        </div>
        <div className=" h-[50%]  md:h-[40%] lg:h-[50%] bg-gradient-to-tr from-sky-500 via-sky-200 to-white space-y-3  rounded-b-lg p-2 flex flex-col justify-center items-center">
          <h4 className=" text-3xl md:text-xl font-bold text-dark-blue">
            {name}
          </h4>
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className=" w-44 h-12 flex justify-center items-center text-base font-light bg-dark-blue  rounded-lg text-white"
          >
            Ingredientes
          </button>
          <select
            onChange={handleOnChange}
            className="w-44 rounded-lg font-light text-base h-12 bg-dark-blue text-white focus:ring-4 ring-white outline-4 focus:outline-blue "
          >
            <option
              className=" text-center text-base font-light"
              value=""
              data-size=""
              data-id=""
            >
              Selecciona tu Pizza
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
