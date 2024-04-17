//FIND IF TWO ELEMENTS OF AN ARRAY ADD UP TO A GIVEN NUMBER

//Brute Force

function findTwoSum(array, sum){
    
    for(var i = 0 ; i < array.length ; i++){
        for (var j = i+1 ; j < array.length; j++){
            if(array[i] + array[j] == sum){
                return true
            }
        }
    }
    return false;
}

function findTwoSumBetter(array, sum){
    var store =  {}

    for(var i =0 ; i < array.length ; i++){
        if(store[array[i]]){
            return true
        }else{
            store[sum - array[i]] = array[i]
        }
    }
    return false
}

findTwoSumBetter([1,2,3,4,6], 10)

function findTwoSumWithReturnValues(array, sum){
    var store = {}

    for(var i = 0 ; i < array.length ; i++){
        if(store[array[i]] !== undefined){
            return[array[i], array[store[array[i]]]]
        }else{
            store[sum-array[i]] = i
        }
    }
    return [];
}

console.log(findTwoSumWithReturnValues([1,2,3,4,6], 10))