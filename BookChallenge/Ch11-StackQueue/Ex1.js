//DESIGN A STACK USING ONLY QUEUES AND THEN DESIGN A QUEUE USING ONLY STACKS

// Stack Using QUeues

function Stack(array){
    this.array = [];
    if(array) this.array = array;
}

Stack.prototype.getBuffer = function(){
    return this.array.slice();
}

Stack.prototype.isEmpty = function(){
    return this.array.length == 0;
}

Stack.prototype.peek = function(){
    return this.array[this.array.length - 1];
}

Stack.prototype.push = function(item){
    this.array.push(item);
}

Stack.prototype.pop = function(){
    return this.array.pop();
}

function stackAccessNthTopNode(stack, n) {
    if (n <= 0) throw 'error'
    
    var bufferArray = stack.getBuffer();
    var bufferStack = new Stack(bufferArray);

    while (--n !== 0) {
        bufferStack.pop();
    }
    return bufferStack.pop();
}


function stackSearch(stack, element){
    var bufferArray = stack.getBuffer();

    var bufferStack = new Stack(bufferArray);

    while(!bufferStack.isEmpty()){
        if(bufferStack.pop() == element){
            return true
        }
    }
    return false
}

function twoStackQueue(){
    this.inbox = new Stack();
    this.outbox = new Stack();
}

twoStackQueue.prototype.enqueue = function(val){
    this.inbox.push(val)
}

twoStackQueue.prototype.dequeue = function(){
    if(this.outbox.isEmpty()){
        while(!this.inbox.isEmpty()){
            this.outbox.push(this.inbox.pop())
        }
    }
    return this.outbox.pop()
}

var queue = new twoStackQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log("BEfore : ", queue);
queue.dequeue();
queue.dequeue();
console.log("After: ", queue);
