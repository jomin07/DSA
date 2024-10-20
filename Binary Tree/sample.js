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
    const queue = [this.root];

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

    if (!root.left && !root.left) return 1;

    return this.countLeafNodes(root.left) + this.countLeafNodes(root.right);
  }

  zigzagTraversal(root) {
    if (!root) return;

    let currentLevel = [root];
    let res = [];
    let leftToRight = true;

    while (currentLevel.length) {
      let nextLevel = [];
      let values = [];

      while (currentLevel.length) {
        const node = currentLevel.pop();
        values.push(node.value);

        if (leftToRight) {
          if (node.left) nextLevel.push(node.left);
          if (node.right) nextLevel.push(node.right);
        } else {
          if (node.right) nextLevel.push(node.right);
          if (node.left) nextLevel.push(node.left);
        }
      }

      leftToRight = !leftToRight;
      currentLevel = nextLevel;
      res.push(...values);
    }
    return res;
  }
}

function areIdentical(root1, root2) {
  if (!root1 && !root2) return true;

  if (root1 && root2) {
    if (root1.value !== root2.value) return false;

    return (
      areIdentical(root1.left, root2.left) &&
      areIdentical(root1.right, root2.right)
    );
  }

  return false;
}

const bt = new BinaryTree();
bt.insert(1);
bt.insert(2);
bt.insert(3);
bt.insert(4);
bt.insert(5);
bt.insert(6);

bt.levelOrder();
console.log("Zigzag Traversal:");
console.log(bt.zigzagTraversal(bt.root));

console.log("Height of tree: ", bt.findHeight(bt.root));
console.log("Count of Leaf nodes :", bt.countLeafNodes(bt.root));

const bt2 = new BinaryTree();
bt2.insert(1);
bt2.insert(2);
bt2.insert(3);
bt2.insert(4);
bt2.insert(5);
bt2.insert(6);
bt2.insert(32);

console.log("Are both Identical ?", areIdentical(bt.root, bt2.root));
