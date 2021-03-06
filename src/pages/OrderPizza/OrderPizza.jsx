import React from "react";
import { useSelector } from "react-redux";
import OrderPizzaItem from "./OrderPizzaItem/OrderPizzaItem";
import { useNavigate } from "react-router-dom";
import PointsOrnament from "../../components/PointsOrnament/PointsOrnament";

const OrderPizza = () => {
  const history = useNavigate();

  const shoppingCartState = useSelector(
    (state) => state.pizza.pizzaShoppingCart
  );

  React.useEffect(()=> {
    if(shoppingCartState.length === 0){
      history('/')
    }
  },[])

  const shoppingCartItemsPrice = shoppingCartState.reduce(
    (a, b) => a + Number(b.price * b.quantity),
    0
  );

  const handleClick = () => {
    history("/order-form");
  };

  return (
    <div className=" relative min-w-[320px] p-5 h-[85vh] bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 flex flex-col justify-center items-center space-y-5">
      <PointsOrnament
        styles="  hidden absolute lg:block  lg:top-[0] animate-pulse   lg:right-[0] lg:w-96 lg:h-96  "
        fillColor="#fff"
      />
      <PointsOrnament
        styles="  hidden absolute lg:block  lg:bottom-0 lg:left-0 lg:w-96 lg:h-96 animate-pulse "
        fillColor="#fff"
      />
      <h2 className=" text-4xl md:text-7xl lg:text-6xl font-bold text-center text-white">
        Revisa tu pedido
      </h2>
      <div className=" w-full lg:w-[60%] border-2 rounded-l-lg rounded-none shadow-2xl relative h-[60vh] bg-white-glass border-blue   ">
        <div className=" custom-scroll2 h-[58vh] space-y-2 overflow-y-scroll p-2">
          {shoppingCartState.map((element, index) => (
            <OrderPizzaItem key={index} info={element} />
          ))}
        </div>
        <div className=" p-5 flex flex-col rounded-lg justify-center items-end absolute bottom-0 left-0 w-full h-10 bg-dark-blue text-white">
          <p className="">Precio Total: {shoppingCartItemsPrice} MXN </p>
        </div>
      </div>
      <button
        onClick={handleClick}
        className=" bg-sky-200 rounded-lg  px-3 py-2 text-xl lg:text-lg font-bold text-dark-blue hover:scale-105 transition-all"
      >
        Realizar compra
      </button>
    </div>
  );
};

export default OrderPizza;
