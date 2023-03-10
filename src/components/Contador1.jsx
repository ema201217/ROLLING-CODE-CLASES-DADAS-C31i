import { useState } from "react";

export const Contador1 = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="card m-auto" style={{ width: "18rem" }}>
      <div className="card-body">
        <h2 className="card-title display-2">{counter}</h2>

        <div className="d-flex gap-2 justify-content-center">
          <button className="btn btn-danger btn-sm" onClick={decrement}>
            Decrementar
          </button>
          <button className="btn btn-success btn-sm" onClick={increment}>
            Incrementar
          </button>

          <button className="btn btn-dark btn-sm" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

// document.getElementById("idElement").addEventListener('click',(e) => {

// })
