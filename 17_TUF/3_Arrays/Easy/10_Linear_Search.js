/*
Problem Statement: Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.

Example 1:
Input:
N = 5
arr[] = {1, 2, 3, 4, 5}
num = 5
Output: 4
Explanation: 5 is present at index 4.
Example 2:
Input:
N = 5
arr[] = {1, 2, 3, 4, 5}
num = 6
Output: -1
 */
function linearSearch(arr, num) {
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === num){
            return i
        }
    }
    return -1
}

console.log(linearSearch([1,2,3,4,5], 5))