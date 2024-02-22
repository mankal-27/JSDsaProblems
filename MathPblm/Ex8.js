//JavaScript Program for Armstrong Numbers
/*
An Armstrong Number is an n-digit number that is the sum of the nth power of its all digits. For instance, Consider a 3-digit number, i.e., 153, which is a 3-digit number, & the sum of the cube of all its digits will be the number itself, i.e. 153.
*/

/*
13 = 1
53 = 5*5*5 = 125
33 = 3*3*3 = 27
13 + 53 + 33 = 1+125+27 = 153  
*/

function order(num){
    let n = 0;
    while(num > 0){
        n++;
        num = Math.floor(num/10);
    }
    return n;
}
function isArmstrong(n){
    let temp = n;
    let o = order(temp);
    let sum = 0;

    while(temp){
        let remainder = temp % 10;
        temp = Math.floor(temp/10);
        sum = sum + Math.pow(remainder, o);
    }

    if(sum === n){
        console.log(n + " Is an Armstrong number")
    }else{
        console.log(n + " Is not an Armstrong number")
    }
}

isArmstrong(153)
isArmstrong(520);