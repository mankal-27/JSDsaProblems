/*
Count Maximum Consecutive One's in the array
Input: prices = {1, 1, 0, 1, 1, 1}

Output: 3

Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

*/

function countMaxConsecutiveOnes(arr) {
    let count = 0;
    let maxCount = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 1){
            count++;
            if(count > maxCount){
                maxCount = count;
            }
        } else {
            count = 0;
        }
        }
        return maxCount;
}    

console.log(countMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); //3
