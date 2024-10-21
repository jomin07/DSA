class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
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
    if (root.left === null) {
      root.left = newNode;
    } else if (root.right === null) {
      root.right = newNode;
    } else {
      this.insertNode(root.left, newNode);
    }
  }

  levelOrder() {
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      const curr = queue.shift();
      console.log(curr.value);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }

  findHeight(root) {
    if (!root) return -1;

    const leftHeight = this.findHeight(root.left);
    const rightHeight = this.findHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  countLeafNodes(root) {
    if (!root) return 0;

    if (!root.left && !root.right) return 1;

    return this.countLeafNodes(root.left) + this.countLeafNodes(root.right);
  }

  removeDuplicates() {
    const valueSet = new Set();
    this.root = this.removeDuplicatesHelper(this.root, valueSet);
  }

  removeDuplicatesHelper(root, valueSet) {
    if (!root) return null;

    // Recursively check left and right subtrees
    root.left = this.removeDuplicatesHelper(root.left, valueSet);
    root.right = this.removeDuplicatesHelper(root.right, valueSet);

    // If value already exists, remove this node and return one of its children
    if (valueSet.has(root.value)) {
      // If the node is a duplicate, return either its left or right child (or null if both are null)
      return root.left || root.right;
    }

    // Otherwise, add the value to the set and return the node
    valueSet.add(root.value);
    return root;
  }

  zigzagTraversal() {
    if (!this.root) return;

    const result = [];
    let currentLevel = [];
    currentLevel.push(this.root);

    let leftToRight = true;

    while (currentLevel.length > 0) {
      const nextLevel = [];
      const values = [];

      while (currentLevel.length > 0) {
        const node = currentLevel.pop();
        values.push(node.value);

        // Push child nodes into the next level stack
        if (leftToRight) {
          if (node.left) nextLevel.push(node.left);
          if (node.right) nextLevel.push(node.right);
        } else {
          if (node.right) nextLevel.push(node.right);
          if (node.left) nextLevel.push(node.left);
        }
      }

      result.push(...values);
      leftToRight = !leftToRight; // Flip direction
      currentLevel = nextLevel;
    }

    return result;
  }
}

function areIdentical(root1, root2) {
  if (!root1 && !root2) return true;

  if (!root1 || !root2) return false;

  if (root1.value !== root2.value) return false;

  return (
    areIdentical(root1.left, root2.left) &&
    areIdentical(root1.right, root2.right)
  );
}

const bt = new BinaryTree();
bt.insert(1);
bt.insert(2);
bt.insert(3);
bt.insert(4);
bt.insert(5);
bt.insert(6);

console.log("BFS :");
bt.levelOrder();

console.log(bt.zigzagTraversal());
bt.levelOrder();

bt.insert(5); // Duplicate
bt.insert(2); // Duplicate

console.log("Before removing duplicates (level-order traversal):");
bt.levelOrder();

bt.removeDuplicates();

console.log("After removing duplicates (level-order traversal):");
bt.levelOrder();

console.log("Height of tree: ", bt.findHeight(bt.root));
console.log("Count of Leaf nodes :", bt.countLeafNodes(bt.root));

const bt2 = new BinaryTree();
bt2.insert(1);
bt2.insert(2);
bt2.insert(3);
bt2.insert(4);
bt2.insert(5);
bt2.insert(6);

console.log("Are both Identical ?", areIdentical(bt.root, bt2.root));
