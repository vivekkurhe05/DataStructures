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

    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
            return this
        }
        let temp = this.root
        while(true){
            if(newNode.value === temp.value) return undefined
            if(newNode.value<temp.value){
                if(temp.left===null){
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            }else{
                if(temp.right === null){
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }

    BFS(){ // this method is going to be part of the BST class
        let currentNode = this.root
        let queue = []
        let results = []
        queue.push(currentNode)

        while(queue.length){
            currentNode = queue.shift()
            results.push(currentNode.value)
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
        }
        
        return results
    }

    DFSPreOrder(){
        let results = []
        function traverse(currentNode){
            results.push(currentNode.value)
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root)
        return results
    }

    DFSPostOrder(){
        let results = []
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
            results.push(currentNode.value)
        }
        traverse(this.root)
        return results
    }

    DFSInOrder(){
        let results = []
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left)
            results.push(currentNode.value)
            if(currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root)
        return results
    }
}

let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)
console.log(myTree.DFSInOrder())
// [18, 21, 27, 47, 52, 76, 82]
