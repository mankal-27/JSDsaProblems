/**
 * Calculates the factorial of a given number using recursion.
 *
 * @param {number} N - The number to calculate the factorial of.
 * @return {number} The factorial of the given number.
 */
function factorialOfNum(N){
    if(N > 0){
        return N * factorialOfNum(N - 1);
    } else {
        return 1;
    }       
}

console.log(factorialOfNum(5));
module.exports = factorialOfNum;