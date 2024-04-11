function sumOfEvenSquares(arr) {
    const evenNumber = arr.filter((eachValue) => eachValue % 2 === 0)
    const squareOfEvenNumbers = evenNumber.map((eachValue) => Math.pow(eachValue,2))
    const result = squareOfEvenNumbers.reduce((eachValue, sum) => eachValue + sum, 0)
    return result
}

/*
function sumOfEvenSquares(numbers) {
  // Filter out the even numbers from the input array.
  const evenSquares = numbers
    .filter((num) => num % 2 === 0)
    // Square each even number.
    .map((num) => num ** 2)
    // Accumulate the squared numbers to compute the sum.
    .reduce((sum, square) => sum + square, 0);

  // Return the sum of squares of even numbers.
  return evenSquares;
}
*/
module.exports = sumOfEvenSquares;
