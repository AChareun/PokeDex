// eslint-disable-next-line spaced-comment
/// <reference types="jest" />

import callForPokeInfo from '../services.js';

beforeEach(() => {
  global.fetch = jest.fn();
});

describe('tests that the call for info works in a propper way', () => {
  test('callForPokeInfo should be called with the correct url', () => {
    global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise });
    }));

    callForPokeInfo('bulbasaur');

    expect(global.fetch)
      .toHaveBeenCalledTimes(1);

    expect(global.fetch)
      .toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/bulbasaur/');
  });

  test('callForPokeInfo should be called with "1" as default', () => {
    global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise });
    }));

    callForPokeInfo();

    expect(global.fetch)
      .toHaveBeenCalledTimes(1);

    expect(global.fetch)
      .toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1/');
  });
});
