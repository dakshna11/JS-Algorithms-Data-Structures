class Queue{
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enQueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    deQueue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    size() {
        return this.rear - this.front;
    }

    peek() {
        if (this.isEmpty()) {   
            return null;
        }
        return this.items[this.front];
    }

    print() {
        console.log(this.items);
    }
}

const queue = new Queue();
queue.enQueue(10);
queue.enQueue(20);
queue.enQueue(30);
console.log(queue.deQueue());
console.log(queue.peek());
queue.print();

// Big O Notation:
// enQueue: O(1)
// deQueue: O(1)
// isEmpty: O(1)
// size: O(1)
// peek: O(1)