import { useEffect } from "react";

export const Children = ({ title, old, validarEdad }) => {

  useEffect(() => {  // DESMONTE DEL COMPONENTE
    return () => {
      console.log("SE DESMONTO EL COMPONENTE HIJO CHILDREN")
    }
  },[])

  const puedePasar = validarEdad(old)
  return (
    <div>
      <h2>{title}</h2>
      <h4>{puedePasar ? "Bienvenido, puedes pasar" : "Sali de aca!! sos menor!"}</h4>
      <p>{old}</p>
    </div>
  );
};
