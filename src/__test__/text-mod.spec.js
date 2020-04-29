// eslint-disable-next-line spaced-comment
/// <reference types="Jest" />

import { inputModification, stringModification } from '../text-mod.js';

describe('tests that inputs are propperly modificated', () => {
  test('inputModification should return a no-space, lowercase string', () => {
    expect(inputModification('Test ')).toEqual('test');
  });

  test('stringModification should return a first letter uppercase string that is not kebab-case', () => {
    expect(stringModification('test-this')).toEqual('Test this');
  });
});
