/*
Input Format: N = 3
Result: 
1
1 2 
1 2 3
*/

function printPattern(n){
    let pattern = ''
    for(let i = 1 ; i <= n ; i++){
       for(let j = 1 ; j <= i ; j++){
        pattern += j
       }
       pattern += '\n'
    }
    console.log(pattern);
}

printPattern(3)