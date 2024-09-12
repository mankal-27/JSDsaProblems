/*

Accessing specific elements in a data structure is important. Here, let’s take a look at how
to access an element based on order.
To access the nth node from the top, you need to call pop n number of times.

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

var stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
console.log("Before : ", stack2);
console.log(stackAccessNthTopNode(stack2, 2));
console.log("After: ", stack2);