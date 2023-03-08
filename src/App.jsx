import { Children } from "./Children";
import { useState, useEffect } from "react";
import { Spinner } from "./Spinner";

const esMayor = (edad) => {
  if (edad > 20) {
    return true;
  }
  return false;
};

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [showMsg, setShowMsg] = useState(false)


  useEffect(() => { // MONTE UN COMPONENTE
    console.log("COMPONENTE APP MONTADO")
  }, []);

  useEffect(() => { // ACTUALIZA UN COMPONENTE

    if(loading){
      console.log("LA CARGA ESTA EN TRUE")
    }else{
      console.log("LA CARGA ESTA EN FALSE")
    }

    if(showMsg){
      console.log("EL MENSAJE SE ESTA MOSTRANDO")
    }else{
      console.log("EL MENSAJE NOO SE ESTA MOSTRANDO")
    }

  },[loading, showMsg])

  return (
    <main>
      <button
        id="button"
        className="btn btn-sm btn-success"
        onClick={() => setLoading(!loading)}
      >
        Mostrar Spinner
      </button>
      <input type="text" onChange={() => setShowMsg(!showMsg)} />
      {loading ? (
        <Spinner />
      ) : (
        <Children title="App, Soy tu padre!!!" old="10" validarEdad={esMayor} />
      )}

    </main>
  );
};
