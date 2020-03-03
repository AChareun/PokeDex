import { updatePokemonImg } from './ui.js';

let gender = 'male';
let color = 'normal';

export function setMaleSprite(pokemon) {
  let $img = document.querySelector('img');
  if (color === 'shiny') {
    $img.remove();
    updatePokemonImg(pokemon, 'front_shiny');
    $img = document.querySelector('img');
    gender = 'male';
    return;
  }
  $img.remove();
  updatePokemonImg(pokemon, 'front_default');
  $img = document.querySelector('img');
  gender = 'male';
}

export function setFemaleSprite(pokemon) {
  let $img = document.querySelector('img');
  if (pokemon.sprites.front_female === null) {
    setMaleSprite(pokemon);
    return;
  }
  if (color === 'shiny') {
    $img.remove();
    updatePokemonImg(pokemon, 'front_shiny_female');
    $img = document.querySelector('img');
    gender = 'female';
    return;
  }
  $img.remove();
  updatePokemonImg(pokemon, 'front_female');
  $img = document.querySelector('img');
  gender = 'female';
}

export function setNormalSprite(pokemon) {
  let $img = document.querySelector('img');
  if (gender === 'female') {
    color = 'normal';
    setFemaleSprite(pokemon);
    return;
  }
  $img.remove();
  updatePokemonImg(pokemon, 'front_default');
  $img = document.querySelector('img');
  color = 'normal';
}

export function setShinySprite(pokemon) {
  let $img = document.querySelector('img');
  if (gender === 'female') {
    color = 'shiny';
    setFemaleSprite(pokemon);
    return;
  }
  $img.remove();
  updatePokemonImg(pokemon, 'front_shiny');
  $img = document.querySelector('img');
  color = 'shiny';
}
