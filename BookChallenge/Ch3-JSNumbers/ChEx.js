function isPrim(n){
    if(n <= 1){
        return false
    }
    for(let i = 2 ; i<n ; i++){
        if(n%i == 0){
            return false
        }
    }
    return true
}

function isPrime(n){
    if(n <= 1) return false
    if(n <= 3) return true;

    if(n%2==0 || n%3 == 0) return false;

    for(let i = 5 ; i*i <= n ; i = i+6){
        if(n%i == 0 || n%(i+2) == 0){
            return true
        }
    }
    return true;
}