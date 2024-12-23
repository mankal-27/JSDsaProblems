/*

Input Format: N = 6
Result:   
1
01
101
0101
10101
010101

*/

function printPattern(n){
    let pattern = ''
    for(let i = 0 ; i <= n ; i++){
        if(i % 2 === 0) {
            start = 1
        }else{
            start = 0
        }
        for(let j = 0 ; j <= i ; j++){
            pattern += start
            start = 1 - start
        }
        pattern += '\n'
    }
    console.log(pattern);
}

printPattern(6)