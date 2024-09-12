//Addition

var exampleSet = new Set();
exampleSet.add(1);
exampleSet.add(2);
exampleSet.add(2);
console.log(exampleSet);


//Deletion
var newExampleSet = new Set()
newExampleSet.add(1);
newExampleSet.delete(1);
newExampleSet.add(2)
console.log(newExampleSet);

//Contaings

var containSet = new Set()
containSet.add(1);
containSet.add(3);
containSet.add(2);
containSet.add(2);
containSet.add(2);
containSet.add(3);
console.log(containSet);
console.log(containSet.has(2))
console.log(containSet.has(1))
console.log(containSet.has(4))


//Intersection - the intersection of two sets consists of the common elements between those two
//sets

function intersectSets( setA, setB){
    var intersection = new Set();
    for(var ele of setB){
        if(setA.has(ele)){
            intersection.add(ele)
        }
    }
    return intersection
}

var setA = new Set([1,2,3,4,5,6]),
    setB = new Set([1,2,4,5]);

console.log(intersectSets(setA,setB));


//IsSuperSet - a set is a “superset” of another set if it contains all the elements of the other set.

function isSuperSet(setA, setB){
    for(var ele of setB){
        if(!setA.has(ele)){
            return false
        }
    }
    return true;
}

var setA1 = new Set([1,2,3,4,5]),
    setB1 = new Set([1,2,3]),
    setC1 = new Set([10]);

console.log(isSuperSet(setA1,setB1));
console.log(isSuperSet(setA1,setC1));

//Union - the union of two sets combines the elements from both sets.

function unionSet(setA,setB){
    var union = new Set(setA)
    for(var ele of setB){
        union.add(ele)
    }
    return union
}

var setA2 = new Set([1,2,3,4]),
    setB2 = new Set([2,5]),
    setC2 = new Set([6]);

console.log(unionSet(setA2,setB2));
console.log(unionSet(setA2,setC2));

//Difference- the difference of set A from set B is all of the elements in set A that are not in set B.

function difference(setA,setB){
    var difference = new Set(setA);
    for(var ele of setB){
        difference.delete(ele)
    }
    return difference
}

var setA3 = new Set([1,2,3,4]),
    setB3 = new Set([1,3]),
    setC3 = new Set([2]);

console.log(difference(setA3,setB3));
console.log(difference(setB3,setC3));
console.log(difference(setB3,setC3));