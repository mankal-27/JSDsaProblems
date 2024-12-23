const assert = require('assert');
const checkPrime = require('../7_Check_Prime.js');

describe('checkPrime function', () => {
  it('should return true for prime numbers', () => {
    assert.strictEqual(checkPrime(2), true);
    assert.strictEqual(checkPrime(3), true);
    assert.strictEqual(checkPrime(5), true);
    assert.strictEqual(checkPrime(7), true);
  });

  it('should return false for non-prime numbers', () => {
    assert.strictEqual(checkPrime(4), false);
    assert.strictEqual(checkPrime(6), false);
    assert.strictEqual(checkPrime(8), false);
    assert.strictEqual(checkPrime(9), false);
  });

  it('should return false for perfect squares', () => {
    assert.strictEqual(checkPrime(4), false);
    assert.strictEqual(checkPrime(9), false);
    assert.strictEqual(checkPrime(16), false);
  });

  it('should return false for numbers with multiple factors', () => {
    assert.strictEqual(checkPrime(6), false);
    assert.strictEqual(checkPrime(8), false);
    assert.strictEqual(checkPrime(12), false);
  });

  it('should return false for edge cases', () => {
    assert.strictEqual(checkPrime(0), false);
    assert.strictEqual(checkPrime(1), false);
    assert.strictEqual(checkPrime(-1), false);
    assert.strictEqual(checkPrime(-2), false);
  });
});