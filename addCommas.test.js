const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

test('returns numbers with commas', () => {
  expect(addCommas(1234)).toBe('1,234');
});

test('returns numbers with commas', () => {
  expect(addCommas(1000000)).toBe('1,000,000');
});

test('returns numbers with commas', () => {
  expect(addCommas(9876543210)).toBe('9,876,543,210');
});

test('returns numbers with commas', () => {
  expect(addCommas(6)).toBe('6');
});

test('returns numbers with commas', () => {
  expect(addCommas(-10)).toBe('-10');
});

test('returns numbers with commas', () => {
  expect(addCommas(-5678)).toBe('-5,678');
});

test('returns numbers with commas', () => {
  expect(addCommas(12345.678)).toBe('12,345.678');
});

test('returns numbers with commas', () => {
  expect(addCommas(-3141592.65)).toBe('-3,141,592.65');
});