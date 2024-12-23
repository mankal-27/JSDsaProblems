/*
Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.
*/

function moveZeros(arr) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        count++;
      } else {
        arr[i - count] = arr[i];
      }
    }
    for (let i = arr.length - count; i < arr.length; i++) {
      arr[i] = 0;
    }
    return arr;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));