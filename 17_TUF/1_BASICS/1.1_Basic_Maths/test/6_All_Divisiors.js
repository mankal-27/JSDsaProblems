const assert = require('assert');
const findDivisors = require('../6_All_Divisiors');

describe('findDivisors function', () => {
  it('should return divisors of perfect square numbers', () => {
    assert.deepEqual(findDivisors(16), [1, 2, 4, 8, 16]);
    assert.deepEqual(findDivisors(25), [1, 5, 25]);
  });

  it('should return divisors of non-perfect square numbers', () => {
    assert.deepEqual(findDivisors(10), [1, 2, 5, 10]);
    assert.deepEqual(findDivisors(12), [1, 2, 3, 4, 6, 12]);
  });

  it('should return divisors of prime numbers', () => {
    assert.deepEqual(findDivisors(7), [1, 7]);
    assert.deepEqual(findDivisors(11), [1, 11]);
  });

  it('should return divisors of numbers having multiple divisors', () => {
    assert.deepEqual(findDivisors(24), [1, 2, 3, 4, 6, 8, 12, 24]);
    assert.deepEqual(findDivisors(36), [1, 2, 3, 4, 6, 9, 12, 18, 36]);
  });

  it('should return empty array for 0', () => {
    assert.deepEqual(findDivisors(0), []);
  });

  it('should return [1] for 1', () => {
    assert.deepEqual(findDivisors(1), [1]);
  });

  it('should return divisors for negative numbers', () => {
    assert.deepEqual(findDivisors(-10), [1, 2, 5, 10]);
    assert.deepEqual(findDivisors(-12), [1, 2, 3, 4, 6, 12]);
  });
});