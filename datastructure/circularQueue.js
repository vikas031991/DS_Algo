class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }
    
    enqueue(element) {
        if(this.isFull) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            if(this.front === -1)
                this.front = this.rear;
        }
    }
    
    dequeue() {
        if(!this.isEmpty()) {
            const item = this.items[this.front];
            this.items[this.front] = null;
            this.front = (this.front + 1) % this.capacity;
            this.currentLength -= 1;
            if(this.isEmpty()) {
                this.front = -1;
                this.rear = -1;
            }
            return item;
        }
        return null;
    }
    
    isFull() {
        return this.currentLength === this.capacity;
    }
    
    isEmpty() {
       return this.currentLength === 0;
    }
    
    peek() {
        return this.isEmpty() ? null : this.items[this.front];
    }
    
    size() {
        return this.items.length;
    }
    
    print() {
        if(this.isEmpty()) {
            console.log("Queue is Empty");
        } else {
            let str = '';
            let i;
            for(i=this.front; i!== this.rear; i=(i+1)%this.capacity) {
                str += this.items[i] + ' ';
            }
            str += this.items[i];
            console.log(str);
        }
    }
}

const queue = new CircularQueue(3);
console.log("isEmpty: ", queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log("isFull: ", queue.isFull());
console.log("Pop an element: ", queue.dequeue());
console.log("isFull: ", queue.isFull());
console.log("Size of Queue: ", queue.size());
console.log("Peek element: ", queue.peek());
queue.enqueue(40);
queue.print();
console.log("isFull: ", queue.isFull());
