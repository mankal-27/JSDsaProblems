function CheckArraySorted(arr) {
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] < arr[i+1] || arr[i] === arr[i+1]){
            continue
        } else {
            return false
        }
    }
    return true
}

console.log(CheckArraySorted([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
console.log(CheckArraySorted([1,2,3,4,5]))