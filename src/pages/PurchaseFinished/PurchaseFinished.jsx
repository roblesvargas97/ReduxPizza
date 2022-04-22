import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { setInfoClient } from "../../Slices/pizzaSlice";
import { useNavigate } from "react-router-dom";

const PurchaseFinished = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [currentClientInfo, setCurrentClientInfo] = React.useState("");
  const clientInfo = useSelector((state) => state.pizza.infoOrderClient);

  React.useEffect(() => {
    if (clientInfo.name === undefined) {
      history("/");
    }

    setCurrentClientInfo(clientInfo);
    dispatch(setInfoClient({}));
  }, []);

  return (
    <div className=" relative min-w-[320px] p-5 min-h-[85vh]  bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 flex flex-col justify-center items-center space-y-5">
      <div className=" w-full lg:w-[50%] flex flex-col justify-center items-center space-y-10">
        <h2 className=" text-4xl md:text-7xl lg:text-6xl font-bold text-center text-white">
          {`!Gracias¡ ${currentClientInfo.name} tu pedido esta en camino. `}
        </h2>
        <BsFillEmojiLaughingFill size={"150px"} color="#fff" />
      </div>
    </div>
  );
};

export default PurchaseFinished;
