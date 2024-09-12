function merge(leftA, rightA){
    var results = [],
        leftIndex = 0,
        rightIndex = 0;

    while(leftIndex < leftA.length && rightIndex < rightA.length){
        if(leftA[leftIndex] < rightA[rightIndex]){
            results.push(leftA[leftIndex++])
        }else{
            results.push(rightA[rightIndex++])
        }
    }

    var leftRemains = leftA.slice(leftIndex),
        rightRemains = rightA.slice(rightIndex);
    
    return results.concat(leftRemains).concat(rightRemains)
}

function mergeSort(array){

    if(array.length < 2){
        return array; //base case : array is now sorted sice its just 1 element
    }

    var midpoint = Math.floor((array.length)/2),
        leftArray = array.slice(0, midpoint),
        rightArray = array.slice(midpoint);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

var arrayToBeSorted = [6,1,23,4,2,3]
console.log("Before Sort : ", arrayToBeSorted);
var result = mergeSort(arrayToBeSorted);
console.log("After Sort : ", result);