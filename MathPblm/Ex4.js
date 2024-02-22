//JavaScript Program for Multiplication of Two Numbers
/*
Let's take two numbers 
a = 4 , b = 10
 
Here a is multiplicand and  b is multiplier 
a * b = 4 * 10 = 40
*/


function mul(a,b){
    return a*b
}

function multipply(a,b){
    let result = 0;
    for(let i = 1; i<=b ; i++){
        result += a;
    }
    return result
}

console.log("With * operator Mul : ", mul(2,3));
console.log("Without Operator using For loop: ", multipply(2,4))