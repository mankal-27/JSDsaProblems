/*
Problem Statement: Given an integer N return the reverse of the given number.

Note: If a number has trailing zeros, then its reverse will not include them. For e.g., reverse of 10400 will be 401 instead of 00401.

Example 1:
Input:N = 12345
Output:54321
Explanation: The reverse of 12345 is 54321.
Example 2:
Input:N = 7789
Output: 9877
Explanation: The reverse of number 7789 is 9877.

*/

function reverseDigits(N) {
    let rev = 0;
    while (N > 0) {
        rev = rev * 10 + (N % 10);
        N = Math.floor(N / 10);
    }
    return rev;
  }
  
  // Export the function so it can be imported in the test file
  module.exports = reverseDigits;
  
