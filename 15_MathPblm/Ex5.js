//JavaScript Program to Check if a Number is Odd or Even

/*
Even = {2k : k ∈ Z}
Odd = {2k + 1 : k ∈  Z}
where k is an integer. 
*/

/*
Input: 2
Output: Even number
Input: 41
Output: Odd Number
*/

// Using Modulo Operator

function moduloOperation(num){
    if(num % 2 == 0){
        return console.log("Given Number " + num + " is Even.")
    }else{
        return console.log("Given Number " + num + " is Odd.")
    }
}

// Using Bitwise and Operator

function checkEvenOddUsingBitwiseAnd(num){
    if(num & 1 == 1){
        return console.log("Given Number " + num + " is Odd.")
    }else{
        return console.log("Given Number " + num + " is Even.")
    }
}

//Using Bitwise Or operator

function checkEvenOddUsingBitwiseOr(num){
    if(num | 1 == num){
        return console.log("Given Number " + num + " is Odd.")
    }else{
        return console.log("Given Number " + num + " is Even.")
    }
}

moduloOperation(4);
checkEvenOddUsingBitwiseAnd(3)
checkEvenOddUsingBitwiseOr(5);

//JavaScript Program to Check if a number is Positive, Negative, or Zero

function checkNumSign(num){
    switch(Math.sign(num)){
        case 1: 
            console.log("The Number is Positive");
            break
        case -1: 
            console.log("The Number is Negative");
            break    
        default:
            console.log("The Number is zero");
    }
}

checkNumSign(3)
checkNumSign(-3)
checkNumSign(0)