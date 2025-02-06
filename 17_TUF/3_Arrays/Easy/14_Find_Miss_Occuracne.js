/* 
Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

arr[] = {2,2,1}
Result:
 1
Explanation:
 In this array, only the element 1 appear once and so it is the answer.
*/

function findMissOccuracne(arr) {
    let n = arr.length;
    for(let i = 0; i < n; i++){
        const num = arr[i];
        let count = 0;

        for(let j = 0; j < n; j++){
            if(arr[j] === num){
                count++;
            }
        }

        if(count === 1){
            return num;
        }
    }
    return -1;
}

console.log(findMissOccuracne([2,2,1])); // 1


function getSingleNum(arr){
    const n = arr.length;

    //declare the hashmap
    const hashMap = new Map();
    for(let i = 0; i < n; i++){
        const num = arr[i];
        hashMap.set(num, (hashMap.get(num) || 0) + 1)
    }

    for(const [num, count] of hashMap){
        if(count === 1){
            return num;
        }
    }
    return -1
}

console.log(getSingleNum([2,2,1])); // 1