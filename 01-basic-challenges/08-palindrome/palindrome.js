function isPalindrome(str) {
    const processedStr = str.replace(/[^a-zA-z0-9]/g, '').toLowerCase();
    let left = 0
    let right = processedStr.length -1;

    while(left < right){
        if(processedStr[left] !== processedStr[right]){
            return false
        }
        left = left + 1;
        right = right - 1;
    }
    return true
}

module.exports = isPalindrome;
