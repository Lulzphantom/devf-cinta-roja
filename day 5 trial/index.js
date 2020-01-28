const pokemodule = require('./modules/pokemon');
const bookmodule = require('./modules/books');
const audiodbmodule = require('./modules/audio');
const swapimodule = require('./modules/starwars');
const nasamodule = require('./modules/nasa');
const dateFormat = require('dateformat');

//Books
const book = 'i robot';
const author = 'asimov';
//Band/Artist
const artist = 'muse';
const swCharacter = 'Luke';
//Nasa Asteroids
const StartDate = dateFormat(new Date().setHours(-168), "yyyy-mm-dd");
const endDate = dateFormat(new Date().setHours(-24), "yyyy-mm-dd");

//Console colors
const consoleColor = '\x1b[33m%s\x1b[0m';
const consoleErrColor = '\x1b[31m%s\x1b[0m';


//Get book info (author)
new bookmodule(book).GetBookInfo() 
    .then((result) => {
        console.log(consoleColor, `Libro: ${result.docs[0].title}, Autores:  ${result.docs[0].author_name}`);
    }).catch((err) => {
        console.log(consoleErrColor, `Error: ${err}`);
    });

//Get books by author
new bookmodule(author).GetAuthorBooks()
    .then((result) => {
        console.log(consoleColor, `Libros del autor ${author}:`);
        result.docs.forEach(book => {
            console.log(` - ${book.title}`);
        });
    }).catch((err) => {
        console.log(consoleErrColor, `Error: ${err}`);
    });

//Get Band/Artist genere
new audiodbmodule(artist).getArtists()
    .then((result) => {
        console.log(consoleColor, `El genero de ${artist} es: ${result.artists[0].strGenre}`);
    }).catch((err) => {
        console.log(consoleErrColor, `Error: ${err}`);
    });

//Get star wars character films

new swapimodule(swCharacter).getPeopleByName()
    .then((result) => {        
        console.log(consoleColor, `Peliculas de: ${result.results[0].name}`);
        result.results[0].films.forEach(film => {
            new swapimodule(film).getFilmsByUri()
            .then((filmResult) => {
                console.log(` - ${filmResult.title}`);
            }).catch((filmErr) => {
                console.log(consoleErrColor, `Error: ${filmErr}`);
            });
        });
    })
    .catch((err) => {
        console.log(consoleErrColor, `Error: ${err}`);
    });

//Get nasa asteroids
new nasamodule(StartDate, endDate).getNeo()
    .then((result) => {
        console.log(consoleColor, `Cantidad de asteroides desde la ultima semana hasta ayer : ${result.element_count}`); 

        Object.keys(result.near_earth_objects).forEach(element => {
            result.near_earth_objects[element].forEach(asteroid => {
                console.log(asteroid.name);
            });            
        });              
        
    }).catch((err) => {
        console.log(consoleErrColor, `Error: ${err}`);
    });

//Get 150 pokemons
let pokeIds = [];

for (let i = 1; i < 151; i++) {
    pokeIds.push(i);
}

poke = new pokemodule(pokeIds).getPokemonById()
.then((pokeResult) => {
    pokeResult.forEach(pokemon => {
        let moves = [];
        pokemon.moves.forEach(move => {
            moves.push(move.move.name);
        });

        console.log(`Pokemon: ${pokemon.name}, tamaño: ${pokemon.height}, peso: ${pokemon.weight}, movimientos: ${moves}`);
    });
}).catch((err) => {
    console.log(`Error: ${err}`);
}); 




