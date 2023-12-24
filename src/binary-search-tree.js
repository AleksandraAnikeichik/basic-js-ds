const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = insertNode(this.rootNode, data);
    function insertNode(node, data) {
      if (!node) {
        return new Node(data);
      } 
      else if (node.data === data) {
        return node;
      } 
      else if (data > node.data) {
        node.right = insertNode(node.right, data);
      } 
      else {
        node.left = insertNode(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return Boolean(this.find(data));
  }

  find(data) {
    return findNode(this.rootNode, data);
    function findNode(node, data) {
      if (!node) {
        return null;
      } 
      else if (node.data === data) {
        return node;
      } 
      else if (data > node.data) {
        return findNode(node.right, data);
      } 
      else {
        return findNode(node.left, data);
      }
    }
  }

  remove(data) {
    this.rootNode = findNode(this.rootNode, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      } 
      else if (data > node.data) {
        node.right = findNode(node.right, data);
        return node;
      } 
      else if (data < node.data) {
        node.left = findNode(node.left, data);
        return node;
      } 
      else {
        if (!node.left && !node.right) {
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
        else {
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = findNode(node.right, minRight.data);
        return node;
      }
    }
  }
}

  min() {
    if (!this.rootNode) {
      return null;
    }
    let min = this.rootNode;
    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let max = this.rootNode;
    while (max.right) {
      max = max.right;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};