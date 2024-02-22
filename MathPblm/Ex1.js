//JavaScript Program to Add Two Numbers

// + operator

let num1 = 10;
let num2 = 20;
let addResult = num1 + num2;
console.log("Sum Is : ", addResult)

// Function

function additionFunction(a,b){
    return a + b;
}

let functionResult = additionFunction(num1,num2);
console.log("Sum of given number using function :", functionResult)

// Arrow function

let addition = (a,b) => a + b;

let arrowResult = addition(num1, num2);
console.log("Sum of Given Numbers using arrow function :", arrowResult)

//Assignment operator

num1 += num2;
console.log("Sum of the given number using assignment operator: ", num1);