function abc(n){
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            for(var k=0; k<n; K++){
                for(var l=0; l<10; l++){
                    console.log(i+j+k+l);
                }
            }
        }
    }
}


//Ans
/*

O(n^3)
There are four nested loops, but the last loop runs only until 10.

*/