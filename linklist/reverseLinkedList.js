class node{
    constructor(new_value){
        this.data=new_value
        this.next=null
    }
}
class singlyLinkedlist{
    constructor(head=null){
        this.head=head
    }
    insertatend(value){
        let temp=new node(value)
        if(this.head!==null){
            let t1=this.head
            while(t1.next!==null){
                t1=t1.next
            }
            t1.next=temp
        }
        else{
            this.head=temp
        }

    }
    reverseHead(head){
        let curr=head
        let prev=null
        let next=null
        while(curr!==null){
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        return prev

    }
    printLinkedList(){
         let t1=this.head
         while(t1.next!==null){
            console.log(t1.data);
            t1=t1.next
            
         }
         console.log(t1.data);
         

    }
    
}
let list = new singlyLinkedlist()
list.insertatend(10)
list.insertatend(40)
list.insertatend(30)

console.log("Before reverse:")
list.printLinkedList()       

list.head = list.reverseHead(list.head)   

console.log("After reverse:")
list.printLinkedList()       