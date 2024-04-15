/*
Problem: Given the array arr, find and return two indices of the array that add up to weight
or return -1 if there is no combination that adds up to weight.

For example, in an array like [1,2,3,4,5], what numbers add up to 9?
The answers are 4 and 5, of course.

*/


function findSumArr(arr, weight){
    for(var i = 0 ; i< arr.length ; i++){
        for(var j = i+1; j<arr.length; j++){
            if(arr[i] + arr[j] == weight){
                return[i,j]
            }
        }
    }
    return -1;
}

console.log(findSumArr([1,2,3,4,5], 9))
function findSumArrBetter(arr, weight){
    var hashTable = {};
    for(var i = 0 ; i < arr.length; i++){
        var currentElement = arr[i]
        var difference = weight - currentElement;

        // Check if the complementary element exists in the hash table
        if(hashTable[currentElement] !== undefined){
            console.log("Found complementary element:", currentElement, "at index:", i);
            console.log("Complementary index stored in hash table:", hashTable[currentElement]);
            return [i, hashTable[currentElement]];
        } else {
            // Store the index of the current element
            hashTable[difference] = i;
            console.log("Stored element:", difference, "at index:", i);
            console.log("Updated hash table:", hashTable);
        }
    }
    
    return -1;
}

console.log(findSumArrBetter([1,2,3,4,5], 9));

console.log(findSumArrBetter([1,2,3,4,5],9))