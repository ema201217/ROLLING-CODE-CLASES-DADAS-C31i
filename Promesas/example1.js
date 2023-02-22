// Promise

// const nombreFuncion = () => {
//   return new Promise((resolve, reject) => {
//      ...código
//   });
// };

const esperarNumero3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(3));
    }, 3000);
  });
};

console.log(1);
console.log(2);

esperarNumero3().then(() => {
  console.log(4);
  console.log(5);
  console.log("Perro")
});