const assert = require('assert');
// const checkPalindrome = require('../7_Check_Palindrome');
const checkPalindromeString = require('../7_Check_Palindrome.js');

// describe('checkPalindrome function', () => {
//   it('should return true for positive palindrome numbers', () => {
//     assert.strictEqual(checkPalindrome(121), true);
//     assert.strictEqual(checkPalindrome(12321), true);
//     assert.strictEqual(checkPalindrome(1), true);
//   });

//   it('should return false for positive non-palindrome numbers', () => {
//     assert.strictEqual(checkPalindrome(123), false);
//     assert.strictEqual(checkPalindrome(123456), false);
//   });

//   it('should return false for negative numbers', () => {
//     assert.strictEqual(checkPalindrome(-121), false);
//     assert.strictEqual(checkPalindrome(-12321), false);
//   });

//   it('should return true for zero', () => {
//     assert.strictEqual(checkPalindrome(0), true);
//   });

//   it('should return true for single digit numbers', () => {
//     assert.strictEqual(checkPalindrome(5), true);
//     assert.strictEqual(checkPalindrome(9), true);
//   });
// });


describe('checkPalindromeString function', () => {
    it('should return true for empty string', () => {
      assert.strictEqual(checkPalindromeString(''), true);
    });
  
    it('should return true for single character string', () => {
      assert.strictEqual(checkPalindromeString('a'), true);
    });
  
    it('should return true for palindrome string', () => {
      assert.strictEqual(checkPalindromeString('racecar'), true);
    });
  
    it('should return false for non-palindrome string', () => {
      assert.strictEqual(checkPalindromeString('hello'), false);
    });
  
    it('should handle string with spaces', () => {
      assert.strictEqual(checkPalindromeString('a man a plan a canal panama'), true);
    });
  
    it('should handle string with special characters', () => {
      assert.strictEqual(checkPalindromeString('A man, a plan, a canal: Panama'), true);
    });
  });
  