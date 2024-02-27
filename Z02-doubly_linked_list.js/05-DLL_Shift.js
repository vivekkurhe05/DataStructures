class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    shift() {
        if(!this.head) {
            return null
        }
        let temp = this.head
        this.head = this.head.next
        this.head.prev = null
        temp.next = null
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return temp
    }
}

let myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)
myDoublyLinkedList.push(4)
console.log(myDoublyLinkedList)