function pascalTraingle(row, col){
    if(col == 0){
        return 1;
    }else if(row == 0){
        return 0
    }else{
        return pascalTraingle(row-1, col) + pascalTraingle(row-1,col-1)
    }
}

let result = pascalTraingle(5,2)
console.log(result);