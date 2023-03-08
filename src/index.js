import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const nombreCompleto = "Walter Tallia";
// const saludo = <h1>Hola, {nombreCompleto}</h1>;

// const listaDeAlumnos = (
//   <div>
//     <h1>Alumnos:</h1>
//     <ul>
//       <li>Fabricio Paz</li>
//       <li>Gonzalo Flores</li>
//       <li>Maria Huerta</li>
//       <li>Rodrigo Singh</li>
//       <li>Ezequiel Corbalan</li>
//     </ul>
//   </div>
// );

// const getFullname = (usuario) => {
//   if (usuario) {
//     return <h1>Hola, {usuario}</h1>;
//   }
//   return <h1>Hola, quien te conoce!!</h1>;
// };

// let loading = true
// const fullname = getFullname("Gonzalo Flores")

root.render(
 <App />
);
