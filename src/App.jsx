import axios from "axios";
import { useState } from "react";

import { Container } from "react-bootstrap";
import { Avatar } from "./components/Avatar";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

const getUsersFromGitHub = async (search) => {
  const urlBase = "https://api.github.com/search/users";

  const data = await axios.get(urlBase, {
    params: {
      q: search,
    },
  });
  return data;
};

export const App = () => {
  const [mostrarAvatar, setMostrarAvatar] = useState(false);

  getUsersFromGitHub("ema20").then((data) => {
    console.log(data.data.items);
  });

  return (
    <div className="">
      {/* --> children -- viaja oculto como prop al component que lo contiene (su componente padre) */}
      {/*   <Header title="Home">
        <ol>
          <li>Lista de Productos</li>{" "}
          <li>Sobre nosotros</li>
        </ol>
        
      </Header> */}

      <Header />

      <button onClick={() => setMostrarAvatar(!mostrarAvatar)}>
        Mostrar Avatar
      </button>
      <Container fluid>
        <Card>{mostrarAvatar ? <Avatar /> : null}</Card>
      </Container>
    </div>
  );
};

// export --> { App }

// export default --> App

/* export function App2() {
  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
} */

/* export const App3 = function () {
  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
}; */
