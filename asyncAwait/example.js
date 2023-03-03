const movies = [
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
];

const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(movies);
    }, 2000);
  });
};

const getMovieById = (id) => {
  return new Promise((resolve,reject) => {
    if(isNaN(id)){
      reject("El argumento ID debe ser numérico")
    }
    setTimeout(() => {
      const movieFound = movies.find(movie => movie.id === parseInt(id))
      if(movieFound === undefined){
        reject(`La película con ID ${id} no existe`)
      }
      resolve(movieFound)
    }, 4000);
  })
}

const find = (idMovie) => {
  return new Promise((resolve,reject) => {

    if(idMovie === undefined){
      setTimeout(() => {
        resolve(movies)
      }, 1000);
    }else{

      if(isNaN(idMovie)){
        reject("El argumento ID debe ser numérico")
      }

      setTimeout(() => {
        const movieFound = movies.find(movie => movie.id === parseInt(idMovie))

        if(movieFound === undefined){
          reject(`La película con ID ${idMovie} no existe`)
        }

        resolve(movieFound)

      }, 1000);

    }
  })
}



const showMovies = async () => {
  const allMovies = await getMovies();
  console.log(allMovies);
};
// showMovies()

const showMovieById = async (id) => {
try {
  const movieSelected = await getMovieById(id)
  console.log(movieSelected)
} catch(error) {
  console.error(error)
  alert(error)
}
}
// showMovieById(7)

const showMoviesAdvance = async (id) => {
  try {
    
    const allMovies = await find(id)
    console.log(allMovies)

  } catch (error) {
    console.log(error)
  }
}
// showMoviesAdvance(6)

/* throw */