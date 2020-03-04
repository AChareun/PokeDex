import { updatePokemonImg } from './ui.js';

let gender = 'male';
let color = 'normal';

export function setMaleSprite(pokemon) {
  const $img = document.querySelector('img');
  if (color === 'shiny') {
    $img.remove();
    updatePokemonImg(pokemon, 'front_shiny');
    gender = 'male';
    return;
  }
  $img.remove();
  updatePokemonImg(pokemon, 'front_default');
  gender = 'male';
}

export function setFemaleSprite(pokemon) {
  const $img = document.querySelector('img');
  if (pokemon.sprites.front_female === null) {
    setMaleSprite(pokemon);
    return;
  }
  if (color === 'shiny') {
    $img.remove();
    updatePokemonImg(pokemon, 'front_shiny_female');
    gender = 'female';
    return;
  }
  $img.remove();
  updatePokemonImg(pokemon, 'front_female');
  gender = 'female';
}

export function setNormalSprite(pokemon) {
  const $img = document.querySelector('img');
  if (gender === 'female') {
    color = 'normal';
    setFemaleSprite(pokemon);
    return;
  }
  $img.remove();
  updatePokemonImg(pokemon, 'front_default');
  color = 'normal';
}

export function setShinySprite(pokemon) {
  const $img = document.querySelector('img');
  if (gender === 'female') {
    color = 'shiny';
    setFemaleSprite(pokemon);
    return;
  }
  $img.remove();
  updatePokemonImg(pokemon, 'front_shiny');
  color = 'shiny';
}
