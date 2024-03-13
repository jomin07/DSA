class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class doubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    print(){
        if (this.isEmpty()) {
            console.log('List is empty');
        }else{
            let curr = this.head;
            let linkedList = '';

            while (curr) {
                linkedList += `${curr.value} `;
                curr = curr.next;
            }
            console.log(linkedList);
        }
    }

    prepend(value){
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    removeFromFront(){
        if (this.isEmpty()) {
            return null;
        }
        let value = this.head.value;
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
        return value;
    }

    removeFromEnd(){
        if (this.isEmpty()) {
            return null;
        }
        let value = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return value;
    }

    printReverse(){
        if (this.isEmpty()) {
            console.log('List is empty');;
        }else{
            let curr = this.tail;
            let linkedList = '';

            while (curr) {
                linkedList+=`${curr.value} `;
                curr = curr.prev;
            }
            console.log(linkedList);
        }
    }
}

const list = new doubleLinkedList();
console.log(list.isEmpty());
console.log('Size: ',list.getSize());

list.append(20);
list.append(50);
list.print();

list.prepend(30);
list.prepend(10);
list.print();
console.log('Size: ',list.getSize());

list.removeFromFront();
list.removeFromEnd();
list.print();
console.log('Size: ',list.getSize());

list.printReverse();
console.log('Size: ',list.getSize());