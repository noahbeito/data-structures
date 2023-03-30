class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count > 0) {
      this.count--;
      var poppedValue = this.storage[this.count];
      delete this.storage[this.count];
      return poppedValue;
    }
  }

  size() {
    return this.count;
  }
}

var Instance = new Stack();




/*

Capitalize your function name to indicate to others that it is intended to be run with the keyword new

Use the keyword new when instantiating your class

Use the keyword this in your constructor

Explicitly declare a class method named constructor

Declare all other class methods within the class declaration

*/