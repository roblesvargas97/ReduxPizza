import React from "react";
import InputForm from "./InputForm/InputForm";

const PurchaseForm = () => {
  const [name, setName] = React.useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="min-w-[320px] p-5 h-[85vh] bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue-1 flex flex-col justify-center items-center space-y-5">
      <h1 className="text-4xl md:text-7xl lg:text-6xl font-bold text-center text-white">
        Formulario de Compra
      </h1>
      <form className=" p-2 w-full h-auto bg-white-glass">
        <div className=" h-44">
          <h2 className=" text-2xl font-bold text-white">
            Informacion del Comprador
          </h2>
          <InputForm
            handler={handleName}
            idInput={name}
            labelText={"Nombre"}
            typeInput={"text"}
          />
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;
