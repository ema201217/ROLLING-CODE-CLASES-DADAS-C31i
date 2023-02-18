const arrNumeros = [1, 65, 23, 6, 8, 12, 3, 7, 4, 5, 112, 31, 89];
// ITERACIÓN CON FOR
for (let i = 0; i < arrNumeros.length; i++) {
  console.log(arrNumeros[i]);
}

array.foreach(() => {});
arrNumeros.forEach((numero) => {
  console.log(numero);
});

// SEPARAR NUMEROS PARES E IMPARES
const arrNumeros2 = [1, 65, 23, 6, 8, 12, 3, 7, 4, 5, 112, 31, 89];
let numsPares = [];
let numsImpares = [];

for (let index = 0; index < arrNumeros2.length; index++) {
  if (arrNumeros2[index] % 2 === 0) {
    numsPares.push(arrNumeros2[index]);
  } else {
    numsImpares.push(arrNumeros2[index]);
  }
}

const arrNumeros3 = [1, 65, 23, 6, 8, 12, 3, 7, 4, 5, 112, 31, 89];
let numsPares2 = [];
let numsImpares2 = [];

arrNumeros3.forEach((numero) => {
  // condición ? si se cumple : si no se cumple
  numero % 2 === 0 ? numsPares2.push(numero) : numsImpares2.push(numero);

  /* if(numero % 2 === 0){
    numsPares2.push(numero)
  } else {
    numsImpares2.push(numero)
  } */
});
