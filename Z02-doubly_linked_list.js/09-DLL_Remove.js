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

    pop(){
        if(!this.head) return null // or if(this.length===0)return null
        let temp = this.tail
        if(this.length===1){
            this.head = null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }
        
        this.length--
        
        return temp
    }

    remove(index){
        if(index===0) return this.shift()
        if(index === this.length-1) return this.pop()
        if(index<0 || index>=this.length) return undefined

        const temp = this.head

        temp.prev.next = temp.next
        temp.next.prev = temp.prev
        temp.next = null
        temp.prev = null

        this.length--
        return temp
    }
}