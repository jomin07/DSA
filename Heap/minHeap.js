class Heap{
    constructor(){
        this.data = [];
    }

    getParentIndex(i){
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i){
        return 2 * i + 1;
    }

    getRightChildIndex(i){
        return 2 * i + 2;
    }

    swap(i1,i2){
        const temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }

    push(key){
        this.data[this.data.length] = key;
        this.heapifyUp();
    }

    heapifyUp(){
        let currentIndex = this.data.length - 1;

        while (this.data[currentIndex] < this.data[this.getParentIndex(currentIndex)]) {
            
            this.swap(currentIndex,this.getParentIndex(currentIndex));

            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    poll(key){
        const minValue = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.length--;
        this.heapifyDown();
        return minValue;
    }

    heapifyDown(){
        let currentIndex = 0;

        while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined) {
            
            let smallestChildIndex = this.getLeftChildIndex(currentIndex);

            if (this.data[this.getRightChildIndex(currentIndex)] !== undefined
            && this.data[this.getRightChildIndex(currentIndex)]
            < this.data[this.getLeftChildIndex(currentIndex)]) {
                
                smallestChildIndex = this.getRightChildIndex(currentIndex);
            }

            if (this.data[currentIndex] > this.data[smallestChildIndex]) {
                
                this.swap(currentIndex,smallestChildIndex);
                currentIndex = smallestChildIndex;

            } else {
                return;
            }
        }
    }
}

const heap = new Heap();
heap.push(25);
heap.push(5);
heap.push(40);
heap.push(70);
heap.push(90);
heap.push(44);

console.log('Heap after pushing values: ');
console.log(heap.data.join(","));

const res = [];
res.push(heap.poll());
res.push(heap.poll());
res.push(heap.poll());

console.log('Deleted values :');
console.log(res.join(","));

console.log('Resultant Heap :');
console.log(heap.data.join(","));