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
}

let myLinkedList = new LinkedList(4)