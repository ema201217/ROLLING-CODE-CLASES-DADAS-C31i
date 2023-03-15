import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

// Importación de la librería bootstrap de manera local
import "bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
