class QueueUsingStack{
    constructor(){
        this.stack1 = []; 
        this.stack2 = []; 
    }

    isEmpty(){
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    enqueue(element){
        this.stack1.push(element);
    }

    dequeue(){
        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }

    print() {
        if (this.isEmpty()) {
            console.log('Empty Queue');
        } else {
            console.log(this.stack1.concat(this.stack2.reverse()).toString());
            this.stack2.reverse();
        }
    }

    peek(){
        if (this.isEmpty()) {
            return null;
        } 

        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }      
        }
        return this.stack2[this.stack2.length - 1];
    }
}

const queue = new QueueUsingStack();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.print();
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.print();
console.log('Peek :',queue.peek());
