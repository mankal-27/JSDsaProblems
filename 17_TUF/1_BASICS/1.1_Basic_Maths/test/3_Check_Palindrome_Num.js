const assert = require('assert');
const checkPalindromeNum = require('../3_Check_Palindrome_Num');
describe('checkPalindromeNum function', () => {
  it('should return true for positive palindrome numbers', () => {
    assert.strictEqual(checkPalindromeNum(121), true);
    assert.strictEqual(checkPalindromeNum(12321), true);
    assert.strictEqual(checkPalindromeNum(1), true);
  });

  it('should return false for positive non-palindrome numbers', () => {
    assert.strictEqual(checkPalindromeNum(123), false);
    assert.strictEqual(checkPalindromeNum(123456), false);
  });

  it('should return false for negative numbers', () => {
    assert.strictEqual(checkPalindromeNum(-121), false);
    assert.strictEqual(checkPalindromeNum(-12321), false);
  });

  it('should return true for zero', () => {
    assert.strictEqual(checkPalindromeNum(0), true);
  });

  it('should return true for single digit numbers', () => {
    assert.strictEqual(checkPalindromeNum(5), true);
    assert.strictEqual(checkPalindromeNum(9), true);
  });
});