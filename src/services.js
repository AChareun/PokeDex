import Pokemon from './pokemon-class.js';

async function callForPokeInfo(idName = 1) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${idName}/`)
    .then((response) => response.json())
    .then((data) => new Pokemon({...data}));
}

export default callForPokeInfo;
