class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log("Overflow Error");
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow Error";
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.currentLength--;
    this.front = (this.front + 1) % this.capacity;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      console.log("Empty Queue");
    } else {
      let str = "";
      for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[this.rear] + " ";
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);
console.log("Empty ?", queue.isEmpty());
console.log("Is Full ?", queue.isFull());
queue.print();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
console.log("Empty ?", queue.isEmpty());
console.log("Is Full ?", queue.isFull());
queue.print();
console.log("Peek :", queue.peek());

console.log(queue.dequeue());
queue.enqueue(60);
queue.print();
console.log("Peek :", queue.peek());
