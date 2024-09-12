// using for loop

function getNthFib(n){
    if(n <= 1) return n;

    var sum = 0,
        last = 1,
        lastToLast = 0
    
    for(var i = 1; i<n ; i++){
        sum = lastToLast + last;
        lastToLast = last;
        last = sum; 
    }

    return sum
}

console.log(getNthFib(6))

function getNthFibUsingRecursive(n){
    if(n <= 1){
        return n;
    }else{
        return getNthFibUsingRecursive(n-1) + getNthFibUsingRecursive(n-2)
    }
}

//O(2^n) for above recursive algo

//Using Tail Recursion

function getNthFibBetter(n, lastToLast, last){
    if(n == 0){
        return lastToLast
    }
    if(n == 1){
        return last
    }
    return getNthFibBetter(n-1, last, lastToLast+last)
}