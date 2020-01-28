const pokeModule = require('./modules/pokemon');

class Pokemon {
    constructor(id, name, sprites, moves, height, weight) {
        this.id = id,
        this.name = name,
        this.sprites = sprites,
        this.moves  = moves,
        this.height = height,
        this.weight = weight        
    }
}

const catchThemAll = (pokemon) => {
    console.log(new Pokemon(pokemon.id, pokemon.name, pokemon.sprites, pokemon.moves, pokemon.height, pokemon.weight));
}


//Get pokemon using request
let pokemonByRq = new pokeModule('ditto').getPokeByRequest()
    .then((request) => catchThemAll(poke))
    .catch((err) => console.log(err));


//Get pokemon using request promise
let pokemonByRqp = new pokeModule('ditto').getPokeByRequestPromise()
    .then((request) => request.statusCode === 200 ? catchThemAll(request.body) : console.log(`Error ${request.statusCode}`))
    .catch((err) => console.log(`Error ${err}`));
    


//Get pokemon using pokeapi
let pokemonByApi = new pokeModule('ditto').getPokeByPokeAPI()
    .then((pokemon) => catchThemAll(pokemon))
    .catch((err) => console.log(`Error ${err}`));
