function exampleLinear(n){
    for(let i = 0 ; i < n; i++){
        console.log(i)
    }
}

function exampleQuadratic(n){
    for(let i = 0 ; i < n ; i++){
        console.log(i)
        for(let j = i ; j< n ; j++){
            console.log(j)
        }
    }
}

function exampleCubic(n){
    for(let i = 0 ; i< n ; i++){
        console.log(i)
        for(let j = i ; j< n ; j++){
            console.log(j);
            for(let k = j ; k<n ; k++){
                console.log(k)
            }
        }
    }
}

function exampleLogarithmic(n){
    for(let i = 2; i<= n ; i=i*2){
        console.log(i);
    }
}

//Time Complexity of O(n)

function a(n){
    var count = 0;
    for(var i = 0 ; i<n ; i++){
        count += 1
    };
    return count
}

function b(n) {
    var count = 0;
    for(var i = 0; i < 5*n; i++){
        count += 1
    };
    return count
}

function c(n){
    var count = 0 ;
    for(var i = 0 ; i < n; i++){
        count += 1;
    }
    count += 3
    return count
}

//Sum Rule: “Add Big-Os Up”

// If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n)+p(n)).

function d(n){
    var count = 0;
    for(var i = 0 ; i< n ; i++){
        count +=1;
    }
    for(var i = 0 ; i< 5*n; i++){
        count += 1;
    }
    return count;
}

/*
In the above function  line 4 has f(n) = n, and line 7 has f(n) = 5n. This results in 6n.
However, when applying the coefficient rule, the final result is O(n) = n.
*/


//Product Rule: “Multiply Big-Os”

//If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n)).

function e(n){
    var count = 0 ;
    for(var i = 0 ; i<n ; i++){
        count += 1;
        for(var i=0 ; i<5*n ; i++){
            count += 1
        }
    }
    return count
}

/*

In the above function f(n) = 5n*n because line 7 runs 5n times for a total of n iterations.
Therefore, this results in a total of 5n^2 operations. Applying the coefficient rule, the result
is that O(n)=n^2.

*/

//Polynomial Rule: “Big-O to the Power of k”

//If f(n) is a polynomial of degree k, then f(n) is O(nk).

function f(k){
    var count = 0;
    for(var i =0; i< n*n ; i++){
        count += 1
    }
    return count;
}

//f(n) = nˆ2 because line 4 runs n*n iterations.

