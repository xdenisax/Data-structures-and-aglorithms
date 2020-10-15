class Node { 
    constructor(value) {
      this.value = value;
      this.next = null;
      this.previous = null;
    }
  }
  
  class DoublyLinkedList {
      constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
      }
  
      append(value) {
        const newNode = new Node(value);
        newNode.previous = this.tail;
        this.tail.next = newNode; 
        this.tail = newNode;
        this.length++;        
      }
  
      prepand(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
      }
  
      insert(value, position) {
        if(!value) {
          throw Error('Invalid value');
        }
  
        if(position >= this.length) { 
          this.append(value);
          return;
        }
  
        if(position <= 0) {
          this.prepand(value);
          return;
        }
  
        const newNode = new Node(value);
        let currentNode = this.traverseToIndex(position - 1);
        currentNode.next.previous = newNode;
        newNode.next = currentNode.next;
        newNode.previous = currentNode;
        currentNode.next=newNode;
        this.length++;
      }
  
      remove(position) {
        // first node
        if(position <= 0) {
            this.head.next.previous = null;
            this.head = this.head.next;
            this.length--;
            return;
        }
  
        // bigger than length
        if(position > this.length-1) {
          position = this.length-1;
        }

        let previousNode = this.traverseToIndex(position - 1);
        let unwantedNode = previousNode.next;

        previousNode.next = unwantedNode.next;
        if( position !== this.length - 1) {
            unwantedNode.next.previous = previousNode;
        } else { 
            this.tail = previousNode;
        }
        this.length--;
      }
  
      traverseToIndex(position) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode.next && index < position) {
          currentNode = currentNode.next;
          index++;
        }
        return currentNode;
      }
  
      getList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode) {
          array.push(currentNode);
          currentNode = currentNode.next;
        }
        return array;
      }
    }
    
    let myLinkedList = new DoublyLinkedList(10);
    myLinkedList.append(5);
    myLinkedList.append(16);
    myLinkedList.prepand(22);
    myLinkedList.insert(44, 2);
    myLinkedList.remove(2);
  
    console.log(myLinkedList.getList());