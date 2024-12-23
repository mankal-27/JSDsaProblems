// Convert Decimal(Base 10) To Binary Number

/*
To do this, keep dividing the number by 2 and each time calculate the modulus (remainder)
and division.
*/

function base10ToBinary(n){
    var binaryString = '';

    function base10ToBinaryHelper(n){
        if(n < 2){
            binaryString += n;
            return;
        }else{
            base10ToBinaryHelper(Math.floor(n/2))
            base10ToBinaryHelper(n%2);
        }
    }
    base10ToBinaryHelper(n)

    return binaryString;
}

console.log(base10ToBinary(232));