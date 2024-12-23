/*

Given three numbers x, y, and p, compute (xˆy) % p. (This is
modular exponentiation.)
Here, x is the base, y is exponent, and p is the modulus.

*/

function modularOperation(base,exponent,modulus){
    return ((Math.pow(base,exponent)) % modulus)
}

//use of algorithm

function modularExponentiation(base,exponent,modulus){
    if(modulus == 1) return 0;

    var value = 1;

    for(var i = 0; i<exponent; i++){
        value = (value * base) % modulus
    }
    return value
}