var array1 = [12,3,4,2,1,34,23];


//a-b indicates that it should be from smallest to biggest (ascending).
function comparatorNumber(a,b){
    return a-b;
}

array1.sort(comparatorNumber)

//b-a indicates that it should be from Biggest to Smallest (Descending).

function comparatorNumberDesc(a,b){
    return b-a;
}

array1.sort(comparatorNumberDesc)
