class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element) {
        this.items.push(element);
    }
    
    dequeue() {
        return this.items.shift();
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    peek() {
        if(!this.isEmpty())
            return this.items[0];
        return null;
    }
    
    size() {
        return this.items.length;
    }
    
    print() {
        console.log("Print Queue: ", this.items.toString());
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
