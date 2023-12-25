import reverseString from './reverseString';

test('simple string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('empty string', () => {
  expect(reverseString('')).toBe('');
});

test('undefined if argument is not a string', () => {
  expect(reverseString(true)).toBe(undefined);
  expect(reverseString(3)).toBe(undefined);
  expect(reverseString({})).toBe(undefined);
  expect(reverseString([])).toBe(undefined);
  expect(reverseString(null)).toBe(undefined);
  expect(reverseString(undefined)).toBe(undefined);
});

test('no argument provided', () => {
  expect(reverseString()).toBe(undefined);
});
