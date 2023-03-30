var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = Object.create(stackMethods);
  instance.count = 0;
  instance.storage = {};
  return instance;
};


var stackMethods = {};

stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    var poppedValue = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return poppedValue;
  }
};

stackMethods.size = function() {
  return this.count;
};

// push:
// increment count
// add value to storage


// pop:
// if count is greater than 0
//   store value in var
//   decrement count
//   delete value from storage
//   return stored val


// size:
//  return count






