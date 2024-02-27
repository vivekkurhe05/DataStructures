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
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this.length
    }

    pop() {
        if(!this.head) {
            return undefined
        }
        let temp = this.head
        let prev = this.tail
        while(temp.next) {
            prev = temp
            temp = temp.next
        }
        this.tail = prev
        this.tail.next = null
        this.length--
        if(this.length===0) {
            this.head = null
            this.tail = null
        }
        return temp
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
        return this.length
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

    get(index) {
        if(index<0 || index>=this.length) return undefined
        let temp = this.head
        for(let i=0; i<index; i++) {
            temp = temp.next
        }
        return temp
    }

    set(index,value) {
        let temp = this.get(index)
        if(temp) {
            temp.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        if(index ===0) return this.unshift(value)
        if(index === this.length) return this.push(value)
        if(index<0 || index>this.length) return undefined
        const newNode = new Node(value)
        let temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return this.length
    }

    remove(index) {
        if(index ===0) return this.shift()
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

const myLinkedList = new LinkedList(2)
myLinkedList.push(45)
myLinkedList.push(63)
console.log(myLinkedList)

console.log(myLinkedList.pop())
console.log(myLinkedList)
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList)
myLinkedList.unshift(4)
console.log(myLinkedList)
myLinkedList.unshift(3)
console.log(myLinkedList)
myLinkedList.shift()
console.log(myLinkedList)
myLinkedList.shift()
console.log(myLinkedList)

myLinkedList.push(11)
myLinkedList.push(43)
myLinkedList.push(62)
myLinkedList.push(54)
console.log(myLinkedList)
console.log(myLinkedList.get(2))
console.log(myLinkedList.get(3))
console.log(myLinkedList.get(4))
console.log(myLinkedList.get(-1))
console.log(myLinkedList)
myLinkedList.set(3, 89)
console.log(myLinkedList)
myLinkedList.insert(1, 53)
console.log(myLinkedList)
console.log(myLinkedList.get(4))
console.log(myLinkedList.remove(3))
console.log(myLinkedList)
console.log(myLinkedList.remove(0))
console.log(myLinkedList)
console.log(myLinkedList.remove(1))
console.log(myLinkedList)
console.log(myLinkedList.remove(0))
console.log(myLinkedList)