function removeDuplicates(nums){
    let k = 1;
    for(let i = 1; i< nums.length ; i++){
        if(nums[i] !== nums[i-1]){
            nums[k] = nums[i];
            k++
        }
    }
    return k
}

var arr1 = [0,0,1,1,1]

console.log(removeDuplicates(arr1))
console.log(arr1);