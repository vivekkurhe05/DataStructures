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

    minValue(currentNode){
        while(currentNode.left != null){
            currentNode = currentNode.left
        }
        return currentNode.value
    }

    #deleteNode(value, currentNode){
        
        if(currentNode === null) return null

        if(value < currentNode.value){
            currentNode.left = this.#deleteNode(value, currentNode.left)
        }else if(value > currentNode.value){
            currentNode.right = this.#deleteNode(value, currentNode.right)
        }else{
            if(currentNode.left === null && currentNode.right === null){
                return null
            }else if(currentNode.left === null){
                currentNode = currentNode.right
            }else if(currentNode.right === null){
                currentNode = currentNode.left
            }else{
                let subTreeMin = this.minValue(currentNode.right)
                currentNode.value = subTreeMin
                currentNode.right = this.#deleteNode(subTreeMin, currentNode.right)
            }
        }
        return currentNode
    }

    deleteNode(value){
        this.root = this.#deleteNode(value, this.root)
    }

}

let myBST = new BST()
myBST.insert(2)
myBST.insert(1)
myBST.insert(3)


console.log("\nBefore Deleting (2) Node:")
console.log("---------------------------")
console.log("Root: "+myBST.root.value)
console.log("Root->Left: "+myBST.root.left.value)
console.log("Root->Right: "+myBST.root.right.value)

myBST.deleteNode(2)

console.log("\n\nAfter Deleting (2) Node:")
console.log("---------------------------")
console.log("Root: "+myBST.root.value)
console.log("Root->Left: "+myBST.root.left.value)
console.log("Root->Right: "+myBST.root.right)