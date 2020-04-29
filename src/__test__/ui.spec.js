// eslint-disable-next-line spaced-comment
/// <reference types="jest" />

import pokemon from './fixtures/pokemon-fixture.js';
import $BODY from './fixtures/body-fixture.js';
import { setLoadingState, occultLoading } from '../ui.js';

beforeEach(() => {
  document.body.innerHTML = $BODY;
});

describe('tests that ui functions manipulate the DOM correctly', () => {
  test('Loading state should be shown and hidden, and info-elements cleaned', () => {
    const $loading = document.querySelector('#loading');

    setLoadingState();
    expect($loading.classList).not.toContain('occult');

    occultLoading();
    expect($loading.classList).toContain('occult');

    expect(document.querySelector('.info-element')).toBeNull();
  });
});
