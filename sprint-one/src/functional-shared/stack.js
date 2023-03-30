var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    count: 0,
    push: stackMethods.push,
    pop: stackMethods.pop,
    size: stackMethods.size,
  };

  return instance;
};

var stackMethods = {};
var storage = {};
var count = 0;

stackMethods.push = function(value) {
  this.count++;
  storage[this.count] = value;
  //  console.log('incrementCount: ', count);
};

stackMethods.pop = function() {
  if (this.count === 0) {
    return undefined;
  }

  if (this.count > 0) {
    var poppedValue = storage[this.count];
    delete storage[this.count];
    // console.log('decrementCount: ', count);
    this.count--;
    return poppedValue;
  }

};

stackMethods.size = function() {
  // console.log('sizeCount', count);
  return this.count;
};


// push:
// add value to top of stack
// increment count

// pop:
// if count is greater than 0
//   save value to var
//   remove value from top of stack
//   decrement count
//   return saved value

// size:
// return count