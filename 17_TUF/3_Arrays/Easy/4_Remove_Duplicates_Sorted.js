function removeDuplicates(arr){
    let set = new Set(arr);
    let uniqueArr = Array.from(set);
    for(let i = 0 ; i < uniqueArr.length; i++){
        arr[i] = uniqueArr[i]
    }
    return uniqueArr.length
}

const arr = [1, 1, 2, 2, 2, 3, 3];
const k = removeDuplicates(arr);
console.log("unique elements in the array are:", arr);
console.log("The number of unique elements in the array is:", k);

console.log("The array after removing duplicate elements is:");
for (let i = 0; i < k; i++) {
  console.log(arr[i]);
}

function removeDuplicates1(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr
}

console.log(removeDuplicates1([1, 1, 2, 2, 2, 3, 3]));