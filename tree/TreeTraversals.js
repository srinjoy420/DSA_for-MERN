class node {
    constructor(value) {
        this.left = null
        this.right = null
        this.data = value
    }

}
function preorder(root) {
    if (root !== null) {
        console.log(root.data);
        preorder(root.left)
        preorder(root.right)

    }
}
function inorder(root){
    if(root!==null){
        inorder(root.left)
        console.log(root.data);
        inorder(root.right)
        
    }
}
function postOrder(root){
    if(root !==null){
        postOrder(root.left)
        postOrder(root.right)
        console.log(root.data);
        
    }
}
const root= new node(1)
root.left=new node(3)
root.right=new node(5)
root.left.left=new node(2)
root.left.right=new node(4)
root.right.right=new node(8)

preorder(root)
inorder(root)