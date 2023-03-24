export const ExampleProps = ({
  titulo,
  subtitulo,
  funcionSuma,
  colorTitulo,
  fontSizeTitulo,
  withTitle
}) => {
  const parrafo = `Resultado de la suma = ${funcionSuma(2, 92)}`;
  return (
    <>
      { withTitle ? <h1 style={{ color: colorTitulo, fontSize: fontSizeTitulo }}>{titulo}</h1> : null}
      
      <h4 className="color-rojo">{subtitulo}</h4>

      <p>{parrafo}</p>
    </>
  );
};

//exporta -> { ExampleProps }
