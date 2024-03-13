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

        while (this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex,this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    poll(){
        const maxValue = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.length--;
        this.heapifyDown();

        return maxValue;
    }

    heapifyDown(){
        let currentIndex = 0;

        while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined) {
            let biggestChildIndex = this.getLeftChildIndex(currentIndex);

            if (this.data[this.getRightChildIndex(currentIndex)] !== undefined
            && this.data[this.getRightChildIndex(currentIndex)]
            > this.data[this.getLeftChildIndex(currentIndex)]) 
            {
                biggestChildIndex = this.getRightChildIndex(currentIndex);    
            }

            if (this.data[currentIndex] < this.data[biggestChildIndex]) {
                this.swap(currentIndex,biggestChildIndex);
                currentIndex = biggestChildIndex;
            } else {
                return;
            }
        }
    }
}

function heapSort(arr){
    const heap1 = new Heap();
    const result = [];

    for(let i = 0; i < arr.length; i++){
        heap1.push(arr[i]);
    }

    for(let i = 0; i < arr.length; i++){
        result.push(heap1.poll());
    }
    return result;
}

const arr = [3,6,33,12,5,16];
console.log(heapSort(arr));

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