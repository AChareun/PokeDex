import { stringModification } from './text-mod.js';

function emptyElement(elements) {
  elements.forEach((element) => {
    element.remove();
  });
}

export function setLoadingState() {
  const $elements = document.querySelectorAll('.info-element');
  emptyElement($elements);
  document.querySelector('#loading').classList.remove('occult');
}

export function occultLoading() {
  document.querySelector('#loading').classList.add('occult');
}

export function updatePokemonStats(pokemon) {
  const $infoCard = document.querySelector('#info-poke');
  const $weight = document.createElement('ul');
  const $height = document.createElement('ul');
  $weight.classList.add('card-text', 'h6', 'info-element');
  $height.classList.add('card-text', 'h6', 'info-element');
  $weight.textContent = `-Weight: ${pokemon.weight}`;
  $height.textContent = `-Height: ${pokemon.height}`;
  $infoCard.appendChild($weight);
  $infoCard.appendChild($height);
}

export function updatePokemonImg(pokemon, sprite = 'front_default') {
  const $imgContainer = document.querySelector('#img-container');
  const image = document.createElement('img');
  image.classList.add('info-element');
  image.src = `${pokemon.sprites[sprite]}`;
  $imgContainer.appendChild(image);
}

export function updatePokemonTypes(pokemon) {
  Object.keys(pokemon.types).forEach((key) => {
    const $type = document.createElement('span');
    $type.classList.add('type-icon', `type-${pokemon.types[key].type.name}`, 'info-element', 'px-0');
    $type.textContent = pokemon.types[key].type.name;
    document.querySelector('.primary-info').appendChild($type);
  });
}

export function updatePokemonName(pokemon) {
  const $name = document.createElement('ul');
  $name.classList.add('my-2', 'h6', 'px-0', 'info-element');
  $name.textContent = `#${pokemon.id} ${stringModification(pokemon.name)}`;
  document.querySelector('.primary-info').appendChild($name);
}

export function updatePokemonAbilities(pokemon) {
  Object.keys(pokemon.abilities).forEach((key) => {
    const $ability = document.createElement('ul');
    $ability.classList.add('card-text', 'h6', 'info-element');
    $ability.textContent = `-${stringModification(pokemon.abilities[key].ability.name)}`;
    document.querySelector('#abilities-poke').appendChild($ability);
  });
}
