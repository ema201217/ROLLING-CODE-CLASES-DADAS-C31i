import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export const Contador3 = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [msgError, setMsgError] = useState("");

  const increment = () => {
    setCounter(counter + inputValue);
  };

  const decrement = () => {
    if (counter < 1) {
      setShowModal(true);
      setMsgError("No puedes decrementar a números negativos");
    } else {
      setCounter(counter - inputValue);
    }
  };

  const reset = () => {
    setCounter(0);
    setInputValue("");
  };

  const handlerInputChange = (e) => {
    const value = e.target.value;

    if (isNaN(value) || value === "") {
      setShowModal(true);
      setMsgError("Debes ingresar valores numéricos");
    } else {
      setInputValue(parseInt(value));
    }
  };

  const handlerCloseModal = () => {
    setShowModal(false);
    setMsgError("");
    reset()
  };

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div>
      <Modal
        title="Error ❌"
        msg={msgError}
        showModal={showModal}
        onClose={handlerCloseModal}
      />
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
    </div>
  );
};
