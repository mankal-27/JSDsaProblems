function interSection(arr1, arr2){
    const vals = {}
    const res = [];

    for(let num of arr1){
        if(!vals[num]){
            vals[num] = 1;
        }else{
            vals[num]++
        }
    }

    for(let num of arr2){
        if(vals[num] > 0){
            res.push(num)
            vals[num]--;
        }
    }

    return res
}
var nums1 = [1,2,2,1,3], nums2 = [2,2,3,4]
console.log(interSection(nums1, nums2))