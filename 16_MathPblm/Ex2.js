//JavaScript Program to Find LCM of Two Numbers
/*
LCM (Least Common Multiple) of two numbers is the smallest positive integer that is divisible by both numbers 
without leaving a remainder. 
It’s a common multiple of the numbers.
*/

// Using Euclidean algorithm

function gcd(a,b){
    for(let temp = b ; b!==0;){
        b = a % b;
        a = temp;
        temp = b;
    }
    return a;
}

function lcmFunction(a,b){
    const gcdValue = gcd(a,b);
    return (a*b) / gcdValue;
}

let num1 = 12;
let num2 = 18;
let lcm = lcmFunction(num1, num2);
console.log("LCM of given numbers is: ", lcm)

// Without algorithm

function findLCM(a,b){
    let lar = Math.max(a,b);
    let small = Math.min(a,b);
    for(let i = lar; ; i += lar){
        if(i%small == 0){
            return i;
        }
    }
}

console.log("Lcm without algo: ", findLCM(num1, num2))