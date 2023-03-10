import { useState, useEffect } from "react";

export const Contador2 = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const increment = () => {
    setCounter(counter + inputValue);
  };

  const decrement = () => {
    setCounter(counter - inputValue);
  };

  const reset = () => {
    setCounter(0);
    setInputValue("")
  };

  const handlerInputChange = (e) => {
    const value = e.target.value;

    if (isNaN(value) || value === "") {
      alert("Debes ingresar un numero");
    } else {
      setInputValue(parseInt(value));
    }
  };

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div className="card m-auto" style={{ width: "18rem" }}>
      <div className="card-body">
        <h2 className="card-title display-2">{counter}</h2>
        <input
          type="text"
          className="form-control mb-2 w-75 m-auto"
          placeholder="Ingresar numero"
          onChange={handlerInputChange}
          value={inputValue}
        />
        <div className="d-flex gap-2 justify-content-center">
          <button
            className="btn btn-danger btn-sm"
            onClick={decrement}
            disabled={!inputValue}
          >
            Decrementar
          </button>
          <button
            className="btn btn-success btn-sm"
            onClick={increment}
            disabled={!inputValue}
          >
            Incrementar
          </button>

          <button
            className="btn btn-dark btn-sm"
            onClick={reset}
            disabled={!inputValue}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
