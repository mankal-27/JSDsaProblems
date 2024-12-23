//JavaScript Program to Check for Palindrome Number

/*
Input : Number = 121
Output : Palindrome

Input : Number = 1331
Output : Palindrome
*/

// Using String Reversal

function checkPalindrom(num){
    let numStr = num.toString();
    let result = numStr.split('').reverse().join('');
    return numStr === result;
}

console.log(checkPalindrom(121));
console.log(checkPalindrom(3433));

function palindromeCheck(number) { 
    let numStr = number.toString(); 
    let numArr = numStr.split(''); 
    return numArr.every((num, index) => 
        num === numArr[numArr.length - 1 - index]); 
} 

console.log(palindromeCheck(1221));
console.log(palindromeCheck(121));
console.log(palindromeCheck(234))

function palindromeCheckfor(number) { 
    if (number < 0) { 
        return false; 
    } 
    let original = number; 
    let reversed = 0; 
  
    for (let temp = original; temp > 0; 
        temp = Math.floor(temp / 10)) { 
        reversed = reversed * 10 + temp % 10; 
    } 
  
    return number === reversed; 
} 
  
console.log(palindromeCheckfor(121)); 
console.log(palindromeCheckfor(12321)); 
console.log(palindromeCheckfor(12345));