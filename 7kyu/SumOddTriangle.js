/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1)

*/

function addOdd(n) {
    var a = [1];
    var last;
    console.log(a);
    for (var r = 1; r <= n-1; r++) {
      last = a[r-1] + 2;
      a.push(last,last+2);
      a = a.slice(1);
      console.log(a);
    }
    // var sum = a.reduce(function(a, b) { return a + b; }, 0);
    // return sum;
  }
  
  addOdd(6);