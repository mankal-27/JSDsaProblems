function removeAllZeros(arr) {
    
    let k = arr.length
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            arr.splice(i, 1);
            i--;
        }
    }
    
    let n = k - arr.length
    for(let i = 0; i < n; i++){
        
        arr.push(0)
    }
    
    return arr
}

console.log(removeAllZeros([1, 0, 2, 0, 3, 0, 4, 0, 5,3,4]))