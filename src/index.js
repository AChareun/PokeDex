import callForPokeInfo from './services.js';

import {
  setLoadingState,
  occultLoading,
  updatePokemonStats,
  updatePokemonImg,
  updatePokemonTypes,
  updatePokemonName,
  updatePokemonAbilities,
} from './ui.js';

import {
  setMaleSprite,
  setFemaleSprite,
  setNormalSprite,
  setShinySprite,
} from './pkm-image.js';

import { inputModification } from './text-mod.js';

import updateStatsBars from './bars.js';

let pokemon;

// eslint-disable-next-line import/prefer-default-export
export async function updatePokemonInfo(idName) {
  setLoadingState();
  pokemon = await callForPokeInfo(idName);
  updatePokemonImg(pokemon);
  updatePokemonStats(pokemon);
  updatePokemonName(pokemon);
  updatePokemonTypes(pokemon);
  updatePokemonAbilities(pokemon);
  updateStatsBars(pokemon);
  occultLoading();
}

document.querySelector('#random-button').addEventListener(
  'click', () => { updatePokemonInfo(Math.floor(Math.random() * 802)); },
);
document.querySelector('#search-button').addEventListener(
  'click', () => { updatePokemonInfo(inputModification(document.querySelector('#search-input').value)); },
);

document.querySelector('#btn-backw').addEventListener(
  'click', () => { updatePokemonInfo(pokemon.id - 1); },
);

document.querySelector('#btn-forw').addEventListener(
  'click', () => { updatePokemonInfo(pokemon.id + 1); },
);

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 32) {
    document.querySelector('#search-input').focus();
  }
  if (event.keyCode === 13) {
    document.querySelector('#search-button').click();
  }
});

document.querySelector('#male').addEventListener(
  'click', () => { setMaleSprite(pokemon); },
);
document.querySelector('#female').addEventListener(
  'click', () => { setFemaleSprite(pokemon); },
);
document.querySelector('#normal').addEventListener(
  'click', () => { setNormalSprite(pokemon); },
);
document.querySelector('#shiny').addEventListener(
  'click', () => { setShinySprite(pokemon); },
);

updatePokemonInfo();
