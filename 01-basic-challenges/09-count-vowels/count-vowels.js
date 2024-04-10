function countVowels(str) {
    let processedStr = str.toLowerCase()
    let count = 0;
    let vowels = ['a','e', 'i', 'o', 'u']

    for(let i = 0 ; i<= processedStr.length ; i++){
        if(vowels.includes(processedStr[i])){
            count++
        }
    }
    return count
}

module.exports = countVowels;
