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

    pop() {
        if(!this.head) return undefined // if linked list is empty
        let temp = this.head // if linked list has only 1 node, both temp and pre are pointing to it
        let pre = this.tail  // ------||------
        while(temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length === 0) { // if length is 0, make head and tail point to null
            this.head = null
            this.tail = null
        }
        return temp // returns deleted nodes from the linked list
    }
}

let myLinkedList = new LinkedList(4)
console.log(myLinkedList)
myLinkedList.pop()
console.log(myLinkedList)