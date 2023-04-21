import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./contexts/userContext";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App/>
  </UserProvider>
);
