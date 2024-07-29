// Task 06: Implement a TreeNode class to represent a node in a binary tree with properties value, left , and right
class sixTaskTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Task 07: Implement a binary tree class with methods for inserting values and performing in-order traversal to display nodes.
class sevenTaskTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new sevenTaskTreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}


function main() {
    const root = new sixTaskTreeNode(1);
    const leftChild = new sixTaskTreeNode(2);
    const rihgtChild = new sixTaskTreeNode(3);
    root.left = leftChild;
    root.right = rihgtChild;


    const tree = new binaryTree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(2);
    tree.insert(4);
    tree.insert(6);
    tree.insert(8);

    tree.inOrderTraversal();
}
main()