const arrNum = [1,5,2,3,6,7,19]
const numFilter = arrNum.filter(num => num !== 6)


const arrObj = [
  {
    id:3,
    nombre:"Gonzalo"
  },
  {
    id:10,
    nombre:"Pierina"
  },
  {
    id:98,
    nombre:"Fabricio"
  },
]


const personaFiltrada = arrObj.filter(persona => persona.id !== 10)

console.log(personaFiltrada)