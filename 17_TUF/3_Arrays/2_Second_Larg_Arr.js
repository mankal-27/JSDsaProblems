/*Find Second Largest and Second Smallest in Array */
function findSecondLargest(arr) {
    if (arr.length === 0 || arr.length === 1) {
        console.log(-1 + " " + -1); // Edge case when only one element is present in the array
        return;
      }
    let max = arr[0];
    let secondMax = -Infinity;
    let min = arr[0];
    let secondMin = Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        } else if(arr[i] < max && arr[i] > secondMax){
            secondMax = arr[i];
        }

        if(arr[i] < min){
            secondMin = min;
            min = arr[i];
        } else if(arr[i] > min && arr[i] < secondMin){
            secondMin = arr[i];
        }
    }
    return [secondMax, secondMin]
}

console.log(findSecondLargest([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))