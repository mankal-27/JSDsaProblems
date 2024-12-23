/*
Searching the stack data structure for a specific element is a critical operation. To do this,
you must first create a buffer stack so that pop can be called on that buffer stack. This
way, the original stack is not mutated, and nothing is removed from it.
*/

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


var stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);

console.log(stackSearch(stack2,6))