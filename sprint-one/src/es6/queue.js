class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.frontOfQueue = 0;
    this.backOfQueue = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.backOfQueue] = value;
    this.backOfQueue++;
  }

  dequeue() {
    if (this.backOfQueue > this.frontOfQueue) {
      var dequeuedValue = this.storage[this.frontOfQueue];
      delete this.storage[this.frontOfQueue];
      this.frontOfQueue++;
      return dequeuedValue;
    }
  }

  size() {
    return this.backOfQueue - this.frontOfQueue;
  }
}

var Instance = new Queue();