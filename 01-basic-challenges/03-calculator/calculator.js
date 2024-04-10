function calculator(num1,num2,operator) {
    let result
    switch(operator){
        case '+': 
            result = num1 + num2
            return result
        case '-': 
            result = num1 - num2
            return result
        case '*': 
            result = num1 * num2
            return result
        case '/': 
            result = num1 / num2
            return result
    }
}

module.exports = calculator;
