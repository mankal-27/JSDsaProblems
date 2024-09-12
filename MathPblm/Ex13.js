//find number of digit

function findNoOfDigit(n){
    let counter = 0 
    let lastDigit = ''
    while(n>0){
        lastDigit = n % 10
        counter += 1
        n = Math.floor(n / 10)
    }
    console.log("Count is : ", counter);
}

findNoOfDigit(899)