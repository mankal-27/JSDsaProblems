//MultiDimensional Array or Matrix

function Matrix(rows, columns){
    var jaggedArray = new Array(rows);
    // console.log(jaggedArray)
    for(var i = 0 ; i< columns; i+=1){
        jaggedArray[i] = new Array(rows);
    }
    return jaggedArray
}

console.log(Matrix(3,3))