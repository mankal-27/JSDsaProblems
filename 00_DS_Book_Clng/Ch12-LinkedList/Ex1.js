//REVERSE A SINGLY LINKED LIST

/*
To reverse a singly linked list, simply iterate through each node and set the next property on
the current node to the previous node.
*/

function reverseSingleLinkedList(sll){
    var node = sll.head;
    var prev = null;

    while(node){
        var temp = node.next;
        node.next = prev;
        if(!temp){
            break;
        }
        node = temp
    }
    return node;
}

