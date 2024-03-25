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

}

let myBST = new BST()
myBST.insert(47)
myBST.insert(21)
myBST.insert(76)
myBST.insert(18)
myBST.insert(27)
myBST.insert(52)
myBST.insert(82)