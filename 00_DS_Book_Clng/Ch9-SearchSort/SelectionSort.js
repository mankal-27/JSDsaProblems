//Selection Sort
// O(n^2)
function swap(element, firstIndex, lastIndex){
    var temp = element[firstIndex]
    element[firstIndex]  = element[lastIndex]
    element[lastIndex] = temp
}
function selectionSort(items){
    var len = items.length,
        min;
    
    for(var i = 0 ; i < len ; i++){
        //set minimum to the position
        min = i;
        //check the rest of the array to see if anything is smaller
        for(var j = i+1; j < len; j++){
            if(items[j] < items[min]){
                min = j;
            }
        }
        //if minimum isn't in the position , swap it
        if(i != min){
            swap(items, i , min)
        }
    }
    return items
}

var arrayToBeSorted = [6,1,2,3,4,5]
console.log("Before Sort : ", arrayToBeSorted);
var result = selectionSort(arrayToBeSorted);
console.log("After Sort : ", result);