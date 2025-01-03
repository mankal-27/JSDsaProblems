/*
Given an array and a sum k, we need to print the length of the longest subarray that sums to k.
Input Format: N = 3, k = 5, array[] = {2,3,5}
Result: 2
Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.
*/

function longestSubarray(arr, k) {
    let highest = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            let sum = 0;
            for(let k = i; k <= j; k++){
                sum += arr[k];
            }
            if(sum === k){
                console.log("Sum:",sum);
                console.log("Index:",i, j);
                highest = Math.max(highest, j - i + 1);
                console.log("Highest:",highest);
            }
        }
    }
    return highest;
}

console.log(longestSubarray([2,3,5,1,9], 10)); // 2




function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let preSumMap = new Map();
    let sum = 0;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        // calculate the prefix sum till index i
        sum += a[i];

        // if the sum = k, update the maxLen
        if (sum === k) {
            maxLen = Math.max(maxLen, i + 1);
        }

        // calculate the sum of remaining part i.e. x - k
        let rem = sum - k;

        // calculate the length and update maxLen
        if (preSumMap.has(rem)) {
            let len = i - preSumMap.get(rem);
            maxLen = Math.max(maxLen, len);
        }

        // update the map checking the conditions
        if (!preSumMap.has(sum)) {
            preSumMap.set(sum, i);
        }
    }

    return maxLen;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);





function getLongestSubarray2(a, k) {
    let n = a.length; // size of the array

    let left = 0, right = 0; // 2 pointers
    let sum = a[0];
    let maxLen = 0;
    while (right < n) {
        // if sum > k, reduce the subarray from left
        // until sum becomes less or equal to k
        while (left <= right && sum > k) {
            sum -= a[left];
            left++;
        }

        // if sum = k, update the maxLen i.e. answer
        if (sum === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        // Move forward the right pointer
        right++;
        if (right < n) sum += a[right];
    }

    return maxLen;
}

let length = getLongestSubarray2(a, k);
console.log("The length of the longest subarray is:", length);
