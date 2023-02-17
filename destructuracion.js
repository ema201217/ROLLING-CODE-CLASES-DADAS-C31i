const objConMuchaInformacionDentro = {
  nombre: "Walter",
  apellido: "Tallia",
  edad: 31,
  hobbies: ["futbol", "programar", "playstation 5"],
  familia:[
    {
       nombre: "Florencia",
       apellido: "Arroyo",
    },
    {
       nombre: "Fernando",
       apellido: "Tallia",
    },
  ]
};

const { nombre, apellido, hobbies } = objConMuchaInformacionDentro;
const [, , PS5] = hobbies;

// DESTRUCTURACIÓN DE FAMILIA
const { familia } = objConMuchaInformacionDentro;
const [familiar1, familiar2] = familia
const { apellido : apellido1 } = familiar1
const { apellido : apellido2 } = familiar2

PS5;

/*const imprimirNombreYApellido = (name, surname) => {
  return name + " " + surname;
};
imprimirNombreYApellido(nombre, apellido);*/