function selectionSort(arr) {
    for(let i = 0 ; i < arr.length;  i++){
        let min = i;
        for(let j = i+1; j< arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        // console.log("Before sorting array i",arr[i])
        // console.log("Before Sorting array min",arr[min])
        [arr[i], arr[min]] = [arr[min], arr[i]];
        // console.log("After sorting array i",arr[i])
        // console.log("After Sorting array min",arr[min])
    }
    return arr;
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))