/*

Input Format: N = 3
Result: 
* 
* * 
* * *

*/

function printPattern(n){
    let pattern = ''
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j <= i; j++){
            pattern += '*'
        }
        pattern += '\n'
    }
    console.log(pattern);
}

printPattern(5)