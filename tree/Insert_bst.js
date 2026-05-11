class node {
    constructor(value) {
        this.left = null
        this.right = null
        this.data = value
    }
}

function insert(root, value) {
    if (root === null) {
        return new node(value)
    }
    if (root.data === value) {
        console.log("value already exists:", value)
        return root
    } else if (root.data > value) {
        root.left = insert(root.left, value)
    } else {
        root.right = insert(root.right, value)
    }
    return root                  
}

function inorder(root) {
    if (root !== null) {
        inorder(root.left)
        console.log(root.data)
        inorder(root.right)
    }
}

let root = null
root = insert(root, 7)
root = insert(root, 63)   
root = insert(root, 3)
root = insert(root, 10)
root = insert(root, 1)

inorder(root)
