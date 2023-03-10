import { Header } from "./components/Header";
import { Contador1 } from "./components/Contador1";
import { Contador2 } from "./components/Contador2";
import { Contador3 } from "./components/Contador3";

export const App = () => {
  return (
    <div>
      <Header />

      <div className="container mt-4">
        <div className="row">
          <div className="col-4 text-center">
            {/* COMPONENT -> CONTADOR 1 */}
            <h2>Contador V1</h2>
            <Contador1 />
          </div>

          <div className="col-4 text-center">
            {/* COMPONENT -> CONTADOR 2 */}
            <h2>Contador V2</h2>
            <Contador2 />
          </div>

          <div className="col-4 text-center">
            {/* COMPONENT -> CONTADOR 3 */}
            <h2>Contador V3</h2>
            <Contador3 />
          </div>

          
        </div>
      </div>
    </div>
  );
};
