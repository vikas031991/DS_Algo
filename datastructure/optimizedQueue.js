class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }
    
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
    
    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    
    isEmpty() {
        return this.rear - this.front === 0;
    }
    
    peek() {
        return this.items[this.front];
    }
    
    size() {
        return this.rear - this.front;
    }
    
    print() {
        console.log("Print Queue: ", this.items);
    }
}

const queue = new Queue();
console.log("isEmpty: ", queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log("Pop an element: ", queue.dequeue());
console.log("Peek element: ", queue.peek());
console.log("Size of Queue: ", queue.size());
