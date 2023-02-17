const myPersonalInformation = {
  name: "Rolling",
  surname: "Code",
  old: 30,
  hobbies: ["music", "guitar", "program"],
  addresses: [
    {
      province: "Buenos Aires",
      city: "San Miguel",
      street: "Calle falsa",
      number: 123,
      postalCode: "1663",
    },
    {
      province: "Tucuman",
      city: "Monteros",
      street: "Calle falsa 2",
      number: 321,
      postalCode: "4142",
    },
  ],
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrIBnP4Ppijsc0z3IRH6A6mQEs0OSaVlmFw&usqp=CAU",
  favoriteFoods: [
    {
      es: [
        {
          name: "milanesas",
          status: ["frito", "horno"],
          type: ["carne", "pollo"],
          fittings: ["papas fritas", "pure", "ensalada"], // guarniciones
        },
      ],
      en: [
        {
          name: "milanese",
          status: ["fried", "baked"],
          type: ["meat", "chicken"],
          fittings: ["potato chips", "mashed potatoes", "salad"], // guarniciones
        },
      ],
    },
  ],
};

// 1 -  Destructura e imprimir por consola:
/* 
    - El apellido
    - El ultimo pasa tiempo
    - Las dos cities
    
*/

const { addresses } = myPersonalInformation;
/* surname */

/* ultimoHobbie */

addresses.forEach((address) => {
  const { city } = address;
  console.log(city);
});

/* for (let i = 0; i < addresses.length; i++) {
  const {city} = addresses[i]
  console.log(city)
} */

/*
- El nombre,ultimo estado,primer tipo y todas las guarniciones de la comida en ambos idiomas
 */

const { favoriteFoods } = myPersonalInformation;
const [foods] = favoriteFoods;
const { es, en } = foods;
const [comida1Español] = es;
const [comida1Ingles] = en;

const { name, status, type, fittings } = comida1Español;
console.log(name);
const [,horno] = status
console.log(horno)
const [carne] = type
console.log(carne);
fittings.join(' ')

const {} = comida1Ingles;
