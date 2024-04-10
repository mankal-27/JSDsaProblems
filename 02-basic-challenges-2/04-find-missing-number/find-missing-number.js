function findMissingNumber(nums) {
    let n = nums.length + 1;
    let expectedSum = (n * (n+1)) / 2;
    const actualSum = nums.reduce((acc,num) => acc+num, 0);
    return expectedSum - actualSum
}

function findMissingNumber2(nums){
    let n = nums.length + 1;
    let expectedSum = (n * (n+1)) / 2;
    let sum = 0
    for(let i = 0 ; i < nums.length ; i++){
        sum = sum + nums[i]
    }
    const realSum = expectedSum - sum
    return realSum
}
module.exports = findMissingNumber;
