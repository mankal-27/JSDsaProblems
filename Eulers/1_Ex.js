//Multiples of 3 or 5

function MulAdd3To5(nums) {
    let sum = 0
    for (let i = 0; i < nums; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    return sum
}

let num = 1000
console.log(MulAdd3To5(num))