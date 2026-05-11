class node {
    constructor(value) {
        this.left = null
        this.right = null
        this.data = value
    }

}
function Search(root,value){
    if(root===null){
        console.log("the tree is emtry nothing Here");
        return
        
    }
    if(root.data===value){
        console.log("the value get succesfully",value);
        
    }
    else if(root.data>value){
        Search(root.left,value)
    }
    else{
        Search(root.right,value)

    }
}
const root=new node(8)
root.left=new node(3)
root.right=new node(10)
root.left.left=new node(1)
root.left.right=new node(6)
root.left.right.left=new node(4)
root.left.right.right=new node(7)

root.right.right=new node(14)
root.right.right.left=new node(13)

console.log(Search(root,6));
