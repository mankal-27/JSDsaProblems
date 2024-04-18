function SinglyLinkedListNode(data){
    this.data = data;
    this.next = null;
}

function SinglyLinkedList(){
    this.head = null;
    this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function(){
    return this.size == 0;
}

SinglyLinkedList.prototype.insert = function(value){
    if(this.head == null){ // if first node
        this.head = new SinglyLinkedListNode(value);
    }else{
        var temp = this.head;
        this.head = new SinglyLinkedListNode(value);
        this.head.next = temp;
    }

    this.size++;
}

SinglyLinkedList.prototype.remove = function(value) {
    var currentHead = this.head;
    if (currentHead.data == value) {
        // just shift the head over. Head is now this new value
        this.head = currentHead.next;
        this.size--;
    } else {
        var prev = currentHead;
        while (currentHead.next) {
            if (currentHead.data == value) {
                // remove by skipping
                prev.next = currentHead.next;
                prev = currentHead;
                currentHead = currentHead.next;
                break; // break out of the loop
            }
            prev = currentHead;
            currentHead = currentHead.next;
        }
        //if wasn't found in the middle or head, must be tail
        if (currentHead.data == value) {
            prev.next = null;
        }
        this.size--;
    }
}

SinglyLinkedList.prototype.deleteAtHead = function() {
    var toReturn = null;

    if (this.head !== null) {
      toReturn = this.head.data;
      this.head = this.head.next;
      this.size--;    
    }
    return toReturn;
}


SinglyLinkedList.prototype.find = function(value){
    var currentHead = this.head;
    while(currentHead.next){
        if(currentHead.data == value){
            return true
        }
        currentHead = currentHead.next;
    }
    return false
}

var sll1 = new SinglyLinkedList();
sll1.insert(1); // linked list is now:  1 -> null
sll1.insert(12); // linked list is now: 12 -> 1 -> null
sll1.insert(20); // linked list is now: 20 -> 12 -> 1 -> null
//console.log(sll1);
sll1.remove(12); // linked list is now: 20 -> 1 -> null
sll1.remove(20); // linked list is now: 1 -> null 
console.log(sll1);
sll1.insert(34);
sll1.insert(22);
//console.log("Before :: ", sll1);
sll1.deleteAtHead();
//console.log("After :: ", sll1);
console.log(sll1.find(34))
console.log(sll1.find(99))
