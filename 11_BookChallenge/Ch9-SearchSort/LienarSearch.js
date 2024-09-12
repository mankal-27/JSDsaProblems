//Searching refers to iterating over the data structure’s elements to retrieve some data.

//A linear search works by going through each element of the array one index after another
//sequentially.

// use a linear search when the array is not sorted

//Iterarte through the array and find

function linearSearch1(arr, n){
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] == n){
            return true
        }
    }
    return false
}

console.log(linearSearch1([1,2,3,4,5,6,7,8,9], 6));
console.log(linearSearch1([1,2,3,4,5,6,7,8,9], 10));