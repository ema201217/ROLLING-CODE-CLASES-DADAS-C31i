// const nombreFuncion = () => {
//   return new Promise((resolve, reject) => {
//     ...código...
//   })
// }

console.log("1ro","El amor, los amigos,")

const mostrar2daParte = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("2do","la familia, las risas..."))
    },2000)
  })
}

mostrar2daParte().then(() => {
  console.log("3ro","¡Recuérdalo!")
})