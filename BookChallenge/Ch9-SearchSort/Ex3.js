//FIND AN ELEMENT WITHIN AN ARRAY THAT APPEARS ONLY ONCE

/*

Input:   arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8]      Output:  4
Input:   arr = [1, 1, 3, 3, 4, 4, 5, 5, 7, 7, 8]      Output:  8

*/

function findOnlyOnce(arr, low, high) {
    if (low > high) {
        return null;
    }
    if (low == high) {
        return arr[low];
    }
    
    var mid = Math.floor((high+low)/2);
    
    if (mid%2 == 0) {
        if (arr[mid] == arr[mid+1]) {
            return findOnlyOnce(arr, mid+2, high);
        } else {
            return findOnlyOnce(arr, low, mid);
        }
    } else {
        if (arr[mid] == arr[mid-1]) {
            return findOnlyOnce(arr, mid+1, high);
        } else {
            return findOnlyOnce(arr, low, mid-1);
        }
    }
}

function findOnlyOnceHelper(arr) {
    return findOnlyOnce(arr, 0, arr.length);
}
console.log(findOnlyOnceHelper([ 1, 1, 2, 4, 4, 5, 5, 6, 6,7 ]));