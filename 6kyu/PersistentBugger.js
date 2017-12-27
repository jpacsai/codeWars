// Persistent Bugger.

/*
Write a function, 'persistence', that takes in a positive parameter num and 
returns its multiplicative persistence, which is the number of times you must 
multiply the digits in num until you reach a single digit.

*/

function persistence(num) {
    var count = 0;
    var char = num.toString().length;
    var sum = 1;
  
    while (char > 1) {
      for (var y = 0; y < char; y++) {sum *= Number(num.toString().charAt(y));}
      num = sum;
      char = num.toString().length;
      count += 1;
      sum = 1;
    }
    return count;
  }