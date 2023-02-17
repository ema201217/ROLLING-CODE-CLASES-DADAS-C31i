// const getNumber3 = () => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve(console.log(3))
//     },8000)
//   })
// }

// console.log(1)
// console.log(2)

// getNumber3().then(() => {
//   console.log(4)
//   console.log(5)
// })

const getProductById = (id) => {
  const objProducts = [
    {
      id: 1,
      title: "TV 40' Samsung",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium natus nulla asperiores quae. Saepe rerum dolores, magni blanditiis deserunt dicta laboriosam debitis soluta, assumenda dolorum sequi perspiciatis! Amet, quis.",
      price: 100000,
    },
    {
      id: 238,
      title: "PlayStation 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium natus nulla asperiores quae. Saepe rerum dolores, magni blanditiis deserunt dicta laboriosam debitis soluta, assumenda dolorum sequi perspiciatis! Amet, quis.",
      price: 120000,
    },
  ];

  return new Promise((resultadoPositivo, resultadoNegativo) => {
    setTimeout(() => {
      if (isNaN(id)) {
        resultadoNegativo("El ID ingresado es invalido");
      }

      const productFound = objProducts.find((product) => {
        return product.id === id;
      });

      if (productFound !== {}) {
        resultadoNegativo("No existe ningún producto con ese ID");
      }

      resultadoPositivo(productFound);
    }, 4000);
  });
};

getProductById("dasdas")
  .then((respuestaPositiva) => {
    console.log(respuestaPositiva);
  })
  .catch((respuestaNegativa) => {
    console.log(respuestaNegativa);
  });
