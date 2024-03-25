class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)

        if(this.root === null) {
            this.root = newNode
            return this
        }
        let temp = this.root
        while(true){
            if(newNode.value === temp.value) return undefined
            if(newNode.value < temp.value){
                if(temp.left === null){
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

    rContains(value, currentNode=this.root){
        if(currentNode === null) return false

        if(value === currentNode.value) return true

        if(value < currentNode.value){
            return this.rContains(value, currentNode.left)
        }else{
            return this.rContains(value, currentNode.right)
        }
    }

    #rInsert(value, currentNode=this.root){
        if(currentNode === null) return new Node(value)

        if(value < currentNode.value){
            currentNode.left = this.#rInsert(value, currentNode.left)
        }else if(value > currentNode.value){
            currentNode.right = this.#rInsert(value, currentNode.right)
        }

        return currentNode
    }

    rInsert(value){
        if(this.root === null) this.root = new Node(value)
        this.#rInsert(value)
    }
}

let myBST = new BST()
myBST.rInsert(2)
myBST.rInsert(1)
myBST.rInsert(3)

console.log("\nRoot: "+myBST.root.value)

console.log("\nRoot->Left: "+myBST.root.left.value)

console.log("\nRoot->Right: "+myBST.root.right.value)