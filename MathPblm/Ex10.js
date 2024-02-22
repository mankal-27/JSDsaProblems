//Generate random number in given range using JavaScript 

function randomNumber(min,max){
    return Math.random() * (max-min) + min;
}

console.log("Random number between 1 and 5 :", randomNumber(1,5))

function randomNumberFlor(min,max){
    max = Math.ceil(max);
    min = Math.ceil(min);
    return Math.floor(Math.random() * (max-min)) + min;
}

console.log("Random Number between 1 and 10: ")
 
// Function call
console.log( randomNumber(1, 10) );