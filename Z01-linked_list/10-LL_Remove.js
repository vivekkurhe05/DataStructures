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

    shift() {
        if(!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        return temp
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

    remove(index) {
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()
        if(index<0 || index>=this.length) return undefined

        const before = this.get(index-1)
        const temp = before.next

        before.next = temp.next
        temp.next = null
        this.length--
        return temp
    }
      
}

let myLinkedList = new LinkedList(11)
myLinkedList.push(3)
myLinkedList.push(23)
myLinkedList.push(7)
console.log(myLinkedList.remove(2))
console.log(myLinkedList)