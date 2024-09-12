/*

Input Format: N = 6
Result:
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
6 6 6 6 6 6

*/

function printPattern(n){
    let pattern = '';
    for(let i = 1 ; i <=n ; i++){
        for(let j = 1 ; j <= i ; j++){
            pattern += i
        }
        pattern += '\n'
    }
    console.log(pattern);
}

printPattern(6)