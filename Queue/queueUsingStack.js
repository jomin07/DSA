class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  enqueue(element) {
    this.stack1.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow Error";

    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }

  peek() {
    if (this.isEmpty()) return "Empty Queue";
    if (this.stack2.length > 0) {
      return this.stack2[this.stack2.length - 1];
    }
    return this.stack1[0];
  }

  print() {
    if (this.isEmpty()) {
      console.log("Empty Queue");
    } else {
      if (this.stack2.length === 0) {
        console.log(this.stack1.toString());
      } else {
        const res = [];

        for (let i = this.stack2.length - 1; i >= 0; i--) {
          res.push(this.stack2[i]);
        }

        for (let i = 0; i < this.stack1.length; i++) {
          res.push(this.stack1[i]);
        }

        console.log(res.toString());
      }
    }
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
console.log("Peek :", queue.peek());
