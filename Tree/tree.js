class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(childNode) {
        this.children.push(childNode);
    }
}

class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }

    traversePreOrder(node, callback) {
        callback(node.value);
        for (const child of node.children) {
            this.traversePreOrder(child, callback);
        }
    }

    display() {
        const result = [];
        this.traversePreOrder(this.root, (value) => {
            result.push(value);
        });
        console.log(result.join(' '));
    }
}

const tree = new Tree(5);

const node1 = new Node(3);
tree.root.addChild(node1);

const node2 = new Node(7);
tree.root.addChild(node2);

tree.display();
