const valorAsincronico = (valor, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(valor));
    }, time);
  });
};

console.log(1);

valorAsincronico(2, 1000).then(() => {

  valorAsincronico(3, 2000).then(() => {

    valorAsincronico(4, 4000).then(() => {

      valorAsincronico(5, 1000);

    });

  });
  
});
