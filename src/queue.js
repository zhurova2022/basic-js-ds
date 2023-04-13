const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.top = null;
    this.bottom = null;
  }

  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    const addItem = new ListNode(value);
    if (this.bottom){
      this.bottom.next = addItem;
    }    
    if (!this.top){
      this.top = addItem;
    }
    this.bottom = addItem;
  }

  dequeue() {
    let result = this.top;
    this.top = result.next;
    return result.value;
  }
}

module.exports = {
  Queue
};
