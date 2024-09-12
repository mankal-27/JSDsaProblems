//CREATE A JAVASCRIPT SORT COMPARATOR FUNCTION THAT WOULD SORT STRING BY LENGTH

var mythical = ['dragon', 'slayer','magic','wizard of oz', 'ned stark'];

function sortComparator(a,b){
    return a.length - b.length
}
console.log("Before", mythical);
console.log('after',mythical.sort(sortComparator));

var mythical1 = ['dragon', 'slayer','magic','wizard of oz', 'ned stark'];

function sortComparator1(a, b){
    return a.indexOf("a") - b.indexOf("a")
}

console.log("Before", mythical1);
console.log('after',mythical1.sort(sortComparator1));

//Sort object elements by the number of properties, as shown here:

// var mythical3=[{prop1:", prop2:"},{prop1:", prop2:", prop3:"},{prop1:",
// prop2:"}];

function sortComparator2(a,b){
    return Object.keys(a).length - Object.keys(b).length
}
