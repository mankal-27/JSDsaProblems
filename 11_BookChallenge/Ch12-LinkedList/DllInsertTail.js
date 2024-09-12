function DoublyLinkedListNode(data){
    this.data = data;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList(){
    this.head = null;
    this.tail = null;
    this.size = 0;
}

DoublyLinkedList.prototype.isEmpty = function(){
    return this.size == 0;
}

DoublyLinkedList.prototype.insertAtHead = function(value){
    if(this.head === null) { // If first Node
        this.head = new DoublyLinkedListNode(value)
        this.tail = this.head;
    }else{
        var temp = new DoublyLinkedListNode(value);
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
    }
    this.size++
}

DoublyLinkedList.prototype.insertAtTail = function(value){
    if(this.tail === null) { // if first node
        this.tail = new DoublyLinkedListNode(value)
        this.head = this.tail
    }else{
        var temp = new DoublyLinkedListNode(value);
        temp.prev = this.tail;
        this.tail.next = temp;
        this.tail = temp;
    }
    this.size++
}
var dll1 = new DoublyLinkedList();
dll1.insertAtHead(10)
dll1.insertAtHead(21)
dll1.insertAtHead(20)
dll1.insertAtTail(44)
console.log(dll1);