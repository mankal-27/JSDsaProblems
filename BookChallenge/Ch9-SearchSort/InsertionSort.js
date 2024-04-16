//Insertion Sort
/*

The outer for loop
iterates over the array indices, and the inner for loop moves the unsorted items into the
sorted sublist on the left side of the array.

*/

function insertionSort(items){
    var len = items.length, // Number of items in the array
        value,  // the value currently being compared
        i,      // index into unsorted section
        j;      // index into sorted section

        for(i = 0 ; i < len ; i++){
            //store the current value because it may shift later
            value = items[i];

            //Whenever the value in the sorted section is greater than the value
            //in the unsorted section, shift all items in the sorted section
            // over by one. This creates sapce in which to insert the value.

            for(j = i-1; j > -1 && items[j] > value;  j--){
                items[j+1] = items[j]
            }
            items[j+1] = value;
        }
        return items;
}

var arrayToBeSorted = [6,1,23443,33343,4,5]
console.log("Before Sort : ", arrayToBeSorted);
var result = insertionSort(arrayToBeSorted);
console.log("After Sort : ", result);