//JavaScript Program to Find the Sum of Natural Numbers

/*
Input : n = 3
Output: 6
Explanation: 1 + 2 + 3 = 6
Input : 5
Output: 15 
Explanation: 1 + 2 + 3 + 4 + 5 = 15
*/

/*
The formula to find the sum of the first N natural numbers is (N * (N + 1)) / 2.
*/

let num = 10

function findSum(n){
    let sum = 0;
    for(let i = 0 ; i <= n; i++){
        sum = sum + i;
    }
    return console.log("Sum Of Number " + n + " is: ", sum)
}

function findSumRecursive(n){
    if(n !== 0){
        return n + findSumRecursive(n-1);
    }else{
        return n
    }
}

function findSumWithFormula(n){
    return n * (n+1)/2
}

findSum(num);
console.log("Sum Of Number " + num + " is: ", findSumRecursive(num) )
console.log("Sum Of Number " + num + " is: ", findSumWithFormula(num) )