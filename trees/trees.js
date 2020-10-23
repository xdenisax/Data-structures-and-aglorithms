class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
        if(!value) {
            throw Error ("Invalid input");
        }

        //empty
        const newNode = new Node(value);
        if( this.root === null ) { 
            this.root = newNode;
            return this;
        }
        //!empty
        let currentRoot = this.root;
        let isPlaceFound = false;
        while ( !isPlaceFound ) {
            if( value > currentRoot.value ) {
                currentRoot.right === null ? isPlaceFound = true : currentRoot = currentRoot.right;
            }
  
            if( value < currentRoot.value ) {
                currentRoot.left === null ? isPlaceFound = true : currentRoot = currentRoot.left;
            }
        }
        value > currentRoot.value ? currentRoot.right = newNode :  currentRoot.left = newNode;
        return this.root;
    }
    lookup(value){
        if(!value) {
            throw Error ("Invalid input");
        }

        if( this.root === null ) { 
            return null;
        }

        let currentRoot = this.root;
        while ( currentRoot !== null) {
            if( value > currentRoot.value ) {
                currentRoot = currentRoot.right;
            } else if( value < currentRoot.value ) {
                    currentRoot = currentRoot.left;
                } else  if( value === currentRoot.value ) {
                    return currentRoot;
                }
        }
        return null;
    }

    //not working
    remove(value) {
        if(!value) {
            throw Error ("Invalid input");
        }

        if( this.root === null ) { 
            throw Error ("No values to delete.");
        }

        let nodeToBeDeleted = this.lookup(value);
        
        if(!nodeToBeDeleted) { 
            throw Error ("Value not found.");
        }

        if(!nodeToBeDeleted.right) {
            nodeToBeDeleted = nodeToBeDeleted.left;
            return this;
        }

        if(!nodeToBeDeleted.right.left) {
            nodeToBeDeleted.right.left = nodeToBeDeleted.left;
            nodeToBeDeleted = nodeToBeDeleted.right;
            return this;
        } else {
            let currentLeftNode = nodeToBeDeleted.right.left;
            while(currentLeftNode.left) { 
                currentLeftNode = currentLeftNode.left;
            }
            currentLeftNode.right = nodeToBeDeleted.right;
            currentLeftNode.left = nodeToBeDeleted.left;
        }

    }
  }

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }


  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  JSON.stringify(traverse(tree.root))
  
  //     9
  //  4     20
  //1  6  15  170
  

  
  
  
  
  
  