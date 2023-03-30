var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};


Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count > 0) {
    this.count--;
    var poppedValue = this.storage[this.count];
    delete this.storage[this.count];
    return poppedValue;
  }
};

Stack.prototype.size = function() {
  return this.count;
};

var Instance = new Stack();

// push
//   add value to storage
//   increment count

// pop
//   if count is greater than 0
//     decrement count
//     store val in var
//     delete val
//     return var

// size
// return count


// use keyword new

// dont explicitly declare or return the instance