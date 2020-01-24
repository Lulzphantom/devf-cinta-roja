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

const getPokemon  = pokemonName => { 
  return new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then(response =>
        response.status === 200 ? response.json() : reject(`Http error: ${response.status}`)
      )
      .then(pokeObject =>
        resolve(
          new Pokemon(
            pokeObject.id,
            pokeObject.name,            
            pokeObject.sprites,
            pokeObject.moves,
            pokeObject.height,
            pokeObject.weight
          )
        )
      )
      .catch(error => reject(`Fetch error: ${error}`));    
  });  
};

//Get search button
let searchBt = document.querySelector('#search');
//Get loading
let loading  = document.querySelector('#loading');
//Get pokeinfo card
let pokeCont = document.querySelector('#pokeContent'); 

//Add click event
searchBt.addEventListener('click', (e) => {
    e.preventDefault();
    
    pokeCont.style.display = "none";
    loading.style.display = "flex";

    getPokemon(document.querySelector('#pokemon').value.toLowerCase())
      .then((pokemon) => showPokemon(pokemon))
      .catch((error) => showError(error));
})

const showError = error => {  
  M.toast({html: `${error}`});
  loading.style.display = "none";
  pokeCont.style.display = "none";
}

const showPokemon = pokemon => {

    console.log(pokemon);
    let pokeName    = document.querySelector('#pokeName');
    let spriteCont  = document.querySelector('#spriteContainer');    
    let pokeinfo    = document.querySelector('#pokeInfo');

    spriteCont.innerHTML  = ''; //Remove old sprites    
    pokeinfo.innerHTML    = ''; //Remove old info

    loading.style.display = "none";
    pokeCont.style.display = "block";

    pokeName.textContent = pokemon.name;


    Object.keys(pokemon.sprites).forEach(function(key) {
      if (pokemon.sprites[key] != null) {        

        let pokeImg       = document.createElement('img');
        pokeImg.src       = pokemon.sprites[key];
        pokeImg.className = "pokeImg";

        spriteCont.appendChild(pokeImg);
      } 
    });


    let movesCount = 0;
    pokemon.moves.forEach(move => { 
      
      if (movesCount === 5) {
        return;
      }     

      let li = document.createElement('li');
      li.textContent = move.move.name;
      pokeinfo.appendChild(li)
      movesCount ++;
    });
    
}