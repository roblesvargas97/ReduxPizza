import React, { useState } from "react";
import InputForm from "./InputForm/InputForm";

const PurchaseForm = () => {
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [numberPhone, setNumberPhone] = React.useState("");
  const [direction, setDirection] = React.useState("");
  const [city, setCity] = React.useState("");
  const [cp, setCp] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNumberPhone = (e) => {
    setNumberPhone(e.target.value);
  };

  const handleDirection = (e) => {
    setDirection(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleCp = (e) => {
    setCp(e.target.value);
  };

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
    console.log(infoPurchase);
  };

  if (error) {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }

  return (
    <div className=" relative min-w-[320px] p-5 min-h-[85vh]  bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 flex flex-col justify-center items-center space-y-5">
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
            handler={handleName}
            handlerState={name}
            idInput={"name"}
            labelText={"Nombre"}
            typeInput={"text"}
          />
          <InputForm
            handler={handleLastName}
            handlerState={lastName}
            idInput={"lastName"}
            labelText={"Apellidos"}
            typeInput={"text"}
          />
          <InputForm
            handler={handleEmail}
            handlerState={email}
            idInput={"email"}
            labelText={"Correo Electronico"}
            typeInput={"email"}
          />
          <InputForm
            handler={handleNumberPhone}
            handlerState={numberPhone}
            idInput={"telephone"}
            labelText={"Telefono"}
            typeInput={"number"}
          />
          <h2 className=" text-2xl text-center font-bold text-white">
            Dirección
          </h2>
          <InputForm
            handler={handleDirection}
            handlerState={direction}
            idInput={"direction"}
            labelText={"Direccion"}
            typeInput={"text"}
          />
          <InputForm
            handler={handleCity}
            handlerState={city}
            idInput={"city"}
            labelText={"Ciudad"}
            typeInput={"text"}
          />
          <InputForm
            handler={handleCp}
            handlerState={cp}
            idInput={"cp"}
            labelText={"Codigo Postal"}
            typeInput={"number"}
          />
          {error && (
            <span className=" w-[85%] animate-rotateAndShow2 px-3 py-2 h-auto text-center rounded-lg bg-red-500 text-xl font-bold  text-white hover:scale-105 transition-all">
              Los campos son requeridos
            </span>
          )}
          <input
            className=" px-3 py-2 w-auto h-10 md:h-16 lg:h-10 rounded-lg bg-sky-200 text-xl font-bold text-dark-blue hover:scale-105 transition-all"
            type="submit"
            value="Finalizar Pedido"
          />
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;
