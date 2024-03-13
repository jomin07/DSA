class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(root,newNode){
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left,newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right,newNode);
            }
        }
    }

    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root){
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder(){
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }
}
function isValidBST(root) {
    return validateBST(root, null, null);
}
  
function validateBST(node, minVal, maxVal) {
    if (!node) {
      return true;
    }
  
    // Check if the current node's value violates BST properties
    if (minVal !== null && node.value <= minVal) {
      return false;
    }
    if (maxVal !== null && node.value >= maxVal) {
      return false;
    }
  
    // Recursively validate the left and right subtrees with appropriate min and max values
    return validateBST(node.left, minVal, node.value) && validateBST(node.right, node.value, maxVal);
}
  
 
const bst = new BinarySearchTree();
bst.insert(3);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.preOrder(bst.root);
console.log("Is BST:", isValidBST(bst.root));

bst.root.left.right = new Node(4);
console.log("Is BST:", isValidBST(bst.root));
  