var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.frontOfQueue = 0;
  this.backOfQueue = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.backOfQueue] = value;
  this.backOfQueue++;
};

Queue.prototype.dequeue = function() {
  if (this.backOfQueue > this.frontOfQueue) {
    var dequeuedValue = this.storage[this.frontOfQueue];
    delete this.storage[this.frontOfQueue];
    this.frontOfQueue++;
    return dequeuedValue;
  }
};

Queue.prototype.size = function() {
  return this.backOfQueue - this.frontOfQueue;
};

var Instance = new Queue();


