/**
 * Calculates the sum of the first N natural numbers.
 *
 * @param {number} N - The number of natural numbers to sum.
 * @return {number} The sum of the first N natural numbers.
 */
function sumOfFirstNNaturalNum(N){
    if(N > 0){
        return N + sumOfFirstNNaturalNum(N - 1);
    }
    return 0;
}

console.log(sumOfFirstNNaturalNum(5));

module.exports = sumOfFirstNNaturalNum; 