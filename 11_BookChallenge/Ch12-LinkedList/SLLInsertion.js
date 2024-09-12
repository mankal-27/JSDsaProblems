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

var sll1 = new SinglyLinkedList();
sll1.insert(1);
sll1.insert(12);
sll1.insert(20);
console.log(sll1)