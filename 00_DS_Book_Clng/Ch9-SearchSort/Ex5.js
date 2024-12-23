function wordCounter(sentence){
    var wordsArray = sentence.replace(/[.]/g, "").split(" "),
        occurenceList = {},
        answerList = {};

    for(var i = 0 ; i < wordsArray.length; i++){
        var currentWord = wordsArray[i];
        if(!occurenceList[currentWord]){
            occurenceList[currentWord] = 1;
        } else {
            occurenceList[currentWord]++;
        }
    }

    var arrayTemp = [];

    for(var prop in occurenceList){
        arrayTemp.push([prop, occurenceList[prop]]);
    }
    console.log("before",arrayTemp)
    function sortComp(a,b){
        return b[1] - a[1];
    }

    arrayTemp.sort(sortComp);
    console.log("after", arrayTemp)
    for(var i = 0 ; i < arrayTemp.length; i++){
        var current = arrayTemp[i];
        answerList[current[0]] = current[1];
    }

    return answerList;
}

console.log(wordCounter("practice makes perfect. get perfect by practice. just practice"));
