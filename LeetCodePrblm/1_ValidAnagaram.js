function validAnagram(s,t){
    if(s.length !== t.length){
        return false
    }

    let hashMap = {}

    for(let i = 0 ; i < s.length; i++){
        let eachWord = s[i]
        if(!hashMap[eachWord]){
            hashMap[eachWord] = 1
        }else{
            hashMap[eachWord]++
        }
    }

    for(let i = 0 ; i < t.length ; i++){
        let eachWord = t[i]
        if(hashMap[eachWord] === undefined){
            return false
        }if(hashMap[eachWord] < 1){
            return false
        }
        hashMap[eachWord]--
    }
    return true
}

console.log(validAnagram('dad', 'mad'))