function TreeNode(value){
    this.value = value;
    this.children = [];
}

function BinaryTreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinaryTree(){
    this._root = null;
}

BinaryTree.prototype.traversePreOrder = function(){
    this.traversePreOrderHelper(this._root);

    function traversePreOrderHelper(node){
        if(!node)
            return;
        traversePreOrderHelper(node.left);
        console.log(node.value);
        traversePreOrderHelper(node.right);
    }
}

BinaryTree.prototype.traversePreOrderIterative = function(){
    //create an emptyh stack and push root to it

    var nodeStack = [];
    nodeStack.push(this._root);

    //pop all items one by one.
        //a. Print it
        //b. Push its right child
        //c. push its left child
    //not that right child is pushed first so that left is proccssed first

    while(nodeStack.length){
        //pop the top item from stack and print it
        var node = nodeStack.pop();
        console.log(node.value);

        //push right and left children of the popped node to stack

        if(node.right)
            nodeStack.push(node.right);
        if(node.left)
            nodeStack.push(node.left);
    }
}

BinaryTree.prototype.traverseInOrder = function(){
    this.traverseInOrderHelper(this._root);

    function traverseInOrderHelper(node){
        if(!node)
            return
        traverseInOrderHelper(node.left)
        console.log(node.value);
        traverseInOrderHelper(node.right)
    }
}

BinaryTree.prototype.traverseInOrderIterative = function(){
    var current = this._root,
        s = [],
        done = false;4

        while(!done){
            //Reach the left most Node of the current Node
            if(current != null){
                s.push(current);
                current = current.left;
            }else{
                if(s.length){
                    current = s.pop();
                    console.log(current.value);
                    current = current.right;
                }else{
                    done = true;
                }
            }
        }
}

BinaryTree.prototype.traversePostOrder = function(){
    traversePostOrderHelper(this._root)

    function traversePostOrderHelper(node){
        if(node.left)
            traversePostOrderHelper(node.left)
        if(node.right)
            traversePostOrderHelper(node.right);
        console.log(node.value);
    }
}

BinaryTree.prototype.traversePostOrderIterative = function(){
    var s1 = [],
        s2 = [];
        
        s1.push(this._root)

        while(s1.length){
            var node = s1.pop();
            s2.push(node)

            if(node.left)
                s1.push(node.left);
            if(node.right)
                s1.push(node.right);
        }

        while(s2.length){
            var node = s2.pop();
            console.log(node.value);
        }
}