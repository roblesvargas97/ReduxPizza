import React from "react";
import InputForm from "./InputForm/InputForm";
import PointsOrnament from "../../components/PointsOrnament/PointsOrnament";
import { setInfoClient } from "../../Slices/pizzaSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const PurchaseForm = () => {
  const [name, setName] = React.useState("");
  const [nameEmpty, setNameEmpty] = React.useState(false);
  const [lastName, setLastName] = React.useState("");
  const [lastNameEmpty, setLastNameEmpty] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [emailEmpty, setEmailEmpty] = React.useState(false);
  const [numberPhone, setNumberPhone] = React.useState("");
  const [numberPhoneEmpty, setNumberPhoneEmpty] = React.useState(false);
  const [direction, setDirection] = React.useState("");
  const [directionEmpty, setDirectionEmpty] = React.useState(false);
  const [city, setCity] = React.useState("");
  const [cityEmpty, setCityEmpty] = React.useState(false);
  const [cp, setCp] = React.useState("");
  const [cpEmpty, setCpEmpty] = React.useState(false);
  const [error, setError] = React.useState(false);

  const dispatch = useDispatch();
  const history = useNavigate();
  const shoppingCart = useSelector((state) => state.pizza.pizzaShoppingCart);

  React.useEffect(() => {
    if (shoppingCart.length === 0) {
      history("/");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      lastName === "" ||
      email === "" ||
      numberPhone === "" ||
      direction === "" ||
      city === "" ||
      cp === ""
    ) {
      name === "" ? setNameEmpty(true) : setNameEmpty(false);
      lastName === "" ? setLastNameEmpty(true) : setLastNameEmpty(false);
      email === "" ? setEmailEmpty(true) : setEmailEmpty(false);
      numberPhone === ""
        ? setNumberPhoneEmpty(true)
        : setNumberPhoneEmpty(false);
      direction === "" ? setDirectionEmpty(true) : setDirectionEmpty(false);
      city === "" ? setCityEmpty(true) : setCityEmpty(false);
      cp === "" ? setCpEmpty(true) : setCpEmpty(false);
      setError(true);
      return;
    }
    setError(false);
    const infoPurchase = {
      name,
      lastName,
      email,
      numberPhone,
      direction,
      city,
      cp,
    };
    dispatch(setInfoClient(infoPurchase));
    history("/order-finished");
  };

  if (error) {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }

  return (
    <div className=" relative min-w-[320px] p-5 min-h-[85vh]  bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 flex flex-col justify-center items-center space-y-5">
      <PointsOrnament
        styles="  hidden absolute lg:block  lg:top-[0] animate-pulse   lg:right-[0] lg:w-96 lg:h-96  "
        fillColor="#fff"
      />
      <PointsOrnament
        styles="  hidden absolute lg:block  lg:bottom-0 lg:left-0 lg:w-96 lg:h-96 animate-pulse "
        fillColor="#fff"
      />
      <h1 className="text-4xl md:text-7xl lg:text-6xl font-bold text-center text-white">
        Formulario de Compra
      </h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`rounded-lg border-2 p-5 w-full md:w-[50%] lg:w-[30%] shadow-2xl h-auto bg-white-glass ${
          error ? " border-red-500" : "border-blue"
        }`}
      >
        <div className=" w-full flex flex-col items-center space-y-4">
          <h2 className=" text-2xl text-center font-bold text-white">
            Informacion
          </h2>
          <InputForm
            handler={setName}
            handlerState={name}
            idInput={"name"}
            labelText={"Nombre"}
            typeInput={"text"}
            regex={/[a-z]{4,}/}
            errorMessage="El nombre es muy corto."
            empty={nameEmpty}
            setEmpty={setNameEmpty}
          />
          <InputForm
            handler={setLastName}
            handlerState={lastName}
            idInput={"lastName"}
            labelText={"Apellidos"}
            typeInput={"text"}
            regex={/[a-z]{4,}/}
            errorMessage="El apellido es muy corto."
            empty={lastNameEmpty}
            setEmpty={setLastNameEmpty}
          />
          <InputForm
            handler={setEmail}
            handlerState={email}
            idInput={"email"}
            labelText={"Correo Electronico"}
            typeInput={"email"}
            regex={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
            errorMessage="El email no es valido"
            empty={emailEmpty}
            setEmpty={setEmailEmpty}
          />
          <InputForm
            handler={setNumberPhone}
            handlerState={numberPhone}
            idInput={"telephone"}
            labelText={"Telefono"}
            typeInput={"number"}
            regex={/^[0-9]{10,10}$/}
            errorMessage="El telefono no es valido"
            empty={numberPhoneEmpty}
            setEmpty={setNumberPhoneEmpty}
          />
          <h2 className=" text-2xl text-center font-bold text-white">
            Dirección
          </h2>
          <InputForm
            handler={setDirection}
            handlerState={direction}
            idInput={"direction"}
            labelText={"Direccion"}
            typeInput={"text"}
            regex={/^[\w\s]{10,}$/}
            errorMessage="La direccion no es valida"
            empty={directionEmpty}
            setEmpty={setDirectionEmpty}
          />
          <InputForm
            handler={setCity}
            handlerState={city}
            idInput={"city"}
            labelText={"Ciudad"}
            typeInput={"text"}
            regex={/^[A-z\s]{4,}$/}
            errorMessage="La ciudad no es valida."
            empty={cityEmpty}
            setEmpty={setCityEmpty}
          />
          <InputForm
            handler={setCp}
            handlerState={cp}
            idInput={"cp"}
            labelText={"Codigo Postal"}
            typeInput={"number"}
            regex={/^[0-9]{5,5}$/}
            errorMessage="El codigo postal no es valido."
            empty={cpEmpty}
            setEmpty={setCpEmpty}
          />
          {error && (
            <span className=" w-[85%] animate-rotateAndShow2 px-3 py-2 h-auto text-center rounded-lg bg-red-500 text-xl font-bold  text-white hover:scale-105 transition-all">
              Los campos son requeridos
            </span>
          )}
          <input
            className=" cursor-pointer px-3 py-2 w-auto h-10 md:h-16 lg:h-10 rounded-lg bg-sky-200 text-xl font-bold text-dark-blue hover:scale-105 transition-all"
            type="submit"
            value="Finalizar Pedido"
          />
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;
