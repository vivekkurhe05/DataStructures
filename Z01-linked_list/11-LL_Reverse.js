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

    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let prev = null
        for(let i=0;i<this.length;i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }
      
}

let myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)
console.log(myLinkedList)
myLinkedList.reverse()
console.log(myLinkedList)