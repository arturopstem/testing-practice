import analyzeArray from './analyzeArray';

test('Simple example', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('argument is not an array', () => {
  expect(analyzeArray({ one: 1, two: 2 })).toBe(undefined);
  expect(analyzeArray(true)).toBe(undefined);
  expect(analyzeArray(42)).toBe(undefined);
});

test('missing argument', () => {
  expect(analyzeArray()).toBe(undefined);
});

test('empty array', () => {
  expect(analyzeArray([])).toStrictEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0,
  });
});

test('array with one element', () => {
  expect(analyzeArray([3])).toStrictEqual({
    average: 3,
    min: 3,
    max: 3,
    length: 1,
  });
  expect(analyzeArray([0.7])).toStrictEqual({
    average: 0.7,
    min: 0.7,
    max: 0.7,
    length: 1,
  });
});

test('array includes Infinity', () => {
  expect(analyzeArray([Infinity])).toStrictEqual({
    average: Infinity,
    min: Infinity,
    max: Infinity,
    length: 1,
  });
  expect(analyzeArray([20, 13.7, -Infinity])).toStrictEqual({
    average: -Infinity,
    min: -Infinity,
    max: 20,
    length: 3,
  });
  expect(analyzeArray([Infinity, -Infinity])).toStrictEqual({
    average: undefined,
    min: -Infinity,
    max: Infinity,
    length: 2,
  });
});

test('array includes not number values', () => {
  expect(analyzeArray([3, 10.1, true, 20])).toStrictEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 4,
  });
  expect(analyzeArray([{ one: 1.0 }, [5, 7], 20])).toStrictEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 3,
  });
});

test('array includes NaN', () => {
  expect(analyzeArray([NaN, 42])).toStrictEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 2,
  });
});
