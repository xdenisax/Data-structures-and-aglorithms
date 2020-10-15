class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
  
class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }

    push(value){
        //check value 
        if(!value) {
            throw Error("Ivalid input");
        }

        const newNode = new Node(value);
        this.length++;

        if(this.top === null && this.bottom === null) {
            this.top = this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        return this;        
    }

    pop(){
        //empty stack
        if(!this.top) {
            throw Error ("No elements in stack.")
        }

        if( this.top === this.bottom ) {
            this.bottom = null;    
        }
        let poppedElement = this.top;
        this.top = this.top.next;
        this.length--;
        return poppedElement;
    }

    isEmpty() {
        return this.length > 0;
    }

    printStack() {
        let currentNode = this.top; 
        while( currentNode ) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

const myStack = new Stack();
myStack.push(2);
myStack.push(3);
myStack.push(5);
myStack.pop();
myStack.peek();

  

class StackAsArray {
    constructor(){
        this.values = [];
    }

    peek() {
        if(this.values <= 0) {
            return null;
        }
        return this.values[this.values.length - 1];
    }

    push(value){
        //check value 
        if(!value) {
            throw Error("Ivalid input");
        }
        return this.values.push(value);
    }

    pop(){
        //empty stack
        if(this.values.length <= 0) {
            throw Error ("No elements in stack.")
        }
        return this.values.pop();
    }

    isEmpty() {
        return this.values.length > 0;
    }

    printStack() {
        for(let i = 0; i< this.values.length; i++) { 
            console.log(this.values[i]);
        }
    }
}

const arrayStack = new StackAsArray();
arrayStack.push(1);
arrayStack.push(2);
arrayStack.push(3);
arrayStack.pop();
arrayStack.printStack();
  