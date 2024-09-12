//Check a number is Prime or not using JavaScript
/*
We are given a positive integer N and the task is to find out whether the given number is prime or not. A prime number is a number that is divisible by 1 and itself only.
*/

function checkPrime(num, div = 2) {
	if (num <= 1) {
		return false;
	}
	if (div > Math.sqrt(num)) {
		return true;
	}
	if (num % div === 0) {
		return false;
	} 
	else {
		return checkPrime(num, div + 1);
	}
}
console.log(checkPrime(5) ? "Passed number is Prime" :
	"Passed number is not Prime");
console.log(checkPrime(4) ? "Passed number is Prime" :
	"Passed number is not Prime");
