function FindLargestElement(arr) {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max
}

console.log(FindLargestElement([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 4, 92]))