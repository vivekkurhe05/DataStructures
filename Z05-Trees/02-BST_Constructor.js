class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null // this is null because we don't have to create a new node at the time of creating a tree. So intially root should point to null. Root means top element of the tree.
    }
}

let myTree = new BST()
