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
        this.tail = newNode
        this.length=1
    }

    unshift(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this // "return this" means return the class LinkedList
    }
}

let myLinkedList = new LinkedList(4)
console.log(myLinkedList.unshift(5))