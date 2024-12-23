/**
 * Reverses an array using recursion.
 *
 * @param {Array} arr - The array to be reversed.
 * @return {Array} The reversed array.
 */

function reverseArray(arr){
    if(arr.length === 0){
        return [];
    }else{
        return reverseArray(arr.slice(1)).concat(arr[0]);
    }
}

function reverseArrayUsingPointers(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      // Swap elements at left and right indices
      [arr[left], arr[right]] = [arr[right], arr[left]];
      // Move pointers towards each other
      left++;
      right--;
    }
    return arr;
}

function reverseArrayUsingRecursion(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return arr;
    // Swap elements at left and right indices
    [arr[left], arr[right]] = [arr[right], arr[left]];
    // Recursively call the function with updated indices
    return reverseArrayUsingRecursion(arr, left + 1, right - 1);
}

console.log(reverseArray([5,4,3,2,1]))

module.exports = {
    reverseArray,
    reverseArrayUsingPointers,
    reverseArrayUsingRecursion
}