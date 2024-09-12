/*

Print all primes less than n.
To do this, use the isPrime function covered in this chapter.
Simply iterate from 0 to n and print any prime numbers where
isPrime() evaluates to true.

*/

function allPrimeLessThanN(n){
    for(var i = 0 ; i<n ; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

function isPrime(n){
    if(n <= 1) return false;
    if(n <= 3) return true;

    if(n%2 == 0 || n%3 == 0){
        return false
    }

    for(var i = 5; i*i < n; i= i+6){
        if(n % i == 0 || n %(i+2) == 0){
            return false
        }
    }
    return true;
}