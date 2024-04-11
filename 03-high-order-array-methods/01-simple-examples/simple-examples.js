const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const numberWithMapFnc = numbers.map((eachValue) => eachValue * 2)
console.log(numberWithMapFnc)

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const numbersWithFilterFnc = numbers.filter((eachValue) => eachValue %2 === 0)
console.log(numbersWithFilterFnc)

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const numbersWithReduceFnc = numbers.reduce((sum, eachValue) => sum + eachValue , 0)
console.log(numbersWithReduceFnc)

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

numbers.forEach((num) => console.log(num))

 /**
 * find: Returns the first array element that satisfies a specified condition.
 */

const returnNewValue = numbers.find((eachValue) => eachValue > 2)
console.log(returnNewValue)


/**
 * some: Checks if at least one array element satisfies a condition.
 */
const checkCondt = numbers.some((eachValue) => eachValue > 2)
console.log(checkCondt)
 

/**
 * every: Checks if all array elements satisfy a condition.
 */


const allNumsGreaterThanZero = numbers.every((num) => num > 0);

console.log(allNumsGreaterThanZero);