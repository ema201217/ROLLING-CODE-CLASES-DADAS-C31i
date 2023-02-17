const arrNum = [1,2,3,4,5,6,7,8,9,10]

const arrModificado = arrNum.map(numero => numero + 1)  

// console.log(arrModificado)

const arrModificado2 = arrNum.map(numero => {
  if(numero === 1 || numero === 10){
    return numero * 3
  }
  return numero
})

console.log(arrModificado2)

