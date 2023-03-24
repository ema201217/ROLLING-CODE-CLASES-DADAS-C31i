import { useState } from "react";
import { ExampleProps } from "./components/ExampleProps";
import { Button } from "./components/exampleReactBoostrapV2/Button";
import { Nav } from "./components/exampleReactBoostrapV2/Nav";
import { ExampleWithStates } from "./components/ExampleWithStates";

export const App = () => {
  const sumarDosNumeros = (n1, n2) => parseInt(n1) + parseInt(n2);
  const [showExampleStates, setShowExampleStates] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Cambiar a modo oscuro
      </button>
      <Nav isDarkMode={isDarkMode} />

      <ExampleProps
        titulo="Hola soy un PROP"
        subtitulo="Soy un subtitulo"
        funcionSuma={sumarDosNumeros}
        colorTitulo="#2dff22"
        fontSizeTitulo="6rem"
        withTitle={true}
      />
      <br />
      <button onClick={() => setShowExampleStates(!showExampleStates)}>
        Ocultar componente ExampleWithStates
      </button>

      <Button onClick={() => console.log("ON CLICK")}>Hola soy un botón</Button>
      {showExampleStates ? <ExampleWithStates /> : null}
    </div>
  );
};

//exporta -> { App }
