class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    //fifo

    peek() {
        return this.first;
    }

    enqueue(value){
        if(!value) { 
            throw new Error ("Invalid input");
        }
        const newNode = new Node(value);
        if( this.length === 0 ) {
            this.first = this.last = newNode;
        }

        this.last.next = newNode;
        this.last = newNode;
        this.length++; 
        return this;
    }

    dequeue(){
        if(this.first === null ) {
            return null;
        }
        let dequeuedNode = this.first;
        if(this.first === this.last ) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return dequeuedNode;
    }
    
    isEmpty() {
        return this.length<=0;
    }

    printQueue() {
        let currentNode = this.first;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
  }
  
  const myQueue = new Queue();
  myQueue.enqueue(1);
  myQueue.enqueue(3);
  myQueue.enqueue(33);
  myQueue.dequeue();
  myQueue.printQueue();
  