/**
 * Checks if a given number is an Armstrong number.
 *
 * An Armstrong number is a number that is equal to the sum of cubes of its digits.
 * For example, 371 is an Armstrong number since 3*3*3 + 7*7*7 + 1*1*1 = 371.
 *
 * @param {number} N - The number to check.
 * @return {boolean} True if the number is an Armstrong number, false otherwise.
 */

function armstrongNumber(N) {
    if (N < 0) return false; // Armstrong numbers are non-negative by definition

    const numDigits = N.toString().length;
    let sum = 0;
    let dupNum = N;

    while (N > 0) {
        let rem = N % 10;
        sum += Math.pow(rem, numDigits); // raise the digit to the power of the number of digits
        N = Math.floor(N / 10);
    }

    return sum === dupNum;
}

module.exports = armstrongNumber;
