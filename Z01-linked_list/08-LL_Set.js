class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head // newNode also fine instead of this.head both are the same
        this.length = 1 // we also want to keep track of length of linked list
    }

    push(value) {
        const newNode = new Node(value)
        // If linked list is empty or head is pointing to null, then add node and make head and tail point to it. Else, make last item point to the new node and tail point to the last node.
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this // "return this" means return the class LinkedList
    }

    get(index) {
        if(index < 0 || index >= this.length) {
            return undefined
        }
        let temp = this.head
        for(let i=0; i<index; i++) {
            temp = temp.next
        }
        return temp
    }

    set(index, value) {
        let temp = this.get(index)
        if(temp) {
            temp.value = value
            return true
        }
        return false
    }
}

let myLinkedList = new LinkedList(0)
myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)
console.log(myLinkedList)
console.log(myLinkedList.get(-1))
console.log(myLinkedList.set(-1,3))
myLinkedList.push(11)
myLinkedList.push(43)
myLinkedList.push(62)
myLinkedList.push(54)
console.log(myLinkedList)
myLinkedList.set(7, 89)
console.log(myLinkedList)
