/**
 * Recursively prints numbers from N to 1 to the console.
 *
 * @param {number} N - The starting number to print.
 * @return {void}
 */
function printNto1(N){
    if(N > 0){
        console.log(N);
        printNto1(N - 1);
    }
}

module.exports = printNto1;