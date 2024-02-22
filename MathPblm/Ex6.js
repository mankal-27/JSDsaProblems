//How to swap two variables in JavaScript ?

//Use Temp
/*
temp = a;
a = b;
b = temp;
*/

function swap(a,b){
    console.log(`before swapping: a= ${a}`);
    console.log(`before swapping b= ${b}`);
    let temp;
    temp = a;
    a = b;
    b = temp;
    console.log(`after swapping a= ${a}`);
    console.log(`after swapping b= ${b}`);
}

swap(4,8)

//Substract
/*
a = a + b;
b = a - b;
a = a - b;
*/

function swapUsingSub(a,b){
    console.log(`before swapping: a= ${a}`);
    console.log(`before swapping b= ${b}`);

    a = a + b;
    b = a - b;
    a = a - b;

    console.log(`after swapping a= ${a}`);
    console.log(`after swapping b= ${b}`);
}

swapUsingSub(5,8)

//Destrucive Assignment

function desctructiveSwap(a,b){
    console.log(`before swapping: a= ${a}`);
    console.log(`before swapping b= ${b}`);
    [b,a] = [a,b]
    console.log(`after swapping a= ${a}`);
    console.log(`after swapping b= ${b}`);
}

desctructiveSwap(1,9)

//Xor

function xorSwap(a,b){
    console.log(`before swapping: a= ${a}`);
    console.log(`before swapping b= ${b}`);
    a = a^b;
    b = a^b;
    a = a^b;
    console.log(`after swapping a= ${a}`);
    console.log(`after swapping b= ${b}`);
}