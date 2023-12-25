import calculator from './calculator';

describe('addition', () => {
  const { add } = calculator;

  test('both operands are numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('at least one operand is not a number', () => {
    expect(add('', 2)).toBe(undefined);
    expect(add(3.6, true)).toBe(undefined);
  });

  test('infinity', () => {
    expect(add(Infinity, Infinity)).toBe(Infinity);
    expect(add(Infinity, 2)).toBe(Infinity);
    expect(add(2, Infinity)).toBe(Infinity);
    expect(add(-Infinity, -Infinity)).toBe(-Infinity);
    expect(add(-Infinity, 2)).toBe(-Infinity);
    expect(add(2, -Infinity)).toBe(-Infinity);
    expect(add(Infinity, -Infinity)).toBe(undefined);
    expect(add(-Infinity, Infinity)).toBe(undefined);
  });

  test('missing arguments', () => {
    expect(add(2)).toBe(undefined);
    expect(add()).toBe(undefined);
  });
});

describe('subtract', () => {
  const { subtract } = calculator;

  test('both operands are numbers', () => {
    expect(subtract(2, 7)).toBe(-5);
    expect(subtract(0.4, 0.1)).toBeCloseTo(0.3);
  });

  test('at least one operand is not a number', () => {
    expect(subtract('', 2)).toBe(undefined);
    expect(subtract(3.6, true)).toBe(undefined);
  });

  test('infinity', () => {
    expect(subtract(Infinity, Infinity)).toBe(undefined);
    expect(subtract(Infinity, 2)).toBe(Infinity);
    expect(subtract(2, Infinity)).toBe(-Infinity);
    expect(subtract(-Infinity, -Infinity)).toBe(undefined);
    expect(subtract(-Infinity, 2)).toBe(-Infinity);
    expect(subtract(2, -Infinity)).toBe(Infinity);
    expect(subtract(Infinity, -Infinity)).toBe(Infinity);
    expect(subtract(-Infinity, Infinity)).toBe(-Infinity);
  });

  test('missing arguments', () => {
    expect(subtract(2)).toBe(undefined);
    expect(subtract()).toBe(undefined);
  });
});

describe('divide', () => {
  const { divide } = calculator;

  test('both operands are numbers', () => {
    expect(divide(7, 2)).toBe(3.5);
    expect(divide(0.7, 3)).toBeCloseTo(7 / 30);
  });

  test('at least one operand is not a number', () => {
    expect(divide('', 2)).toBe(undefined);
    expect(divide(3.6, true)).toBe(undefined);
  });

  test('infinity', () => {
    expect(divide(Infinity, Infinity)).toBe(undefined);
    expect(divide(Infinity, 2)).toBe(Infinity);
    expect(divide(2, Infinity)).toBeCloseTo(0);
    expect(divide(-Infinity, -Infinity)).toBe(undefined);
    expect(divide(-Infinity, 2)).toBe(-Infinity);
    expect(divide(2, -Infinity)).toBeCloseTo(0);
    expect(divide(Infinity, -Infinity)).toBe(undefined);
    expect(divide(-Infinity, Infinity)).toBe(undefined);
  });

  test('missing arguments', () => {
    expect(divide(2)).toBe(undefined);
    expect(divide()).toBe(undefined);
  });
});

describe('multiply', () => {
  const { multiply } = calculator;

  test('both operands are numbers', () => {
    expect(multiply(7, 2)).toBe(14);
    expect(multiply(0.7, 3)).toBeCloseTo(2.1);
  });

  test('at least one operand is not a number', () => {
    expect(multiply('', 2)).toBe(undefined);
    expect(multiply(3.6, true)).toBe(undefined);
  });

  test('infinity', () => {
    expect(multiply(Infinity, Infinity)).toBe(Infinity);
    expect(multiply(Infinity, 2)).toBe(Infinity);
    expect(multiply(2, Infinity)).toBe(Infinity);
    expect(multiply(-Infinity, -Infinity)).toBe(Infinity);
    expect(multiply(-Infinity, 2)).toBe(-Infinity);
    expect(multiply(2, -Infinity)).toBe(-Infinity);
    expect(multiply(Infinity, -Infinity)).toBe(-Infinity);
    expect(multiply(-Infinity, Infinity)).toBe(-Infinity);
  });

  test('missing arguments', () => {
    expect(multiply(2)).toBe(undefined);
    expect(multiply()).toBe(undefined);
  });
});
