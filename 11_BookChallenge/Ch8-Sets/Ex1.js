//USING SETS TO CHECK FOR DUPLICATES IN AN ARRAY

function checkDuplicatesInArray(arr){
    var mySet = new Set(arr)
    if(arr.length !== mySet.size){
        return true
    }else{
        return false
    }
}

console.log(checkDuplicatesInArray([1,2,2,3,4,5]));
console.log(checkDuplicatesInArray([1,2,3,4]));

function checkDuplicatesInArray1(arr){
    var mySet = new Set(arr)
    return arr.length > mySet.size
}

console.log(checkDuplicatesInArray1([1,2,2,3,4,5]));
console.log(checkDuplicatesInArray1([1,2,3,4]));
