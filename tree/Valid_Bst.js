class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.data = value
    }
}

function isValid(root, min, max) {
    if (root === null) return true                  

    if (root.data <= min) return false              
    if (root.data >= max) return false

    return isValid(root.left, min, root.data)         
        && isValid(root.right, root.data, max)       
}

let root = new Node(4)
root.left = new Node(2)
root.right = new Node(5)
root.left.left = new Node(1)
root.left.right = new Node(3)
root.right.right = new Node(6)

console.log(isValid(root, -Infinity, Infinity))  

// Test invalid BST
let root2 = new Node(4)
root2.left = new Node(2)
root2.right = new Node(5)
root2.left.left = new Node(1)
root2.left.right = new Node(9)  

console.log(isValid(root2, -Infinity, Infinity))  