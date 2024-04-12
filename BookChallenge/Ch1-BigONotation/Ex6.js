function abc(n){
    for(var i=0; i<n ; i*2){
        console.log(n);
    }
}

abc(40)

//Ans
/*
O(log2n)
Logarithmic complexity. For a given n, this will operate only log2n
times because i is incremented by multiplying by 2 rather than
adding 1 as in the other examples.
*/