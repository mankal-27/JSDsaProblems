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
var queue1 = new Queue()
console.log(queue1);
