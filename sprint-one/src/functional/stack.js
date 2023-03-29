var Stack = function() {
  var someInstance = {};
  var counter = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };



  someInstance.pop = function() {
    if (counter > 0) {
      counter--;
      var popped = storage[counter];
      delete storage[counter];
      return popped;
    }
  };

  someInstance.size = function() {
    return counter;
  };
  // console.log('someInstance', someInstance);
  return someInstance;
};


/*

someInstance = {
  push: function...,
  pop: function...,
  size: number of properties
}

var pop = function() {
  // remove most recently added value
  // decrement counter
  // return the removed value
}

*/
