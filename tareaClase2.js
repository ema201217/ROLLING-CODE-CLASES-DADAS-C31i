export const movies = [
  {
    id: 1,
    title: "Soul",
    year: 2020,
  },
  {
    id: 2,
    title: "Sputnik",
    year: 2020,
  },
  {
    id: 3,
    title: "El regreso del Héroe",
    year: 2018,
  },
  {
    id: 4,
    title: "Break",
    year: 2018,
  },
  {
    id: 5,
    title: "It (eso)",
    year: 2017,
  },
  {
    id: 6,
    title: "Las hijas de Abril",
    year: 2017,
  },
  {
    id: 7,
    title: "Lupin III",
    year: 2019,
  },
  {
    id: 8,
    title: "Vaquero del mediodía",
    year: 2019,
  },
  {
    id: 9,
    title: "Buddy Games",
    year: 2019,
  },
  {
    id: 10,
    title: "Terminator 2",
    year: 1992,
  },
];

// 2 - CREAR LA FUNCIÓN getMoviesByYear
// 3 - LA FUNCIÓN getMoviesByYear DEBE RETORNAR UNA PROMESA QUE DURE 2 SEGUNDOS (usar setTimeout) Y RESUELVA (resolve) EL RESULTADO DE LA BÚSQUEDA.
// 4 - VALIDAR QUE EL ARGUMENTO DE LA FUNCIÓN SEA UN NUMERO Y QUE EL NUMERO SEA MAYOR A 1000 Y MENOR A 2024. ENVIAR EL ERROR POR EL "reject".
// 5 - SI NO EXISTEN PELÍCULAS QUE RESUELVA CON EL MENSAJE "No existen películas en ese año"
// 6 - MOSTRAR POR CONSOLA LA RESPUESTA DE LA PROMESA.