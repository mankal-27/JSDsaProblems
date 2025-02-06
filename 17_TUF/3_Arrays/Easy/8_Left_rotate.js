function LeftRotateArray(arr, d) {
    let temp = [];
    for(let i = 0; i < d; i++){
        temp.push(arr.shift())
    }
    let arr1 = arr.concat(temp)
    
}

console.log(LeftRotateArray([1, 2, 3, 4, 5], 2))