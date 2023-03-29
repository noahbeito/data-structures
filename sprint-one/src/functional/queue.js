var Queue = function() {
  var someInstance = {};
  var placeInQueue = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  // add the value to the back of the queue (storage)
  someInstance.enqueue = function(value) {
    storage[placeInQueue] = value;
    placeInQueue++;
  };

  // remove item from front of queue
  someInstance.dequeue = function() {
    if (placeInQueue > 0) {
      var removedValue = storage[0];
      delete storage[0];
      placeInQueue--;
      return removedValue;
    }
  };

  // return the size of the queue (number of items in storage)
  someInstance.size = function() {
    return placeInQueue;
  };

  return someInstance;
};
