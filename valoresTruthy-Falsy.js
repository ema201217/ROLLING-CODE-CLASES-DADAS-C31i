/* 
    Valores Falsy -> Cuando estén dentro de un condicional van a valer false

    ""
    0
    undefined
    null
    false
    NaN

    Valores Truthy -> Cuando estén dentro de un condicional van a valer true

    "a"
    1
    {}
    []
    function(){}

*/

const arrNumeros = [];
const obj = {
  direcciones: ["direccion 1"],
};
if (obj.direcciones.length) {
  console.log("Es Verdadero");
} else {
  console.log("Es Falso");
}


