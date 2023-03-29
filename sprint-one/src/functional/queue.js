var Queue = function() {
  var someInstance = {};
  var counter = 0;
  var lowestCount = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  // add the value to the back of the queue (storage)
  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  // remove item from front of queue
  someInstance.dequeue = function() {
    if (counter - lowestCount > 0) {
      var dequeued = storage[lowestCount];
      delete storage[lowestCount];
      lowestCount++;
      return dequeued;
    }
  };


  // return the size of the queue (number of items in storage)
  someInstance.size = function() {
    return counter - lowestCount;
  };

  return someInstance;
};
