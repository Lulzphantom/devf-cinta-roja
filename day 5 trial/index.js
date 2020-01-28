const pokemodule = require('./modules/pokemon');
const bookmodule = require('./modules/books');

//Get book info (author)
const book = 'i robot';


//Get books by author
const author = 'asimov';

new bookmodule('i robot').GetBookInfo()
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        
    });




//Get 150 pokemons
// let pokeIds = [];

// for (let i = 1; i < 150; i++) {
//     pokeIds.push(i);
// }

// poke = new pokemodule(pokeIds).getPokemonById()
// .then((pokemon) => {
//     console.log(pokemon);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// }); 




