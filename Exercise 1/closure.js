const count = (function () {
  var counter = 0;
  return () => {
    counter++;
    return counter;
  };
})(); // replace this with your code;

console.log(count()); // outputs 0
console.log(count()); // outputs 1
console.log(count()); // outputs 2

//Explanation:
