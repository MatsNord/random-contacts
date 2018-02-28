import {
  capitalizeFirstLetter
} from './stringUtils';

describe('stringUtils', () => {
  test('Capitalize first letter', () => {
    expect(capitalizeFirstLetter('abc def')).toBe('Abc def');
    expect(capitalizeFirstLetter('123 ghi')).toBe('123 ghi');
  });
});