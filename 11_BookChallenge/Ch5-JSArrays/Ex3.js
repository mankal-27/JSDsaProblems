/*
FIND THE MEDIAN OF TWO SORTED ARRAYS OF THE SAME SIZE

/*

Recall that median in an even number of a set is the average of the two middle numbers.
If the array is sorted, this is simple.
Here’s an example:
[1,2,3,4] has the median of (2+3)/2 = 2.5.

*/

function medianOfArray(array){
    var length = array.length;
    if(length % 2 == 1){
        return array[Math.floor(length/2)]
    }else{
        return (array[length/2] + array[length/2 - 1])/2
    }
}

function medianOfTwoSortedArray(arr1,arr2,pos){
    if(pos <= 0){
        return -1
    }

    if(pos == 1){
        return (arr1[0] + arr2[0]) / 2
    }

    if(pos == 2){
        return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1] + arr2[1])) / 2
    }

    var median1 = medianOfArray(arr1)
    var median2 = medianOfArray(arr2)

    if(median1 == median2){
        return median1
    }

    var evenOffSet = pos % 2 == 0 ? 1 : 0,
        offSetMinus = Math.floor(pos/2) - evenOffSet,
        offSetPlus = Math.floor(pos / 2) + evenOffSet;

    if(median1 < median2){
        return medianOfTwoSortedArray(arr1.slice(offSetMinus), arr2.slice(offSetMinus), offSetPlus)
    }else{
        return medianOfTwoSortedArray(arr2.slice(offSetMinus), arr1.slice(offSetMinus), offSetPlus)
    }
}

medianOfTwoSortedArray([1,2,3], [4,5,6],3)
medianOfTwoSortedArray([11,23,24], [32,33,450],3);
medianOfTwoSortedArray([1,2,3],[2,3,5],3)