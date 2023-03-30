var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.frontOfQueue = 0;
  instance.backOfQueue = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.backOfQueue] = value;
  this.backOfQueue++;
};

queueMethods.dequeue = function() {
  if (this.backOfQueue > this.frontOfQueue) {
    var dequeuedValue = this.storage[this.frontOfQueue];
    delete this.storage[this.frontOfQueue];
    this.frontOfQueue++;
    return dequeuedValue;
  }
};

queueMethods.size = function() {
  return this.backOfQueue - this.frontOfQueue;
};

// declare back of queue var
// declare front of queue var

// enqueue
// add value to back of queue
// increment back of queue

// dequeue
// if back of queue is greater than front of queue
//   store front of queue in var
//   delete front of queue value
//   increment front of queue
//   return removed val

// size
// return back of queue minus front of queue