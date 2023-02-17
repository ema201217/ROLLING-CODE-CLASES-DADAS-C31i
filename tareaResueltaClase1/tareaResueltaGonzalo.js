const getMyInformation = {
  nombre: "Gonzalo",
  apellido: "Schwarzenegger",
  direccion: {
    ciudad: "capital",
    calle: "avenida siempreviva 123",
    provincia: "tucumán",
  },
  edad: 32,
  pasatiempos: ["ver películas", "viajar", "programar"],
  hijos: [
    { nombreHijo: "juanito", edad: 12 },
    { nombreHijo: "milaneso", edad: 6 },
    { nombreHijo: "panda", edad: 4 },
  ],
  conyuge: {
    nombre: "filipina",
    edad: 45,
  },
  comidasFavoritas: [
    { comida: "milanesa", guarnicion: "pure" },
    { comida: "asado", guarnicion: "ensalada" },
  ],
};

// 2 - Destructurar del objeto que retorna la función getMyInformation los siguientes datos y mostrarlos por consola.
  /* 
    // - el nombre, apellido y edad ✔️
    - el segundo pasa tiempo ✔️
    - la calle donde vives ✔️
    - los nombres de los hijos ✔️
    - la edad de tu cónyuge ✔️
  */

 /*  const {nombre,apellido,edad, pasatiempos, direccion, hijos, conyuge} = getMyInformation  // objeto principal
  const [ , segundoPasatiempo] = pasatiempos
  const {calle} = direccion
  const [primerHijo,segundoHijo,tercerHijo] = hijos

  const {nombreHijo} = primerHijo
  const {nombreHijo : nombre2Hijo} = segundoHijo
  const {nombreHijo : nombre3Hijo} = tercerHijo

  const {edad : edadConyuge} = conyuge */

  const {pasatiempos : [,viajar] } = getMyInformation

// 3 - Crear una oración por consola usando los datos destructurados. Ejemplo:
// Soy Fulano Detal vivo en la calle false, uno de mis pasatiempo es programar tengo 3 hijos, Pedro, Marcos y Felipe. Hace poco me case y nos llevamos 5 años de diferencia. 


const oracion = `Soy ${nombre} ${apellido} vivo en la calle ${calle}, uno de mis pasatiempo es ${segundoPasatiempo} tengo ${hijos.length} hijos, ${nombreHijo}, ${nombre2Hijo} y ${nombre3Hijo}. Hace poco me case y nos llevamos ${edadConyuge - edad} años de diferencia.`

console.log(oracion)