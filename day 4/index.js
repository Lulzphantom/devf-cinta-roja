const pokemonApi = require('./modules/pokemon');

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
    console.log(pokemon);
    //console.log(new Pokemon(pokemon.id, pokemon.name, pokemon.sprites, pokemon.moves, pokemon.height, pokemon.weight));
}

//Get pokemon using request
// let pokemon = new pokemonApi('ditto').getPokeByRequest()
//     .then((poke) => catchThemAll(poke))
//     .catch((err) => console.log(err));


//Get pokemon using request promise
let pokemonrq = new pokemonApi('ditto').getPokeByRequestPromise()
    .then((pokemon) => pokemon.statusCode === 200 ? catchThemAll(pokemon) : console.log(`Error ${pokemon.statusCode}`))
    .catch((err) => console.log(err));
    


//Get pokemon using pokeapi

// let pokemon2 = new pokemonApi('pikachu').getPokeByPokeAPI();
// catchThemAll(pokemon2);



// pokemonApi.getPokemon('ditto')
//     .then((pokemon) => console.log(pokemon))
//     .catch((error) => console.log(error));

