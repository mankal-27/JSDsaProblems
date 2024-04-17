//USE THE IMPLEMENT SQUARE ROOT FUNCTION FOR AN INTEGER WITHOUT USING ANY
// MATH LIBRARIES

function sqrtIntNaive(number){
    if(number == 0 || number == 1){
        return number
    }

    var index = 1, square = 1;

    while(square < number){
        if(square == number){
            return square
        }
        index++
        square = index * index
    }
    return index
}

let num = 9
let result = sqrtIntNaive(num)
console.log(result);

function sqrtInt(number){
    if(number == 0 || number == 1){
        return number
    }

    var start = 1 , end = number, ans;

    while(start <= end){
        let mid = parseInt((start + end ) /2);

        if(mid * mid == number){
            return mid
        }

        if(mid*mid < number){
            start = mid + 1;
            ans = mid
        }else{
            end = mid-1
        }
        return ans
    }
}

function sqrtDouble(number){
    var threshold = 0.1;

    var upper = number;
    var lower = 0;
    var middle;

    while(upper - lower > threshold){
        middle = (upper + lower) / 2;
        if(middle*middle > number){
            upper = middle
        }else{
            lower = middle
        }
    }
    return middle
}