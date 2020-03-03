async function callForPokeInfo(idName = 1) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${idName}/`)
    .then((response) => response.json());
}

export default callForPokeInfo;
