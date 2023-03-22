import { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import { useCounter } from "../hooks/useCounter";

export const Contador2 = () => {
  const [inputValue, setInputValue] = useState("");
  const { counter, increment, decrement, reset } = useCounter(0, inputValue);

  const handleReset = () => {
    reset();
    setInputValue("");
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
    <Layout>
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
              onClick={handleReset}
              disabled={!inputValue}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
