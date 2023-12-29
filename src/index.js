module.exports = function check(str, bracketsConfig) {

  // create a collection of pairs of brackets
  /*
    Map(value) { 
      '(' => ')', 
      '[' => ']', 
      '{' => '}', 
      '|' => '|' 
    }
  */
  const bracketsPairs = new Map(bracketsConfig);

  // create an empty stack
  const stack = [];

  // a loop that runs through the entire string
  for (const symbol of str) {

    // if the pair of the last symbol in the stack is the same as in the string
    /*
      The '.get()' method of Map instances returns a specified element from this map. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map object.

      The '.at()' method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
    */
    if (bracketsPairs.get(stack.at(-1)) === symbol) {

      // remove it from the stack
      stack.pop();
    } 
    
    // in all other cases
    else {

      // add to the end of the stack
      stack.push(symbol);
    }
  }

  // check if our stack is empty -> returns true or false
  return stack.length === 0;
}
