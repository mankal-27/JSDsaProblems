const assert = require('assert');
const reverseArray = require('../6_Reverse_Array');
const reverseArrayUsingPointers = require('../6_Reverse_Array');
const reverseArrayUsingRecursion = require('../6_Reverse_Array');
describe('reverseArray function', () => {
  it('should return an empty array for an empty input', () => {
    assert.deepStrictEqual(reverseArray([]), []);
  });

  it('should return the same array for an array with one element', () => {
    assert.deepStrictEqual(reverseArray([1]), [1]);
  });

  it('should reverse an array with multiple elements', () => {
    assert.deepStrictEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
  });

  it('should reverse an array with duplicate elements', () => {
    assert.deepStrictEqual(reverseArray([1, 2, 2, 3, 3, 3]), [3, 3, 3, 2, 2, 1]);
  });

  it('should reverse an array with negative numbers', () => {
    assert.deepStrictEqual(reverseArray([-1, -2, -3, -4, -5]), [-5, -4, -3, -2, -1]);
  });
});


describe('reverseArrayUsingPointers function', () => {
  it('should return an empty array when given an empty array', () => {
    const arr = [];
    const result = reverseArrayUsingPointers(arr);
    assert.deepStrictEqual(result, []);
  });

  it('should return the same array when given an array with one element', () => {
    const arr = [1];
    const result = reverseArrayUsingPointers(arr);
    assert.deepStrictEqual(result, [1]);
  });

  it('should reverse an array with two elements', () => {
    const arr = [1, 2];
    const result = reverseArrayUsingPointers(arr);
    assert.deepStrictEqual(result, [2, 1]);
  });

  it('should reverse an array with multiple elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = reverseArrayUsingPointers(arr);
    assert.deepStrictEqual(result, [5, 4, 3, 2, 1]);
  });

  it('should reverse an array with duplicate elements', () => {
    const arr = [1, 2, 2, 3, 3, 3];
    const result = reverseArrayUsingPointers(arr);
    assert.deepStrictEqual(result, [3, 3, 3, 2, 2, 1]);
  });

  it('should reverse an array with negative numbers', () => {
    const arr = [-1, -2, -3, -4, -5];
    const result = reverseArrayUsingPointers(arr);
    assert.deepStrictEqual(result, [-5, -4, -3, -2, -1]);
  });

  it('should reverse an array with mixed data types', () => {
    const arr = [1, 'a', 2, 'b', 3, 'c'];
    const result = reverseArrayUsingPointers(arr);
    assert.deepStrictEqual(result, ['c', 3, 'b', 2, 'a', 1]);
  });
});


describe('reverseArrayUsingRecursion function', () => {
  it('returns an empty array when given an empty array', () => {
    assert.deepEqual(reverseArrayUsingRecursion([]), []);
  });

  it('returns the same array when given an array with one element', () => {
    assert.deepEqual(reverseArrayUsingRecursion([1]), [1]);
  });

  it('reverses an array with two elements', () => {
    assert.deepEqual(reverseArrayUsingRecursion([1, 2]), [2, 1]);
  });

  it('reverses an array with multiple elements', () => {
    assert.deepEqual(reverseArrayUsingRecursion([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
  });

  it('reverses an array with duplicate elements', () => {
    assert.deepEqual(reverseArrayUsingRecursion([1, 2, 2, 3, 3, 3]), [3, 3, 3, 2, 2, 1]);
  });

  it('reverses an array with negative numbers', () => {
    assert.deepEqual(reverseArrayUsingRecursion([-1, -2, -3, -4, -5]), [-5, -4, -3, -2, -1]);
  });
});