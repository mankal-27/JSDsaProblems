/**
 * Checks if a given number is a palindrome.
 *
 * @param {number} N - the number to check
 * @return {boolean} true if the number is a palindrome, false otherwise
 */
// function checkPalindrome(N) {
//     let rev = 0;
//     let temp = N;
//     while (temp > 0) {
//         let rem = temp % 10;
//         rev = rev * 10 + rem;
//         temp = Math.floor(temp / 10);
//     }
//     return N === rev;
// }   

/**
 * Checks if a given string is a palindrome.
 *
 * @param {string} str - the input string to check
 * @return {boolean} true if the string is a palindrome, false otherwise
 */

function checkPalindromeString(str) {
    // Remove all non-alphanumeric characters and convert the string to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let rev = "";
    for(let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }

    return str === rev;
}
module.exports = {
    //checkPalindrome: checkPalindrome,
    checkPalindromeString: checkPalindromeString
}