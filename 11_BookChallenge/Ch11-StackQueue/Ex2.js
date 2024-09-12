//Queue Using Stacks
function Queue(array){
    this.array = []
    if(array) this.array = array;
}

Queue.prototype.getBuffer = function(){
    return this.array.slice();
}

Queue.prototype.isEmpty = function(){
    return this.array.length == 0
}

Queue.prototype.peek = function(){
    return this.array[0];
}


Queue.prototype.enqueue = function(value){
    return this.array.push(value)
}

Queue.prototype.dequeue = function(){
    return this.array.shift();
}

function queueAccessNthTopNode(queue, n){
    var bufferArray = queue.getBuffer();
    if(n < 0) throw 'error'

    var bufferQueue = new Queue(bufferArray);

    while(--n!==0){
        bufferQueue.dequeue();
    }

    return bufferQueue.dequeue();
}

function queueSearch(queue, element){
    var bufferArray = queue.getBuffer()

    var bufferQueue = new Queue(bufferArray);

    while(!bufferQueue.isEmpty()){
        if(bufferQueue.dequeue() == element){
            return true
        }
    }
    return false
}

function QueueStack(){
    this.inbox = new Queue(); // first stack
}

QueueStack.prototype.push = function(val){
    this.inbox.enqueue(val);
}

QueueStack.prototype.pop = function(){
    var size = this.inbox.array.length-1;
    var counter = 0;
    var bufferQueue = new Queue();

    while(++counter <= size){
        bufferQueue.enqueue(this.inbox.dequeue());
    }

    var popped = this.inbox.dequeue();
    this.inbox = bufferQueue;

    return popped
}

var stack = new QueueStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);

console.log("Before : ", stack);
console.log("First pop : ", stack.pop());
console.log("Second pop : ", stack.pop());
console.log("After : ", stack);
