const mostrarParteFrase = (parteFrase, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(parteFrase);
    }, timeout);
  });
};

// mostrarParteFrase("1ro El amor, los amigos,", 1000).then((frase1) => {
//   console.log(frase1);
//   mostrarParteFrase("2do la familia, las risas...", 2000).then((frase2) => {
//     console.log(frase2);
//     mostrarParteFrase(true, 2000)
//       .then((frase3) => {
//         console.log(typeof frase3);
//       })
//       .catch((error) => console.error(error));
//   });
// });


const showMsgAdvance = async () => {
  const parte1 = await mostrarParteFrase("1ro El amor, los amigos,",1000)
  console.log(parte1)

  const parte2 = await mostrarParteFrase("2do la familia, las risas...",2000)
  console.log(parte2)
  
  const parte3 = await mostrarParteFrase("3ro ¡Recuérdalo!",1000)
  console.log(parte3)
}

showMsgAdvance()