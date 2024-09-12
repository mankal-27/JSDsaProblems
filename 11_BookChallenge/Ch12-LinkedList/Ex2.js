//DELETE DUPLICATES IN A LINKED LIST

/*
Deleting an item in a linked list is simple. Simply iterate and store visited nodes inside an
array. Delete the current element if the current element has already been seen previously.
*/

function deleteDuplicateInUnsorted(sll1){
    var track = [];

    var temp = sll1.head;
    var prev = null;

    while(temp){
        if(track.indexOf(temp.data) >= 0){
            prev.next = temp.next;
            sll1.size--;
        }else{
            track.push(temp.data);
            prev = temp;
        }
        temp = temp.next
    }
    console.log(temp);
}

//delete duplicates in unsorted linkedlist
function deleteDuplicateInUnsortedSllBest(sll1) {
    var track = {};

    var temp = sll1.head;
    var prev = null;
    while (temp) {
        if (track[temp.data]) {
            prev.next = temp.next;
            sll1.size--;
        } else {
            track[temp.data] = true;
            prev = temp;
        }
        temp = temp.next;
    }
    console.log(temp);
}