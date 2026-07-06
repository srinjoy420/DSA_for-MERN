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
    deleteCtSuggestion(head) {
        let slow = head
        let fast = head
        while (fast !== null && fast.next !== null) {
            slow=slow.next
            fast=fast.next.next
            if(slow===fast){
                return true
            }

        }
        return false
    }
}