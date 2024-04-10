function displayLikes(arr) {
    let length = arr.length
    console.log("ssssss", length)
    switch(length){
        case 0 : {
            return 'no one likes this'
        }
        case 1 : {
            return `${arr[0]} likes this`
        }
        case 2 : {
            return `${arr[0]} and ${arr[1]} like this`
        }
        case 3 : {
            return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
        }
        default:{
            return `${arr[0]}, ${arr[1]} and ${length - 2} others like this`
        }
    }
}

module.exports = displayLikes;
