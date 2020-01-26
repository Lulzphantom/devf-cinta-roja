const request   = require('request');
const rp        = require('request-promise');
const pokeapi   = require('pokeapi');

module.exports = class PokemonApi {
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
            json: true
        };        
        return rp(options).promise()
            .then(function (pokemon) {
                console.log(pokemon);
                return pokemon;             
            })
            .catch(function (err) {
                return err;
            });
    }

    getPokeByPokeAPI = () => {
        var api = pokeapi.v1();

        api.get('pokemon', 1)
            .then((pokemon) => {
                console.log(pokemon);
            })


        
        // api.get('pokemon', 1).then(function(bulbasaur) {
        //     console.log("Here's Bulbasaur:", bulbasaur);
        //     api.get(bulbasaur.moves).then(function(moves) {
        //         console.log("Full move list:" + moves);
        //     })
        // }, function(err) {
        //     console.log('ERROR', err);
        // });
    }
};