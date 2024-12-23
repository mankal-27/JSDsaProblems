const assert = require('assert');
const factorialOfNum = require('../5_Factorial_Of_A_Num');

describe('factorialOfNum function', () => {
  it('returns the correct factorial for positive numbers', () => {
    assert.strictEqual(factorialOfNum(5), 120);
    assert.strictEqual(factorialOfNum(3), 6);
    assert.strictEqual(factorialOfNum(1), 1);
  });

  it('returns 1 for 0', () => {
    assert.strictEqual(factorialOfNum(0), 1);
  });

  it('returns 1 for negative numbers', () => {
    assert.strictEqual(factorialOfNum(-5), 1);
    assert.strictEqual(factorialOfNum(-1), 1);
  });
});