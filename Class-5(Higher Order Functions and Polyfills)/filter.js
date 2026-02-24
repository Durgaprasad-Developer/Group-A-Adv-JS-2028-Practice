// filter ->
// callback
// iteration
// return the result in a new Array
// This exists inside the Array Prototype
// this works with conditions


Array.prototype.myFilter = function (callback) {
  // this - working array

  let results = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      results.push(this[i]);
    }
  }

  return results;
};


let arr = [1, 4, 6, 7, 8, 9];

let evens = arr.myFilter(function (num) {
  return num % 2 == 0;
});

console.log(evens);


