/*

Check for a set of prime factors.
Let’s define ugly numbers as those whose only prime factors are
2, 3, or 5. The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the
first 11 ugly numbers. By convention, 1 is included.
To do this, divide the number by the divisors (2, 3, 5) until it
cannot be divided without a remainder. If the number can be
divided by all the divisors, it should be 1 after dividing everything.

*/

function maxDivide(number, divisior){
    while(number % divisior === 0){
        number /= divisior;
    }
    return number;
}

function isUgly(number){
    number = maxDivide(number,2);
    number = maxDivide(number,3);
    number = maxDivide(number,5);
    return number === 1;
}

function arrayNUglyNumber(n){
    var counter = 0, currentNumber =1, uglyNumbers = [];

    while(counter != n){
        if(isUgly(currentNumber)){
            counter++;
            uglyNumbers.push(currentNumber)
        }
        currentNumber++
    }
    return uglyNumbers;
}