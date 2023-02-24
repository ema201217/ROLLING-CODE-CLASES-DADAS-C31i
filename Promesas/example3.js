const mostrarParteFrase = (parteFrase /* 1231 */, timeout) => {
  // Función asíncrona
  return new Promise((resolve, reject) => {
    if (parteFrase === "" || isNaN(timeout)) {
      reject("ERROR EN UNO DE LOS ARGUMENTOS");
    }

    // typeof parteFrase --> "number","string","boolean","object","undefined"
    if (typeof parteFrase !== "string") {
      reject("ERROR: El primer argumento debe ser un texto");
    }

    setTimeout(() => {
      resolve(parteFrase);
    }, timeout);
  });
};

mostrarParteFrase("1ro El amor, los amigos,", 1000).then((frase1) => {
  console.log(frase1);
  mostrarParteFrase("2do la familia, las risas...", 2000).then((frase2) => {
    console.log(frase2);
    mostrarParteFrase(true, 2000)
      .then((frase3) => {
        console.log(typeof frase3);
      })
      .catch((error) => console.error(error));
  });
});
