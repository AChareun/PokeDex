// eslint-disable-next-line spaced-comment
/// <reference types="jest" />

import bodyFixture from './fixtures/body-fixture.js';
import pokemon from './fixtures/pokemon-fixture.js';
import updateStatsBars from '../bars.js';

describe('tests the propper update of bars', () => {
  beforeEach(() => { document.body.innerHTML = bodyFixture; });

  test('updateStatsBars should mod the bars to show the pokemon stats', () => {
    updateStatsBars(pokemon);

    const $BARS = document.querySelectorAll('#bar div');

    $BARS.forEach(($bar, i) => {
      expect($bar.style.width).toEqual(`${pokemon.stats[i].base_stat}%`);
      expect($bar.textContent).toEqual(`${pokemon.stats[i].stat.name} ${pokemon.stats[i].base_stat}`);
    });
  });
});
