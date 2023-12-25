import ceaserCipher from './caesarCipher';

test('positive shift lowercase', () => {
  expect(ceaserCipher('a', 1)).toBe('b');
  expect(ceaserCipher('y', 3)).toBe('b');
});

test('negative shift lowercase', () => {
  expect(ceaserCipher('a', -3)).toBe('x');
  expect(ceaserCipher('y', -1)).toBe('x');
});

test('positive shift uppercase', () => {
  expect(ceaserCipher('A', 1)).toBe('B');
  expect(ceaserCipher('Y', 3)).toBe('B');
});

test('negative shift uppercase', () => {
  expect(ceaserCipher('A', -3)).toBe('X');
  expect(ceaserCipher('Y', -1)).toBe('X');
});

test('shift non alphabetic char', () => {
  expect(ceaserCipher(' ', -3)).toBe(' ');
  expect(ceaserCipher('/', -1)).toBe('/');
  expect(ceaserCipher('%', -1)).toBe('%');
});

test('missing arguments', () => {
  expect(ceaserCipher()).toBe(undefined);
  expect(ceaserCipher('H')).toBe('H');
  expect(ceaserCipher('key is undefined', undefined)).toBe('key is undefined');
});

test('sentences', () => {
  expect(ceaserCipher('Hallo Welt', 13)).toBe('Unyyb Jryg');
  expect(ceaserCipher('JavaScript TDD', -23)).toBe('MdydVfulsw WGG');
  expect(ceaserCipher('Unit Testing with Jest', 42)).toBe(
    'Kdyj Juijydw myjx Zuij',
  );
  expect(ceaserCipher('Caeser Cipher', -71)).toBe('Jhlzly Jpwoly');
});

test('punctuation', () => {
  expect(ceaserCipher('"...Punctuation!"', 17)).toBe('"...Gletklrkzfe!"');
});

test('key is Infinity', () => {
  expect(ceaserCipher('Not allowed', Infinity)).toBe(undefined);
  expect(ceaserCipher('Not allowed', -Infinity)).toBe(undefined);
});

test('key is not an integer', () => {
  expect(ceaserCipher('Will work', 3.0)).toBe('Zloo zrun');
  expect(ceaserCipher('Wont work', 3.1)).toBe(undefined);
  expect(ceaserCipher('Wont work', NaN)).toBe(undefined);
  expect(ceaserCipher('Wont work', null)).toBe(undefined);
  expect(ceaserCipher('Wont work', { key: 'value' })).toBe(undefined);
  expect(ceaserCipher('Wont work', [4, 2])).toBe(undefined);
});
