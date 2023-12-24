const { NotImplementedError } = require('../extensions/index.js');
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items.length === 0 ? undefined : this.items[this.items.length - 1];
  }
}

module.exports = {
  Stack
};
