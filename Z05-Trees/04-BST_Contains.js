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
    
    contains(value){
        if(this.root === null) return false
        let temp = this.root
        while(temp){
            if(value<temp.value){
                temp = temp.left
            }else if(value>temp.value){
                temp = temp.right
            }else{
                return true
            }
        }
        return false
    }
}

let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)

myTree.insert(52)
myTree.insert(82)

console.log(myTree.contains(39))