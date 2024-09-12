/*
Input Format: N = 6
Result:
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1
*/

function printPattern(n){
    let pattern = '';
    for(let i = 1 ; i <=n ; i++){
        for(let j = 1 ; j <= n-i+1; j++){
            pattern += j
        }
        pattern += '\n'
    }
    console.log(pattern);
}

printPattern(4)