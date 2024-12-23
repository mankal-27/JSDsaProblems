/**
 * Recursively prints the numbers from 1 to N to the console.
 *
 * @param {number} N - The upper limit of the numbers to be printed.
 * @return {void} This function does not return anything.
 */

function print1toN(N) {
    if(N > 0){
        console.log(N);
        print1toN(N - 1);
    }
}

module.exports = print1toN;