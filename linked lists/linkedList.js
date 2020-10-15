class Node { 
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
    constructor(value) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode; 
        this.tail = newNode;
        this.length++;        
    }

    prepand(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
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
      newNode.next = currentNode.next;
      currentNode.next=newNode;
      this.length++;
    }

    remove(position) {
      if(position <= 0) {
        this.head = this.head.next;
        return;
      }

      if(position > this.length-1) {
        position = this.length-1;
        console.log(position)
      }

      let previous = this.traverseToIndex(position - 1);
      previous.next = previous.next.next;
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

    reverseList() {
      if(this.length === 1) { 
        return this;
      }
      let first = this.head;
      let second = first.next;
      while( second ) {
        let third = second.next;
        second.next = this.head;
        this.head = second;
        second = third;

      }
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepand(22);
  myLinkedList.insert(44, 2);
  myLinkedList.remove(2);
  let reversedList = myLinkedList.reverseList();
  console.log(reversedList.getList())