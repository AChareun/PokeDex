// eslint-disable-next-line spaced-comment
/// <reference types="jest" />

import {
  setMaleSprite, setFemaleSprite, setNormalSprite, setShinySprite,
} from '../pkm-image.js';

import pokemon from './fixtures/pokemon-fixture.js';

import pokeFem from './fixtures/pkm-fem-fixture.js';

import { updatePokemonImg } from '../ui.js';

jest.mock('../ui.js');

beforeEach(() => {
  document.body.innerHTML = '<div id="img-container" data-gender="male" data-color="normal"><img class="info-element"></div>';
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('tests all cases of setMaleSprite', () => {
  test('setMaleSprite should call updatePokemonImg with pokemon and front_default', () => {
    setMaleSprite(pokemon);

    expect(updatePokemonImg).toHaveBeenCalledTimes(1);
    expect(updatePokemonImg).toHaveBeenCalledWith(pokemon, 'front_default');
  });

  test('setMaleSprite should call updatePokemonImg with pokemon and front_shiny if data-color is shiny', () => {
    document.querySelector('div').dataset.color = 'shiny';
    setMaleSprite(pokemon);

    expect(updatePokemonImg).toHaveBeenCalledTimes(1);
    expect(updatePokemonImg).toHaveBeenCalledWith(pokemon, 'front_shiny');
  });
});

describe('tests all cases of setFemaleSprite', () => {
  test('setFemaleSprite should call updatePokemonImg with pokeFem and front_female and set data-gender to female', () => {
    setFemaleSprite(pokeFem);

    expect(updatePokemonImg).toHaveBeenCalledTimes(1);
    expect(updatePokemonImg).toHaveBeenCalledWith(pokeFem, 'front_female');
    expect(document.querySelector('div').dataset.gender).toBe('female');
  });

  test('setFemaleSprite should call updatePokemonImg with pokeFem and front_shiny_female if data-color is shiny', () => {
    document.querySelector('div').dataset.color = 'shiny';
    setFemaleSprite(pokeFem);

    expect(updatePokemonImg).toHaveBeenCalledTimes(1);
    expect(updatePokemonImg).toHaveBeenCalledWith(pokeFem, 'front_shiny_female');
    expect(document.querySelector('div').dataset.gender).toBe('female');
  });

  test('setFemaleSprite should call setMaleSprite with pokemon if there is no female sprite', () => {
    setFemaleSprite(pokemon);

    expect(pokemon.sprites.front_female).toBeNull();
    expect(updatePokemonImg).toHaveBeenCalledTimes(1);
    expect(updatePokemonImg).toHaveBeenCalledWith(pokemon, 'front_default');
  });
});

describe('tests all cases of setNormalSprite', () => {
  test('setNormalSprite should call updatePokemonImg with pokemon and front_default and set data-color to normal', () => {
    setNormalSprite(pokemon);

    expect(updatePokemonImg).toHaveBeenCalledTimes(1);
    expect(updatePokemonImg).toHaveBeenCalledWith(pokemon, 'front_default');
    expect(document.querySelector('div').dataset.color).toBe('normal');
  });

  test('setNormalSprite should call setFemaleSprite with pokeFem if data-gender is female', () => {
    document.querySelector('div').dataset.gender = 'female';
    setNormalSprite(pokeFem);

    expect(updatePokemonImg).toHaveBeenCalledTimes(1);
    expect(updatePokemonImg).toHaveBeenCalledWith(pokeFem, 'front_female');
  });
});

describe('tests all cases of setShinySprite', () => {
  test('setShinySprite should call updatePokemonImg with pokemon and front_shiny and set data-color to shiny', () => {
    setShinySprite(pokemon);

    expect(updatePokemonImg).toHaveBeenCalledTimes(1);
    expect(updatePokemonImg).toHaveBeenCalledWith(pokemon, 'front_shiny');
    expect(document.querySelector('div').dataset.color).toBe('shiny');
  });

  test('setShinySprite should call setFemaleSprite if data-gender is female', () => {
    document.querySelector('div').dataset.gender = 'female';
    setShinySprite(pokeFem);

    expect(updatePokemonImg).toHaveBeenCalledTimes(1);
    expect(updatePokemonImg).toHaveBeenCalledWith(pokeFem, 'front_shiny_female');
  });
});
