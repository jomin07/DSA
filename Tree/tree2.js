class TreeNode{
    constructor(value){
        this.value = value;
        this.children = [];
    }
}

const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

abe.children.push(homer);
homer.children.push(bart, lisa, maggie);

console.log(abe);
