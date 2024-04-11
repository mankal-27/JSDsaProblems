function validAnagrams1(str1,str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if(str1.length !== str2.length){
        return false
    }

    const charCount = {}

    for(let char of str1){
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for(let char of str2){
        if(!charCount[char]){
            return false
        }else{
            charCount[char]--;
        }
    }
    return true
}

function validAnagrams(str1,str2){
    const freqCount1 = str1.split('').reduce((acc, char) => {
        // Increment the frequency of the character or initialize it to 1 if not present
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    const freqCount2 = str2.split('').reduce((acc, char) => {
            // Increment the frequency of the character or initialize it to 1 if not present
            acc[char] = (acc[char] || 0) + 1;
            return acc;
    }, {});

    return Object.keys(freqCount1).every(
            (char) => freqCount1[char] === freqCount2[char]
          ) && Object.keys(freqCount2).every(
            (char) => freqCount1[char] === freqCount2[char]
          );
}

module.exports = validAnagrams;
