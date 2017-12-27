// Find the stray number

/*
You are given an odd-length array of integers, in which all of them are the same, 
except for one single number.

Implement the method stray which accepts such array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples:

[1, 1, 2] => 2

[17, 17, 3, 17, 17, 17, 17] => 3

*/

function stray(numbers) {
    var arr = numbers.sort();
    if (arr[0] != arr[1]) {
      console.log(arr[0]);
      return arr[0];
    }
    return arr[arr.length-1];
  }