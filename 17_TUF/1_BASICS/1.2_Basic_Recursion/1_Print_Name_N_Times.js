/**
 * Recursively prints "Hello" to the console a specified number of times.
 *
 * @param {number} N - The number of times to print "Hello".
 * @param {number} M - The threshold value to determine if printing should occur.
 * @return {void}
 */
function callMe(N, M) {
    if(N > M){
        console.log("Hello");
        N = N - 1;
        callMe(N, M);
    }
}

callMe(10,5);

module.exports = callMe;