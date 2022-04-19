import React from "react";
import './styles.css'

const InputForm = ({
  handler,
  idInput,
  labelText,
  typeInput,
  regex,
  errorMessage,
  empty,
  setEmpty,
}) => {
  const [inputValue, setInputValue] = React.useState("");
  const [error, setError] = React.useState(false);

  return (
    <div className="relative w-[85%]">
      <input
        onChange={(e) => {
          const testRegex = regex.test(e.target.value);
          setEmpty(false);
          if (testRegex) {
            handler(e.target.value);
            setError(false);
          } else {
            setError(true);
          }
          setInputValue(e.target.value);
        }}
        className={`${
          empty ? "ring-red-500 ring-1" : "ring-blue ring-1"
        } w-full rounded py-2 px-2 text-white text-xl bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue transition-all`}
        type={typeInput}
        id={idInput}
      />
      <label
        className={`absolute top-2 left-2 text-white font-bold transition-all ${
          inputValue === ""
            ? " text-xl translate-y-0"
            : " text-[10px] -translate-y-2"
        }`}
        htmlFor={idInput}
      >
        {labelText}
      </label>
      {error && (
        <span className=" block w-full mt-4 animate-rotateAndShow2 px-3 py-2 h-auto text-center rounded-lg bg-red-500 text-xl font-bold  text-white hover:scale-105 transition-all">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default InputForm;
