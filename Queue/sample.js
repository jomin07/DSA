class Queue{
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
        if (this.isEmpty()) {
            return 'Underflow Error';
        }
        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
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

    print(){
        let str = '';
        for(let x of this.stack1){
            str += x + ' ';
        }
        for(let x = this.stack2.length-1; x >= 0; x--){
            str += this.stack2[x] + ' ';
        }
        console.log(str);
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.print();
console.log('Peek :',queue.peek());
console.log(queue.dequeue());
queue.print();
console.log('Peek :',queue.peek());