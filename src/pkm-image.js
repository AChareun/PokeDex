import { updatePokemonImg } from './ui.js';

export function setMaleSprite(pokemon) {
  const $imgContainer = document.querySelector('#img-container');
  const $img = document.querySelector('img');

  if ($imgContainer.dataset.color === 'shiny') {
    $img.remove();
    updatePokemonImg(pokemon, 'front_shiny');
    $imgContainer.dataset.gender = 'male';
    return;
  }
  $img.remove();
  updatePokemonImg(pokemon, 'front_default');
  $imgContainer.dataset.gender = 'male';
}

export function setFemaleSprite(pokemon) {
  const $imgContainer = document.querySelector('#img-container');
  const $img = document.querySelector('img');

  if (pokemon.sprites.front_female === null) {
    setMaleSprite(pokemon);
    return;
  }
  if ($imgContainer.dataset.color === 'shiny') {
    $img.remove();
    updatePokemonImg(pokemon, 'front_shiny_female');
    $imgContainer.dataset.gender = 'female';
    return;
  }
  $img.remove();
  updatePokemonImg(pokemon, 'front_female');
  $imgContainer.dataset.gender = 'female';
}

export function setNormalSprite(pokemon) {
  const $imgContainer = document.querySelector('#img-container');
  const $img = document.querySelector('img');

  if ($imgContainer.dataset.gender === 'female') {
    $imgContainer.dataset.color = 'normal';
    setFemaleSprite(pokemon);
    return;
  }
  $img.remove();
  updatePokemonImg(pokemon, 'front_default');
  $imgContainer.dataset.color = 'normal';
}

export function setShinySprite(pokemon) {
  const $imgContainer = document.querySelector('#img-container');
  const $img = document.querySelector('img');

  if ($imgContainer.dataset.gender === 'female') {
    $imgContainer.dataset.color = 'shiny';
    setFemaleSprite(pokemon);
    return;
  }
  $img.remove();
  updatePokemonImg(pokemon, 'front_shiny');
  $imgContainer.dataset.color = 'shiny';
}
