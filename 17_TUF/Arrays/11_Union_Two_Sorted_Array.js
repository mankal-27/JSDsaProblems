/*
Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
*/

function union(arr1, arr2) {
    let result = [];
    arr1.forEach((element) => {
        if (!result.includes(element)) {
            result.push(element);
        }
    });
    arr2.forEach((element) => {
        if (!result.includes(element)) {
            result.push(element);
        }
    });
    return result;
}

function union1(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else if (arr2[j] < arr1[i]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
            j++;
        }
    }
    return result;
}