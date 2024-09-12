function countDownToZero(n){
    //base case stop at 0
    if(n < 0){
        return;
    }else{
        console.log(n);
        countDownToZero(n-1) // count down 1
    }
}

countDownToZero(10)