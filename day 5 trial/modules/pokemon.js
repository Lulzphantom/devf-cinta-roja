const pokeapi = require('pokedex-promise-v2');

class pokemonModel{
    constructor(id, name, sprites, moves, height, weight) {
        this.id = id,
        this.name = name,
        this.moves  = moves,
        this.height = height,
        this.weight = weight        
    }
}

module.exports = class pokemon{
    constructor(pokemonId){
        this.pokemonId = pokemonId
    }

    getPokemonById = () => {
        let P = new pokeapi();
        console.log('Obteniendo datos ...');
        return P.getPokemonByName(this.pokemonId)
            .then((poke) => {
                let array = []
                for (let i = 0; i < poke.length; i++) {
                    array.push(new pokemonModel(poke[i].id, poke[i].name, poke[i].moves, poke[i].height, poke[i].weight))                   
                }
                return array;
            })
            .catch((err) => err);   
    }
}