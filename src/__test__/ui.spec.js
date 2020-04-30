// eslint-disable-next-line spaced-comment
/// <reference types="jest" />

import pokemon from './fixtures/pokemon-fixture.js';
import $BODY from './fixtures/body-fixture.js';
import {
  setLoadingState,
  occultLoading,
  updatePokemonStats,
  updatePokemonAbilities,
  updatePokemonName,
  updatePokemonTypes,
  updatePokemonImg,
} from '../ui.js';

beforeEach(() => {
  document.body.innerHTML = $BODY;
});

describe('tests that ui functions manipulate the DOM correctly', () => {
  test('Loading state should be shown and hidden', () => {
    const $loading = document.querySelector('#loading');

    setLoadingState();
    expect($loading.classList).not.toContain('occult');

    occultLoading();
    expect($loading.classList).toContain('occult');
  });

  test('these functions should update the DOM with the pokemon info', () => {
    updatePokemonStats(pokemon);
    const $INFO_CARD = document.querySelector('#info-poke');

    expect($INFO_CARD.innerHTML).toContain(`-Weight: ${pokemon.weight}` && `-Height: ${pokemon.height}`);

    updatePokemonAbilities(pokemon);
    const $ABILITIES_CARD = document.querySelector('#abilities-poke');

    expect($ABILITIES_CARD.childElementCount).toEqual(pokemon.abilities.length + 1);

    updatePokemonName(pokemon);
    const $NAME = document.querySelector('.primary-info ul');

    expect($NAME.textContent).toEqual(`#${pokemon.id} Bulbasaur`);

    updatePokemonTypes(pokemon);
    const $TYPES = document.querySelectorAll('.type-icon');

    expect($TYPES.length).toEqual(pokemon.types.length);

    updatePokemonImg(pokemon, 'front_default');
    const $IMG = document.querySelector('#img-container img');

    expect($IMG.src).toEqual(`${pokemon.sprites.front_default}`);
  });

  test('updatePokemonImg should be called with "front_default as a default parameter"', () => {
    updatePokemonImg(pokemon);
    const $IMG = document.querySelector('#img-container img');

    expect($IMG.src).toEqual(`${pokemon.sprites.front_default}`);
  });

  test('setLoadingState should clean all info-elements', () => {
    updatePokemonStats(pokemon);
    updatePokemonAbilities(pokemon);
    updatePokemonName(pokemon);
    updatePokemonTypes(pokemon);
    updatePokemonImg(pokemon);

    expect(document.querySelector('.info-element')).not.toBeNull();

    setLoadingState();
    expect(document.querySelector('.info-element')).toBeNull();
  });
});
