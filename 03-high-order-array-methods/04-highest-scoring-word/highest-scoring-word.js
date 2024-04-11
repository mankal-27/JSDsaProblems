function calculateScore(word) {
    return word
        .split('')
        .map((char) => char.charCodeAt(0)- 'a'.charCodeAt(0) + 1)
        .reduce((sum,score) => sum + score, 0);
}

function highestScoringWord(words) {
    const highestWord = words
        .split(' ')
        .reduce((prevWord, currWord) => {
            const prevScore = calculateScore(prevWord);
            const currScore = calculateScore(currWord);
            return currScore > prevScore ? currWord:prevWord
        })

    return highestWord
}

module.exports = highestScoringWord;
