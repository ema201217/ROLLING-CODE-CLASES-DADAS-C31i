const valorAsincronico = (valor, time) => {
  return new Promise((resolve, reject) => {
    if (isNaN(valor) || isNaN(time)) {
      reject("Error en uno de los argumentos");
    }

    setTimeout(() => {
      resolve(valor);
    }, time);
  });
};

console.log(1);

valorAsincronico(2, 2000).then((respuesta) => {
  console.log(respuesta);

  valorAsincronico(3, 1000).then((respuesta) => {
    console.log(respuesta);

    valorAsincronico(4, 1000).then((respuesta) => {
      console.log(respuesta);

      valorAsincronico(5, "gg")
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((error) => {
        console.error(error)
      })
    });
  });
});
