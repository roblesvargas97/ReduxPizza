import React from "react";

const InputForm = ({
  handler,
  handlerState,
  idInput,
  labelText,
  typeInput,
}) => {
  return (
    <div className="relative w-[85%]">
      <input
        onChange={(e) => handler(e.target.value)}
        className="w-full rounded py-2 px-2 text-white text-xl bg-gray-800 focus:outline-none ring-1 ring-blue focus:ring-4 focus:ring-blue transition-all"
        type={typeInput}
        id={idInput}
      />
      <label
        className={`absolute top-2 left-2 text-white font-bold transition-all ${
          handlerState === ""
            ? " text-xl translate-y-0"
            : " text-[10px] -translate-y-2"
        }`}
        htmlFor={idInput}
      >
        {labelText}
      </label>
    </div>
  );
};

export default InputForm;
