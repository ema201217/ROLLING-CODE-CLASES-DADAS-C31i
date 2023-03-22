import { Layout } from "../components/Layout";
import { useCounter } from "../hooks/useCounter";

export const Contador1 = () => {
  const { counter, increment, decrement, reset } = useCounter(5);

  return (
    <Layout>
      <div className="card m-auto text-center my-5" style={{ width: "18rem" }}>
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
    </Layout>
  );
};
