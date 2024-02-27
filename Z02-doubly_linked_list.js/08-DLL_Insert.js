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

    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    unshift(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = null
            this.tail = null
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index){
        if(index<0 || index>=this.length){
            return undefined
        }
        let temp = this.head
        if(index < this.length/2){
            for(let i=0;i<=index;i++){
                temp = temp.next
            }
        }else{
            temp = this.tail
            for(let i=this.length-1; i>index; i--) {
                temp = temp.prev
            }
        }
        return temp
    }

    set(index, value){
        let temp = this.get(index)
        if(temp){
            temp.value = value
            return true
        }
        return false
    }

    insert(index, value){
        const newNode = new Node(value)
        if(index===0) return this.unshift(value)
        if(index === this.length) return this.push(value)
        if(index<0 || index>this.length) return false

        const before = this.get(index-1)
        const after = before.next
        before.next = newNode
        newNode.prev = before
        newNode.next = after
        after.prev = newNode
        this.length++
        return true
    }
}

let myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.push(3)
console.log(myDoublyLinkedList)