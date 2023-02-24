const $pokebolas = document.querySelector("#pokebolas");

const pintarPoke = (arr = []) => {
  $pokebolas.innerHTML = "";
  arr.map(({ imagen, name }) => {
    const tarjeta = `
  <div class="card" style="width: 12rem;">
    <img src="${imagen}" class="card-img-top" alt="img">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
    </div>
  </div>
`;

    $pokebolas.innerHTML += tarjeta;
  });
};

const getPokemones = () => {
  return new Promise((resolve, reject) => {
    const arrPokemon = [];
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        const results = data.results; // esto es un array
        results.forEach(({ url }) => {
          // const {url} = pokemon
          // console.log(url)

          fetch(url)
            .then((response) => response.json())
            .then((pokemonDetalle) => {
              const { name, sprites } = pokemonDetalle;
              // const { other: { dream_world : { front_default } } } = sprites
              arrPokemon.push({
                name: name,
                // imagen: front_default,
                imagen: sprites.other.dream_world.front_default,
              });
            });
        });
        resolve(arrPokemon);
      });
  });
};

getPokemones()
  .then((pokemones) => {
    setTimeout(() => {
      pintarPoke(pokemones);
    }, 100);
  })
  .catch((error) => console.error(error));
