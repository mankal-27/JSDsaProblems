const assert = require('assert');
const countDigits = require('../1.Count_Digits'); // Import the function from the src folder

describe('countDigits function', () => {
  it('should return the correct count for positive numbers with different number of digits', () => {
    assert.strictEqual(countDigits(12345), 5);
    assert.strictEqual(countDigits(123), 3);
    assert.strictEqual(countDigits(12), 2);
  });

  it('should return 0 for negative numbers', () => {
    assert.strictEqual(countDigits(-12345), 0);
    assert.strictEqual(countDigits(-123), 0);
    assert.strictEqual(countDigits(-12), 0);
  });

  it('should return 0 for zero', () => {
    assert.strictEqual(countDigits(0), 0);
  });

  it('should return 1 for single digit numbers', () => {
    assert.strictEqual(countDigits(5), 1);
    assert.strictEqual(countDigits(1), 1);
    assert.strictEqual(countDigits(9), 1);
  });
});