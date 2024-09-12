/*

Input Format: N = 6
Result:   
1          1
12        21
12       321
1234    4321
12345  54321
123456654321

*/

function printPattern(n){
    let pattern = ''
    let space = 2 *(n-1)
    for(let i = 1 ; i <=n ; i++){
        for(let j = 1 ; j <= i ; j++ ){
            pattern += j
        }
        for(let j = 1 ; j <= space ; j++ ){
            pattern += " "
        }
        for(let j = i ; j >= 1 ; j-- ){
            pattern += j            
        }
        pattern += '\n'
        space = space - 2
    }
    console.log(pattern);
}

printPattern(6)