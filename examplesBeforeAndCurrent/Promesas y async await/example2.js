// console.log("1ro", "El amor, los amigos,");

const mostrar2daParte = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2do la familia, las risas...");
    }, 2000);
  });
};

// mostrar2daParte().then((resultado) => {
//   console.log(resultado)
//   // console.log("3ro", "¡Recuérdalo!");
// });

/*
== async await ==

const nameFunction = async () => {
  await fetch("url",config)
} 
*/

const mostrarMsg = async () => {
  console.log("1ro", "El amor, los amigos,");
  const segundaParte = await mostrar2daParte()
  console.log(segundaParte)
  console.log("3ro", "¡Recuérdalo!");
}

mostrarMsg()