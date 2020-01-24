class Pokemon {
  constructor(id, name, height, weight) {
    (this.id = id),
      (this.name = name),
      (this.height = height),
      (this.weight = weight);
  }
}

const getPokemon = pokemonName => {
  return new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then(response =>
        response.status === 200 ? response.json() : reject(response.status)
      )
      .then(response =>
        resolve(
          new Pokemon(
            response.id,
            response.name,
            response.height,
            response.weight
          )
        )
      )
      .catch(response => reject(response));
  });
};

getPokemon("ditto")
  .then(value => console.log(value))
  .catch(value => console.log(value));
