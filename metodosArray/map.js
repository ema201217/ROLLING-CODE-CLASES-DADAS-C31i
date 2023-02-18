// Map nos modifica los valores internos de un array y a su vez nos devuelve un nuevo array con dichas modificaciones.

const arrPersonas = [
  {
    id:'asnd8812390',
    nombre:"Juan",
    apellido:"Holgado"
  },
  {
    id:'asnd88ada2',
    nombre:"Gonzalo",
    apellido:"Flores"
  },
  {
    id:'asnd881sd190',
    nombre:"Fabricio",
    apellido:"Paz"
  },
]

const arrNombre = arrPersonas.map(persona => {
  const {nombre, apellido} = persona
  // return nombre + ' ' + apellido
  return `${nombre} ${apellido}`
})

const arrId = arrPersonas.map(persona => {
  const {id} = persona
  return id + 9999
})

arrPersonas.map(persona => {
  return {
    id:persona.id,
    nombre:persona.nombre,
    apellido:persona.apellido,
    edad: null,
    fechaDeCreacion : Date()
  }
})