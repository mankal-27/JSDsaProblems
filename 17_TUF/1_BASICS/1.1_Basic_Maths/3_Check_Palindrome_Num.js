function checkPalindromeNum(N){
    let revNum = 0;
    let dupNum = N;
    while(N > 0){
        let rem = N % 10;
        revNum = revNum * 10 + rem;
        N = Math.floor(N / 10);
    }
    if(dupNum == revNum){
        return true;
    }
    else{
        return false;
    }
}

module.exports = checkPalindromeNum;