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