// Find the odd int

/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/

function findOdd(A) {
    const set = Array.from(new Set(A));
    for (let i = 0; i < set.length; i++) {
      const times = A.filter(num => num === set[i]).length;
      if (times % 2 === 1) {
        return set[i];
      }
    }
}