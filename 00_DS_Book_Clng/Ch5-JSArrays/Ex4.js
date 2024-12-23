//FIND COMMON ELEMENTS IN K-SORTED ARRAYS

function commonElement(kArray){
    var hashMap = {},
        last,
        answer = [];
    
    for(let i = 0 ; i < kArray.length ; i++){
        let currentArray = kArray[i],
            last = null;
        for(let j = 0 ; j< currentArray.length; j++){
            let currentElement = currentArray[j]
            if(last != currentElement){
                if(!hashMap[currentElement]){
                    hashMap[currentElement] = 1
                }else{
                    hashMap[currentElement]++;
                }
            }
            last = currentElement;
        }
    }

    for(var prop in hashMap){
        if(hashMap[prop] == kArray.length){
            answer.push(parseInt(prop))
        }
    }

    return answer;
}

console.log(commonElement([[1 ,2 ,3 ],[1 ,2 ,3 ,4 ],[1 ,2 ]]))