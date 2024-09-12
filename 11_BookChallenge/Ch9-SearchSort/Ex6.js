function findMinRotated(arr, low, high){
    // This condition is needed to handle the case when array is not
    // rotated at all
    if (high < low)  return arr[0];

    // If there is only one element left
    if (high == low) return arr[low];

    // Find mid
    var mid = Math.floor((low+high)/2); 

    // Check if element (mid+1) is minimum element. Consider
    // the cases like {3, 4, 5, 1, 2}
    if (mid < high && arr[mid+1] < arr[mid])
       return arr[mid+1];

    // Check if mid itself is minimum element
    if (mid > low && arr[mid] < arr[mid - 1])
       return arr[mid];

    // Decide whether we need to go to left half or right half
    if (arr[high] > arr[mid])
       return findMinRotated(arr, low, mid-1);
    return findMinRotated(arr, mid+1, high);
}

function findMinRotatedHelper(arr) {
    return findMinRotated(arr, 0, arr.length-1);
}
findMinRotatedHelper([5,6,1,2,3]);