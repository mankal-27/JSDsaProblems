//Binary search is a searching algorithm that works on sorted data
/*
Unlike the linear search
algorithm, in which every element of the array is checked, binary searches can check the
middle value to see whether the desired value is greater or smaller than it. If the desired
value is smaller, this algorithm can search through the smaller parts, or it can search
through the bigger parts if the desired value is bigger.
*/

function binarySearch(arr, n){
    var lowIndex = 0, highIndex = arr.length-1;

    while(lowIndex <= highIndex){
        var middleIndex = Math.floor((highIndex+lowIndex)/2);
        if(arr[middleIndex] == n){
            return middleIndex
        }else if(n > arr[middleIndex]){
            lowIndex = middleIndex + 1;
        }else{
            highIndex = middleIndex - 1;
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4], 4));
console.log(binarySearch([1,2,3,4], 5));