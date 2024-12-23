function a(n){
    for(var i=0; i<n*1000;i++){
        for(var j=0 ; j< n*20; j++){
            console.log(i+j)
        }
    }
}

//Ans
/*
O(n^2)
There are two nested loops. Ignore the constants in front of n.
*/

