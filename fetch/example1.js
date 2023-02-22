// Fetch -> HACE CONSULTAS A DISTINTAS URL - HTTP VERBOS

// Verbos HTTP
// GET - POST - PUT - PATCH - DELETE

// GET -> ejemplo: barra de urls en el navegador - No tiene seguridad
// POST -> ejemplo: al registrarse o al iniciar sesión - Tiene mas seguridad

let personajes
const contenedorPersonajes = document.getElementById('sectionCharacters')

const pintarPersonajes = (personajes = []) => {
  contenedorPersonajes.innerHTML = '';

  personajes.forEach(personaje => {
    const {name,gender,image,species} = personaje
    const cardPersonaje = `
    <div class="card" style="width: 14rem;">
        <img src="${image}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">ESPECIE: ${species}</p>
          <p class="card-text">GENERO: ${gender}</p>
        </div>
      </div>
    `
    
  })

}


fetch('https://rickandmortyapi.com/api/character')
.then((response) => response.json())
.then((data) => {
  personajes = data.results

  console.log(personajes)
})
.catch(error => console.log(error))

