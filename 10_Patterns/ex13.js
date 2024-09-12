/*

Input Format: N = 6
Result:   
1
2  3
4  5  6
7  8  9  10
11  12  13  14  15
16  17  18  19  20  21

*/

function printPattern(n){
    let pattern = ''
    let num = 1
    for(let i = 1 ; i <= n ; i++){
        for(let j = 1 ; j <= i ; j++){
            pattern += num
            pattern += " "
            num = num + 1;
        }
        pattern += '\n'
    }
    console.log(pattern);
}

printPattern(6)