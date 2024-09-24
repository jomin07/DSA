class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (value === root.value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
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

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  findClosestValue(target) {
    return this.closestValue(this.root, target, Infinity);
  }

  closestValue(root, target, closest) {
    if (!root) {
      return closest;
    }

    if (Math.abs(target - root.value) < Math.abs(target - closest)) {
      closest = root.value;
    }

    if (target < root.value) {
      return this.closestValue(root.left, target, closest);
    } else if (target > root.value) {
      return this.closestValue(root.right, target, closest);
    } else {
      return closest; // Exact match found
    }
  }
}

const bst = new BinarySearchTree();
console.log("Empty?", bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 50));

console.log("PreOrder Traversal");
bst.preOrder(bst.root);
console.log("InOrder Traversal");
bst.inOrder(bst.root);
console.log("PostOrder Traversal");
bst.postOrder(bst.root);

console.log("BFS");
bst.levelOrder();

bst.delete(10);
console.log("BFS");
bst.levelOrder();

console.log("Min Value :", bst.min(bst.root));
console.log("Max Value :", bst.max(bst.root));

const targetValue = 11;
const closestValue = bst.findClosestValue(targetValue);

console.log(`Closest value to ${targetValue} is:`, closestValue);
