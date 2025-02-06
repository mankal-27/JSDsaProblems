/*Find the missing number in an array 

Input Format:
 N = 5, array[] = {1,2,4,5}
Result:
 3
Explanation: 
In the given array, number 3 is missing. So, 3 is the answer.

*/

function findMissingNum(arr, N){
    let expectedSum = N*(N+1)/2;
    let actualSum = arr.reduce((a, b) => a+b,0);

    return expectedSum - actualSum;
}

let arr = [1, 2, 4, 5];
let N = 5;
console.log(findMissingNum(arr, N));