import { useState, useEffect } from "react";

export const ExampleWithStates = () => {
  const [mostrarTitulo, setMostrarTitulo] = useState(true);

  const bgButton = mostrarTitulo ? "red" : "green";

  useEffect(() => {

    console.log("El componente ExampleWithStates se MONTO")

  },[])  // useEffect configurado cuando se monta el componente


  useEffect(() => {

    if(mostrarTitulo){
      console.log("Escuchando el estado de 'mostrarTitulo'")
    }

  },[mostrarTitulo]) // useEffect -> Actualiza el component ( todo el callback depende del cambio del estado que se coloque dentro del array )

  useEffect(() => {
    return () => {
      console.log("COMPONENTE ExampleWithStates DESMONTADO")
    };
  }, [])  // useEffect --> Desmonte del componente


  return (
    <div>
      <button
        style={{ backgroundColor: bgButton }}
        onClick={() => setMostrarTitulo(!mostrarTitulo)}
      >
        {mostrarTitulo ? "Ocultar" : "Mostrar"} titulo
      </button>

      {mostrarTitulo ? <h1>ExampleWithStates</h1> : null}
    </div>
  );
};
