class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if (this.isEmpty()) {
            return 'Underflow Error';
        }
        return this.items.shift();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    peek(){
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }

    print(){
        if (this.isEmpty()) {
            console.log('Empty Queue');
        }else{
            console.log(this.items.toString());
        }
    }
}

const queue = new Queue();
console.log('Empty? ',queue.isEmpty());
console.log('Size :',queue.size());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log('Empty? ',queue.isEmpty());
console.log('Size :',queue.size());
console.log('Peek:',queue.peek());
queue.print();

console.log(queue.dequeue());
console.log('Size :',queue.size());
console.log('Peek:',queue.peek());
queue.print();