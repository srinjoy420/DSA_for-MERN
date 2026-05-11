class node {
    constructor(value) {
        this.left = null
        this.right = null
        this.data = value
    }

}

function Height(root){
    if(root===null){
        return -1
    }
    let lHeight=Height(root.left)
    let rHeight=Height(root.right)
    return Math.max(lHeight,rHeight)+1
}
const root= new node(1)
root.left=new node(3)
root.right=new node(5)
root.left.left=new node(2)
root.left.right=new node(4)
root.right.right=new node(8)
console.log(Height(root));
