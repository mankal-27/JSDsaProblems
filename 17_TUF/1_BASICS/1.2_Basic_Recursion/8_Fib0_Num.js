/**
 * Calculates the Fibonacci number for a given index using recursion.
 *
 * @param {number} N - The index of the Fibonacci number to calculate.
 * @return {number} The Fibonacci number at the given index.
 */

function fibonacciNum(N) {
    if(N == 0 || N == 1){
        return N;
    }else{
        return fibonacciNum(N - 1) + fibonacciNum(N - 2);
    }
}   
console.log(fibonacciNum(8))
module.exports = fibonacciNum;