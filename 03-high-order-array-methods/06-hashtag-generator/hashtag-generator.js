function generateHashtag(str) {
    if(str.trim() === ''){
        return false;
    }

    const words = str.trim().split(/\s+/); // Corrected splitting using /\s+/
    const capitalizedNewWords = words.map((eachWord) => eachWord.charAt(0).toUpperCase() + eachWord.slice(1));
    const hashTag = '#' + capitalizedNewWords.join('');

    return hashTag.length > 140 ? false : hashTag;
}

module.exports = generateHashtag;
