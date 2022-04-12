import React from "react";

const InputForm = ({ handler, idInput, labelText, typeInput }) => {
  return (
    <div className="relative">
      <input
        onChange={(e) => handler(e)}
        className=" rounded py-1 text-white text-xl border-2 border-blue bg-transparent"
        type={typeInput}
        id={idInput}
      />
      <label
        className=" absolute top-0 left-0 text-xl text-white bg-white-glass font-bold "
        htmlFor={idInput}
      >
        {labelText}
      </label>
    </div>
  );
};

export default InputForm;
