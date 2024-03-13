class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node; 
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;

            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value,index){
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0;i < index-1;i++){
                prev = prev.next;
            }
            node.next =prev.next;
            prev.next = node;
            this.size++;
            
        }
    }

    removeFrom(index){
        if (index < 0 || index >= this.size ) {
            return null;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++){
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        }else{
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            let removedNode;
            if(prev.next){
                removedNode = prev.next;
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    search(value){
        if (this.isEmpty()) {
            return -1;
        }
        
        let curr = this.head;
        let i = 0;

        while (curr) {
            if (curr.value === value) {
                return i;
            }

            curr = curr.next;
            i++; 
        }
        return -1;
    }

    reverse(){
        let curr = this.head;
        let prev = null;

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }
        else{
            let curr = this.head;
            let listValues = '';

            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }

    removeDuplicates(){
        if (this.isEmpty()) {
            return null;
        } else {
            let curr = this.head;
            while (curr && curr.next) {
                if (curr.value === curr.next.value) {
                    curr.next = curr.next.next;
                    this.size--;
                } else {
                    curr = curr.next;
                }
            }
        }
    }

    isPalindrome(){
        if (this.isEmpty()) {
            console.log('List is empty');
        }else{
            let curr = this.head;
            let linkedList = '';
            let reverseList = '';

            while (curr) {
                linkedList+= `${curr.value} `;
                reverseList = `${curr.value} `+ reverseList;
                curr = curr.next;
            }
            return linkedList === reverseList;
        }
    }
}

function arrayToLinkedList(arr){
    const list2 = new linkedList();
    for(const i of arr){
        list2.append(i);
    }
    return list2;
}

const arr = [1,5,2,6];
const list2 = arrayToLinkedList(arr);
console.log('List converted from array: ');
list2.print();

const list = new linkedList();
console.log('Size: ',list.getSize());
console.log('List is Empty?',list.isEmpty());
list.print();

list.prepend(20);
list.prepend(30);
list.prepend(50);
list.print();

list.append(60);
list.append(80);
list.append(90);
list.print();

console.log('Insertion');
list.insert(15,2);
list.print();
list.insert(15,1);
console.log('Size: ',list.getSize());
list.print();

console.log('Remove from');
console.log(list.removeFrom(2));
list.print();
console.log(list.removeFrom(0));
console.log('Size: ',list.getSize());
list.print();

console.log('Remove value');
console.log(list.removeValue(10));
console.log('Size: ',list.getSize());
list.print();

console.log('Search');
console.log(list.search(90));

console.log('Reverse');
list.reverse();
list.print();

list.removeDuplicates();
console.log('Size: ',list.getSize());
list.print();