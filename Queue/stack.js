class Stack{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if (this.isEmpty()) {
            return 'Underflow Error';
        }
        return this.items.pop();
    }

    peek(){
        if (this.isEmpty()) {
            return 'Empty Stack';
        }
        return this.items[this.items.length - 1];
    }

    print(){
        if (this.isEmpty()) {
            console.log('Empty Stack');
        }else{
            console.log(this.items.toString());
        }
    }
}

const stack = new Stack();
console.log('Empty? ',stack.isEmpty());
console.log('Size :',stack.size());
stack.print();

stack.push(10);
stack.push(20);
stack.push(30);
console.log('Empty? ',stack.isEmpty());
console.log('Size :',stack.size());
stack.print();
console.log('Peek :',stack.peek());

console.log( stack.pop());
console.log('Size :',stack.size());
stack.print();
console.log('Peek :',stack.peek());

