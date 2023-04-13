const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addItem(this.treeRoot, data);

    function addItem(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      data > node.data ? node.right = addItem(node.right, data) : node.left = addItem(node.left, data);
      return node;
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if (this.treeRoot === null) return null;
    let node = this.treeRoot;
    if (node.data === data) return node;
    else {
      while (node)
        if (node.data === data) return node;
        else {
          if (data < node.data) node = node.left;
          else node = node.right;
        }
    }
    return null;
  }

  remove(data ) {
    this.treeRoot = removeItem(this.treeRoot, data);
    function removeItem(node, data) {
      if (!node) return null;
      else if (data < node.data) {
        node.left = removeItem(node.left, data);
        return node;
      }
      else if (data > node.data) {
        node.right = removeItem(node.right, data);
        return node;
      }
      else {
        if ((!node.left) && (!node.right)) {
          return null;
        } 
        else if (!node.left) {
          node = node.right;
          return node;
        } 
        else if (!node.right) {
          node = node.left;
          return node;
        }
        let min = node.right;
        while (min.left) {
          min = min.left;
        }
        node.data = min.data;
        node.right = removeItem(node.right, min.data);
        return node;
      }
    }  
  }

  min() {
    let node = this.treeRoot;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data; 
  }

  max() {
    let node = this.treeRoot;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data; 
  }
}

module.exports = {
  BinarySearchTree
};