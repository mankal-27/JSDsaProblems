/*
Bubble sorting is the simplest sorting algorithm. It simply iterates over the entire
array and swaps elements if one is bigger than the other
*/


function swap(array, index1, index2){
    var temp = array[index1];
    array[index1] = array[index2]
    array[index2] = temp;
}

function bubbleSort(array){
    for(var i = 0 ; i < array.length; i++){
        for(var j = 0 ; j<= i; j++){
            if(array[i] < array[j]){
                swap(array, i, j)
            }
        }
    }
    return array;
}
var arrayToBeSorted = [6,1,2,3,4,5]
console.log("Before Sort : ", arrayToBeSorted);
var result = bubbleSort(arrayToBeSorted);
console.log("After Sort : ", result);