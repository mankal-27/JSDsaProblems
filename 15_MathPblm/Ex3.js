//JavaScript Program to Count Digits of a Given Number
/*
Input : 12345
Output : Total number of digits in 12345 is :  5

Input : 64674345 
Output : Total number of digits in 12345 is :  8
*/

let num1 = 12345;
let num2 = 99494940303;
//Reduce method

function counting(num){
    return String(num).split('').reduce(
        (count, digit) => count + 1,0
    );
}

let reduceFunct1 = counting(num1);
let reduceFunct2 = counting(num2)
console.log("Num of Digits in " + num1 + ": ", reduceFunct1);
console.log("Num of Digits in " + num2 + ": ", reduceFunct2);

//Using For Loop

function countingNumForLoop(num){
    let count = 0;
    for(let n = num; n>0; n = Math.floor(n/10)){
        count++
    }
    return count;
}

console.log("Using For Loop Num of Digits in " + num1 + ": ", countingNumForLoop(num1));
console.log("Using For Loop Num of Digits in " + num2 + ": ", countingNumForLoop(num2));

//Using String Conversion

function stringConversion(num){
    return String(num).length;
}

console.log("Using For StringFunction Num of Digits in " + num1 + ": ", stringConversion(num1));
console.log("Using For StringFunction Num of Digits in " + num2 + ": ", stringConversion(num2));


//Using Math Log10

function countingMath10log(num){
    return Math.floor(Math.log10(num) + 1);
}

console.log("Using For MathLog10Function Num of Digits in " + num1 + ": ", countingMath10log(num1));
console.log("Using For MathLog10Function Num of Digits in " + num2 + ": ", countingMath10log(num2));

//Recursion

function countDigitUsingRecursion(num){
    if(Math.abs(num) < 1){
        return 0;
    }else{
        return 1 + countDigitUsingRecursion(Math.floor(Math.abs(num) / 10));
    }
}

console.log("Using For Recursive Num of Digits in " + num1 + ": ", countDigitUsingRecursion(num1));
console.log("Using For Recursive Num of Digits in " + num2 + ": ", countDigitUsingRecursion(num2));

