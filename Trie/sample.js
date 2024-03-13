class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let currentNode = this.root;
        for(let i = 0; i < word.length; i++){
            const char = word[i];

            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true;
    }

    search(word){
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++){
            const char = word[i];

            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.isEndOfWord;
    }
}

const trie = new Trie();
trie.insert("app");
trie.insert("apple");
trie.insert("apply");

console.log(trie.search("appl"));