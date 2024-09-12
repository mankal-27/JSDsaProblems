/*
Input Format: N = 6
Result:
     *     
    ***    
   *****   
  *******  
 ********* 
***********

*/

function printPattern(n){
    let pattern = '';
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n-i-1 ; j++){
            pattern += " "
        }

        for(let j = 0 ; j < 2*i +1 ; j++){
            pattern += "*"
        }

        for(let j = 0 ; j < n-i-1 ; j++){
            pattern += " "
        }

        pattern += "\n"
    }
    console.log(pattern);
}

printPattern(6)