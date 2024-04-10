function findFirstNonRepeatingCharacter(str) {
    const charSet = {}

    //Count occurance of each character in the string
    for(const char of str){
        charSet[char] = (charSet[char] || 0) + 1;
    }

    //find the first non-repeating character

    for(const char of str){
        if(charSet[char] === 1){
            return char
        }
    }

    return null;
}

module.exports = findFirstNonRepeatingCharacter;
