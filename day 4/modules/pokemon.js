const request   = require('request');
const rp        = require('request-promise');
const pokeapi   = require('pokedex-promise-v2');

module.exports = class pokeModule {
    constructor(pokemonName) {
        this.pokemonName = pokemonName;
    }

    getPokeByRequest = () => {
        return new Promise((resolve, reject) => {
            request(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName}/`, ((error, response, body) => {    
                if (response.statusCode === 200) {
                    resolve(body);             
                }else {
                    reject('Pokemon no encontrado');
                }
            }));
        });    
    }

    getPokeByRequestPromise = () => {
        var options = {
            uri: `https://pokeapi.co/api/v2/pokemon/${this.pokemonName}/`,            
            json: true,
            resolveWithFullResponse: true
        };        
        return rp(options).promise();
    }

    getPokeByPokeAPI = () => {
        let P = new pokeapi();
        return P.getPokemonByName(this.pokemonName);    
    }
};