/*

Example 1:
Input: N = 3
Output: 
* * *
* * *
* * *

*/

function printPattern(n){
    let pattern = '';
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n ; j++){
            pattern += '* '
        }
        pattern += '\n'
    }
    console.log(pattern);
}

printPattern(5)