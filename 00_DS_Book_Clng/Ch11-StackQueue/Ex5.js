//DESIGN A SORTABLE STACK


function sortableStack(size){
    this.size = size;

    this.mainStack = new Stack();
    this.sortedStack = new Stack();

    //let's initialize it with some random ints

    for(var i = 0 ; i < this.size; i++){
        this.mainStack.push(Math.floor(Math.random() * 11))
    }
}

sortableStack.prototype.sortStackDescending = function(){
    while(!this.mainStack.isEmpty()){
        var temp = this.mainStack.pop();
        while(!this.sortedStack.isEmpty() && this.sortedStack.peek() < temp){
            this.mainStack.push(this.sortedStack.pop())
        }
        this.sortedStack.push(temp)
    }
}

var ss = new sortableStack(10)