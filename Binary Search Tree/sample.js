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

    
}

function isValidBSt(root){
    return validateBST(root,null,null);
}

function validateBST(root,minVal,maxVal){
    if (!root) {
        return true;
    }

    if (minVal !== null && root.value < minVal) {
        return false;
    }

    if (maxVal !== null && root.value > maxVal) {
        return false;
    }

    return validateBST(root.left,minVal,root.value) && validateBST(root.right,root.value,maxVal);
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(30);
bst.preOrder(bst.root);

console.log(isValidBSt(bst.root));