class Stack{
    constructor(){
        this.q1 = [];
        this.q2 = [];
    }

    isEmpty(){
        return this.q1.length === 0;
    }

    size(){
        return this.q1.length;
    }

    push(element){
        this.q1.push(element);
    }

    pop(){
        if (this.isEmpty()) {
            return 'Underflow Error';
        }

        // Transfer elements from q1 to q2 except for the last element
        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        console.log(this.q2);

        const value = this.q1.shift();

        
        // Transfer elements back from q2 to q1
        while (this.q2.length !== 0) {
            this.q1.push(this.q2.shift());
        }
        return value;
    }

    peek(){
        if (this.isEmpty()) {
            return 'Empty';
        }
        return this.q1[this.q1.length - 1];
    }

    print(){
        if (this.isEmpty()) {
            console.log('Empty Queue');
        }else{
            console.log(this.q1.toString());
        }

    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); 

console.log(stack.peek());
console.log(stack.pop());
stack.print();