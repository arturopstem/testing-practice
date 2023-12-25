import capitalize from './capitalize';

test('first char is lowercase', () => {
  expect(capitalize('learning tdd')).toBe('Learning tdd');
});

test('first char is uppercase', () => {
  expect(capitalize('Unit testing')).toBe('Unit testing');
});

test('first char is not alphabetic', () => {
  expect(capitalize('007 James Bond')).toBe('007 James Bond');
  expect(capitalize(' Blank spaces ')).toBe(' Blank spaces ');
  expect(capitalize('*  Asterisk  *')).toBe('*  Asterisk  *');
});

test('empty string', () => {
  expect(capitalize('')).toBe('');
});

test('only one char', () => {
  expect(capitalize('l')).toBe('L');
  expect(capitalize('U')).toBe('U');
});

test('undefined if argument is not a string', () => {
  expect(capitalize(true)).toBe(undefined);
  expect(capitalize(3)).toBe(undefined);
  expect(capitalize({})).toBe(undefined);
  expect(capitalize([])).toBe(undefined);
  expect(capitalize(null)).toBe(undefined);
  expect(capitalize(undefined)).toBe(undefined);
});

test('no argument provided', () => {
  expect(capitalize()).toBe(undefined);
});
