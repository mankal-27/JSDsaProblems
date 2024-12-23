/*

Input Format: N = 6
Result:   
     *
     **
     *** 
     ****
     *****
     ******  
     *****
     ****
     ***    
     **
     *

*/


function printPattern(n){
    let pattern = '';
    for(let i = 1 ; i <= 2*n-1; i++){
        let stars = i;
        if(i > n) stars = 2*n - i
        for(let j = 1; j <= stars; j++){
            pattern += '*'
        }
        pattern += '\n'
    }
    console.log(pattern);
}

printPattern(5)