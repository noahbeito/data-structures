var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    backOfQueue: 0,
    frontOfQueue: 0,
    enqueue: queueMethods.enqueue,
    dequeue: queueMethods.dequeue,
    size: queueMethods.size,
  };
  return instance;
};

var queueMethods = {};
var storage = {};

queueMethods.enqueue = function(value) {
  storage[this.backOfQueue] = value;
  this.backOfQueue++;
};

queueMethods.dequeue = function() {
  if (this.backOfQueue - this.frontOfQueue > 0) {
    var dequeuedValue = storage[this.frontOfQueue];
    delete storage[this.frontOfQueue];
    this.frontOfQueue++;
    return dequeuedValue;
  }
};

queueMethods.size = function() {
  return this.backOfQueue - this.frontOfQueue;
};


// add following methods:

// enqueue function (value):
//   add value to back of the queue
//   increment backOfQueue

// dequeue function:
//   if back of queue is greater than front of queue
//     save value in front of queue to var
//     remove value from front of queue
//     increment frontOfQueue
//     return saved value


// size:
//   return backOfQueue minus frontOfQueue

