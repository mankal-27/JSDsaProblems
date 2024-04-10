function arrayIntersection(arr1, arr2) {
    let intersectionArr = []
    for(let i = 0 ; i< arr1.length ; i++){
        if(arr2.includes(arr1[i]) && !intersectionArr.includes(arr1[i])){
            intersectionArr.push(arr1[i])
        }
    }
    return intersectionArr
}

function arrayIntersection2(arr1, arr2) {
    // Create a set from arr1
    const set1 = new Set(arr1);
    // Declare an empty array to store the intersection
    const intersection = [];
  
    // Loop through arr2
    for (let num of arr2) {
      // If the current number is in set1, add it to the intersection array
      if (set1.has(num)) {
        intersection.push(num);
      }
    }
  
    return intersection;
  }

module.exports = arrayIntersection;
