class Node {
    constructor(new_value) {
        this.data = new_value
        this.next = null
    }
}

class SingleLinkedList {
    constructor(head = null) {
        this.head = head
    }

    insertEnd(value) {
        let temp = new Node(value)
        if (this.head !== null) {
            let t1 = this.head
            while (t1.next !== null) {
                t1 = t1.next
            }
            t1.next = temp
        } else {
            this.head = temp
        }
    }

    getLength(head) {
        let length = 0
        while (head) {
            length++
            head = head.next
        }
        return length
    }

    getMiddleIndex(head) {
        const length = this.getLength(head)
        return Math.floor(length / 2)  // ✅ return added, +1 removed
    }

    getMiddleNode(head) {
        let slow = head
        let fast = head
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next  // ✅ moves 2 steps
        }
        return slow
    }

    printLinkedList() {
        let t1 = this.head
        if (!t1) {                 // ✅ empty list guard
            console.log("List is empty")
            return
        }
        while (t1 !== null) {      // ✅ cleaner loop
            console.log(t1.data)
            t1 = t1.next
        }
    }
}
let list = new SingleLinkedList()
list.insertEnd(10)
list.insertEnd(20)
list.insertEnd(30)
list.insertEnd(40)
list.insertEnd(50)
list.printLinkedList()
console.log(list.getMiddleIndex(list.head));
console.log(list.getMiddleNode(list.head).data)
