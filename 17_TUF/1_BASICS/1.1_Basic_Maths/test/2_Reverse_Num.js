// test/reverseDigits.test.js
const assert = require('assert');
const reverseDigits = require('../1.Count_Digits');  // Import the function from the src folder

describe('reverseDigits function', () => {
  it('should reverse positive numbers with different number of digits', () => {
    assert.strictEqual(reverseDigits(12345), 54321);
    assert.strictEqual(reverseDigits(123), 321);
    assert.strictEqual(reverseDigits(12), 21);
  });

  it('should return 0 for negative numbers', () => {
    assert.strictEqual(reverseDigits(-12345), 0);
    assert.strictEqual(reverseDigits(-123), 0);
    assert.strictEqual(reverseDigits(-12), 0);
  });

  it('should return 0 for zero', () => {
    assert.strictEqual(reverseDigits(0), 0);
  });

  it('should return the same number for single digit numbers', () => {
    assert.strictEqual(reverseDigits(5), 5);
    assert.strictEqual(reverseDigits(1), 1);
    assert.strictEqual(reverseDigits(9), 9);
  });
});
