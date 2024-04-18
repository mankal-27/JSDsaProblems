/*
Peeking at the last added element of the stack means returning the last-added element
without removing it from the data structure. Peeking is often used to compare the last-­
added element to some other variable and to evaluate whether the last-added element
should be removed from the data structure.
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

//instance of the stack class

var stack1 = new Stack();

stack1.push(10);
stack1.push(20)
stack1.push(30)
console.log(stack1);