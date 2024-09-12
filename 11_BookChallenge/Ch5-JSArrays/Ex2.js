/*

.slice() takes two parameters: the beginning index and the last ending index of the array.
It returns a portion of an existing array without modifying the array function arraySlice
(array, beginIndex, endIndex).

*/

function arraySlice(array, beginIndex, endIndex){
    if(!beginIndex && !endIndex){
        return array;
    }
    //if only begingin index is found, set endIndex to size of array
    if(beginIndex && !endIndex){
        endIndex = array.length
    }
    var partArray = [];

    //if both begin and end index specified return the part of the array
    for(var i = beginIndex; i< endIndex; i++){
        partArray.push(array[i])
    }
    return partArray
}

console.log(arraySlice([1,2,3,4],1,2))
console.log(arraySlice([1,2,3,4],2,4))
console.log(arraySlice([1,2,3,4],1))